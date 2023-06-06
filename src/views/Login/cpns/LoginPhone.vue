<template>
  <div class="LoginPhone">
    <!-- 表单 -->
    <div class="form-box">
      <el-form ref="ruleFormRef" :model="phoneInfo" :rules="rules">
        <el-form-item class="bounce-in-up" prop="phone">
          <el-input
            class="w-50"
            v-model="phoneInfo.phone"
            size="large"
            placeholder="手机号"
            :prefix-icon="Iphone"
          />
        </el-form-item>
        <el-form-item class="bounce-in-up" prop="code">
          <div class="code-box w-full">
            <el-input
              v-model="phoneInfo.code"
              size="large"
              placeholder="短信验证码"
              :prefix-icon="Aim"
            />
            <el-button
              v-if="!isClickSend"
              class="w-36 ml-3"
              size="large"
              @click="handleSendCode"
              >获取验证码</el-button
            >
            <el-button v-else class="w-36 ml-3" size="large" disabled
              >{{ codeNum }}秒后重新获取</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="bounce-in-up">
      <el-button
        class="w-full"
        color="#4285f4"
        @click="submitForm(ruleFormRef, phoneInfo)"
        >登录</el-button
      >
    </div>
    <div class="bounce-in-up">
      <el-button class="w-full mt-4" @click="loginTypeClick('account')"
        >返回</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Iphone, Aim } from "@element-plus/icons-vue";
import { submitForm, loginTypeClick } from "@/hooks/loginHook";
import type { FormInstance, FormRules } from "element-plus";
import type { IPhone } from "../LoginViewType";
const ruleFormRef = ref<FormInstance>();
const phoneInfo = reactive<IPhone>({
  phone: "",
  code: "",
});

// 定时器id
let clearId: any = null;
// 倒计时时间
const codeNum = ref(5);
// 是否发送了验证码 防止连点
const isClickSend = ref(false);

/* 手机校验规则 */
const validatePhone = (rule: any, value: any, callback: any) => {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (value == "") {
    return callback(new Error("请输入手机号"));
  } else if (!reg.test(value)) {
    return callback(new Error("手机号码格式不正确"));
  }
  callback();
};
const rules = reactive<FormRules>({
  phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
  code: [
    { min: 4, max: 4, message: "输入4位数字验证码", trigger: "blur" },
    { required: true, message: "请输入验证码", trigger: "blur" },
  ],
});

// 发送验证码
const handleSendCode = () => {
  ruleFormRef.value!.validateField("phone", (valid) => {
    if (isClickSend.value || codeNum.value != 5 || !valid) return;
    isClickSend.value = true;
    clearId = setInterval(() => {
      codeNum.value--;
      if (codeNum.value == 0) {
        clearInterval(clearId);
        codeNum.value = 5;
        isClickSend.value = false;
      }
    }, 1000);
  });
};
</script>

<style lang="scss" scoped>
.code-box {
  @include flex(center, space-between);
}
</style>
