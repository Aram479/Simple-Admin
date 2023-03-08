<template>
  <div class='darkSetup'>
    <!-- 暗黑模式切换 -->
    <el-switch v-model="isDark" size="large" active-icon="Sunny" inactive-icon="Moon" inline-prompt
      @change="toggleDark" />
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { useDarkChange } from '@/hooks/darkHook';
const { isDark, toggleDark } = useDarkChange()
</script>

<style lang='scss' scoped></style>
