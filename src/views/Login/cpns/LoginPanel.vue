<template>
  <div class='LoginPanel w-96'>
      <!-- 登录标题 -->
      <systemTitle></systemTitle>
      <!-- 用户名/密码 登录 -->
      <LoginAccount v-if="loginType === 'account'" />
      <!-- 手机登录 -->
      <LoginPhone v-else-if="loginType === 'phone'" />
      <!-- 扫码登陆 -->
      <LoginQrcode v-else-if="loginType === 'qrcode'" />
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useLoginStore } from "@/stores/modules/loginStore";
import systemTitle from '@/components/Login/systemTitle.vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
import LoginQrcode from './LoginQrcode.vue'

const loginStore = useLoginStore()
const { loginType } = storeToRefs(loginStore)
</script>

<style lang='scss' scoped>
</style>
