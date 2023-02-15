<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './cpns/LoginPanel.vue';
import { ref, computed } from 'vue';

</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.png') no-repeat;
  background-size: 600px;
  background-position: -60px  100%;
}
</style>