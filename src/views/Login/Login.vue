<template>
  <div class="login">
    <LoginPanel />
    <darkSetup class="float-right p-5" />
  </div>
</template>

<script lang="ts" setup>
import darkSetup from '@/components/cmsSetting/cpns/darkSetup.vue'
import { ref, computed } from 'vue';
import LoginPanel from './cpns/LoginPanel.vue';

</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.png') no-repeat;
  background-size: 800px;
  background-position: -60px  100%;
}
</style>