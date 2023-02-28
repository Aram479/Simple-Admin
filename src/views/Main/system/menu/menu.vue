<template>
  <div class="menu">
    <!-- <SearchForm v-bind="searchConfig" /> -->
    <PageTable ref="tableRef" v-bind="tableConfig" pageName="menu" :tableData="menuList"></PageTable>
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
const { menuList } = storeToRefs(systemStore);
const { tableRef, handleSearchForm } = useSearchForm()
</script>

<style lang="scss" scoped></style>
