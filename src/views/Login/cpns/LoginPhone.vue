<template>
  <div class='LoginPhone'>
    <!-- 表单 -->
    <div class="form-box">
      <el-form
        ref="ruleFormRef"
        :model="phoneInfo"
        :rules="rules"
      >
        <el-form-item class="bounce-in-up" prop="phone">
          <el-input class="w-50" v-model="phoneInfo.phone" size="large" placeholder="手机号" :prefix-icon="Iphone"/>
        </el-form-item>
        <el-form-item class="bounce-in-up" prop="code">
          <div class="code-box w-full">
            <el-input v-model="phoneInfo.code" size="large" placeholder="短信验证码" :prefix-icon="Aim"/>
            <el-button class="w-36 ml-3" size="large">获取验证码</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="bounce-in-up"><el-button class="w-full" color="#4285f4" @click="submitForm(ruleFormRef)">登录</el-button></div>
    <div class="bounce-in-up"><el-button class="w-full mt-4" @click="loginTypeClick('account')">返回</el-button></div>
  </div>
</template>

<script lang='ts' setup>
import type { FormInstance, FormRules } from "element-plus";
import { Iphone, Aim } from "@element-plus/icons-vue";
import { reactive, ref } from 'vue'
import { submitForm, loginTypeClick } from "@/hooks/loginHook";
const ruleFormRef = ref<FormInstance>();
const phoneInfo = reactive({
  phone: '',
  code: '',
})
const rules = reactive<FormRules>({
  phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});
</script>

<style lang='scss' scoped>
.code-box {
  @include flex(center, space-between);
}
</style>
