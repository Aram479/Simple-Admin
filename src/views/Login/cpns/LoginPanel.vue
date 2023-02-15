<template>
  <div class='LoginPanel'>
    <LoginAccount />
    <LoginPhone />
  </div>
</template>

<script lang='ts' setup>
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
import { reactive, ref } from 'vue'

</script>

<style lang='scss' scoped>
</style>
