<template>
  <div class='Breadcrumb'>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="breadItem in breadcrumbList" :to="{ path: breadItem.path || breadItem.redirect }">{{$t(<string>breadItem.meta.en)}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const breadcrumbList = computed(()=> route.matched.slice(1))

</script>

<style lang='scss' scoped>
</style>
