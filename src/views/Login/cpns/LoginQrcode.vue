<template>
  <div class="LoginQrcode">
    <div class="bounce-in-up qrcode-box"><VueQrcode :value="'二维码测试'" :size="200" /></div>
    <div class="bounce-in-up divider-box p-3">
      <el-divider content-position="center">
        <div class="text-center text-xs text-gray-500">扫码后点击"确认"，即可完成登录</div>
      </el-divider>
    </div>
    <div class="bounce-in-up"><el-button class="w-full mt-4" @click="loginTypeClick('account')">返回</el-button></div>
  </div>
</template>

<script lang="ts" setup>
import { loginTypeClick } from "@/hooks/loginHook";
import VueQrcode from "@/baseUI/vueQrcode/vueQrcode.vue";
</script>

<style lang="scss" scoped>
.qrcode-box {
  @include flex;
}
</style>