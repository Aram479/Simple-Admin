<template>
  <div class="department">
    <SearchForm v-bind="searchConfig" />
    <PageTable v-bind="tableConfig" pageName="department" :tableData="departmentList" ></PageTable>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from "pinia";
import { searchConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
const systemStore = useSystemStore();
const { departmentList } = storeToRefs(systemStore);
</script>

<style lang="scss" scoped></style>
