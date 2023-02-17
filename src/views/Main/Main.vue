<template>
  <div class="Main">
    666
  </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '@/stores/modules/loginStore';
import { storeToRefs } from 'pinia';
const loginStore = useLoginStore()
const { userMenus } = storeToRefs(loginStore)
</script>

<style lang="scss" scoped>

</style>