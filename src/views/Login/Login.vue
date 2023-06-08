<template>
  <div class="login">
    <div class="login-box">
      <LoginBackground />
      <LoginPanel />
    </div>
    <darkSetup class="p-5 fixed top-0 right-0" />
  </div>
</template>

<script lang="ts" setup>
import darkSetup from "@/components/cmsSetting/cpns/darkSetup.vue";
import { ref, computed } from "vue";
import LoginPanel from "./cpns/LoginPanel.vue";
import LoginBackground from "./cpns/LoginBackground.vue";
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  @include flex(center, center);
  .login-box {
    width: 100%;
    @include flex(center, space-around);
  }
}
</style>
