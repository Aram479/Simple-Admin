<template>
  <div class="LoginBackground">
    <el-image style="height: 450px" :src="src" fit="fill" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import aaa from "@/assets/img/login-bg.png";
const src = ref(aaa);
</script>

<style lang="scss" scoped>
.el-image {
  position: absolute;
  bottom: 0;
  left: 50px;
}
// '@/assets/img/login-bg.png'
</style>
