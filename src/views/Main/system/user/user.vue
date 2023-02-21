<template>
  <div class="user">
    <SearchForm v-bind="formConfig"></SearchForm>
    <div class="table-box">34</div>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import { formConfig } from './config/searchConfig'
</script>

<style lang="scss" scoped>
.table-box {
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>
