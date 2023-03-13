<template>
  <div class="category">
    <SearchForm v-bind="searchConfig" @handleSearchForm="handleSearchForm" />
    <PageTable ref="tableRef" v-bind="tableConfig" pageName="category" :tableData="categoryList" />
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from "pinia";
import { searchConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import { useSearchForm } from "@/hooks/systemHook";
const systemStore = useSystemStore();
const { categoryList } = storeToRefs(systemStore);
const { tableRef, handleSearchForm } = useSearchForm()
</script>

<style lang="scss" scoped></style>
