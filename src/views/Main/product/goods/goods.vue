<template>
  <div class="goods">
    <SearchForm v-bind="searchConfig" @handleSearchForm="handleSearchForm" />
    <PageTable ref="tableRef" v-bind="tableConfig" pageName="goods" :tableData="goodsList">
      <template #status="scope">
        <el-tag effect="plain" :type="scope.row.status ? 'success': 'danger'" >{{ scope.row.status ? '启用': '禁用' }}</el-tag>
      </template>
    </PageTable>
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
const { goodsList } = storeToRefs(systemStore);
const { tableRef, handleSearchForm } = useSearchForm()
</script>

<style lang="scss" scoped></style>
