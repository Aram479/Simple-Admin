<template>
  <div class="LoginAccount">
    <!-- 表单 -->
    <div class="form-box">
      <el-form
        ref="ruleFormRef"
        :model="account"
        :rules="rules"
      >
        <el-form-item class="bounce-in-up" prop="name">
          <el-input class="w-50" v-model="account.name" clearable size="large" placeholder="账号" :prefix-icon="UserFilled" />
        </el-form-item>
        <el-form-item class="bounce-in-up" prop="password">
          <el-input v-model="account.password" show-password type="password" size="large" placeholder="密码" :prefix-icon="Lock"/>
        </el-form-item>
      </el-form>
    </div>
    <!-- 记住密码/登录 -->
    <div class="rem-login-box mb-2 bounce-in-up">
      <div class="password-box">
        <el-checkbox v-model="isKeepPwd" label="记住密码" size="large" />
        <el-link :underline="false" type="primary">忘记密码？</el-link>
      </div>
      <el-button class="w-full my-2" color="#4285f4" @click="submitForm(ruleFormRef, account, isKeepPwd)">
        登录
      </el-button>
    </div>
    <!-- 登录类型 -->
    <div class="loginType-box bounce-in-up">
      <el-button class="w-28" v-for="item in buttonType" :key="item.type"  @click="loginTypeClick(item.type)">
        {{ item.name }}
      </el-button>
    </div>
    <!-- 第三方登录 -->
    <div class="divider-box bounce-in-up">
      <div class="pt-2"><el-divider content-position="center"><span class="text-xs text-gray-500">第三方登录</span></el-divider></div>
      <div class="nonparty-box">
        <el-button v-for="item in nonpartyIcon" :key="item.name" plain circle color="#6b7280">
          <el-icon>
            <component :is="item.icon"/>
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import localCache from '@/utils/cache'
import { reactive, ref } from "vue";
import { UserFilled, Lock } from "@element-plus/icons-vue";
import { submitForm, loginTypeClick } from "@/hooks/loginHook";
import type { IAccount, buttonType } from '../LoginViewType';
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const isKeepPwd = ref<boolean>(localCache.getItem('isKeepPwd') ?? false)
const nonpartyIcon = reactive([
  {
    name: 'Wechat',
    icon: 'ChromeFilled'
  },
  {
    name: 'Alipay',
    icon: 'ElemeFilled'
  },
  {
    name: 'Tencent',
    icon: 'Shop'
  },
  {
    name: 'Micro-blog',
    icon: 'SwitchFilled'
  }
])
const account = reactive<IAccount>(localCache.getItem('account') ?? {
  name: "coderwhy",
  password: "123456",
});
const buttonType = reactive<buttonType[]>([
  { type: "phone", name: "手机登录" },
  { type: "qrcode", name: "二维码登录" },
  { type: "account", name: "注册" },
]);
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
</script>

<style lang="scss" scoped>
.LoginAccount {
  .rem-login-box {
    @include flex(none, space-between, column);
    .password-box {
      @include flex(center, space-between);
      height: 30px;
    }
  }
  .loginType-box {
    @include flex(center, space-between);
  }
  .divider-box {
    .nonparty-box {
      @include flex(center, space-around);
    }
  }
}

</style>
