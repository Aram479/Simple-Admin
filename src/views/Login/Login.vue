<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import LoginPanel from './cpns/LoginPanel.vue';

</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.png') no-repeat;
  background-size: 600px;
  background-position: -60px  100%;
}
</style>