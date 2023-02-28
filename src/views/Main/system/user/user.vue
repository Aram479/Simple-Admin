<template>
  <div class="user">
    <SearchForm v-bind="searchConfig" @handleSearchForm="handleSearchForm" />
    <PageTable ref="tableRef" v-bind="tableConfig" pageName="users" :tableData="usersList">
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success': 'danger'">{{ scope.row.enable ? '启用': '禁用' }}</el-tag>
      </template>
    </PageTable>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { ref, onMounted, watchEffect } from 'vue';
import { storeToRefs } from "pinia";
import { useSystemStore } from "@/stores/modules/system";
import { searchConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import { useSearchForm } from "@/hooks/systemHook";

const systemStore = useSystemStore();
const { usersList } = storeToRefs(systemStore);
const { tableRef, handleSearchForm } = useSearchForm()
</script>

<style lang="scss" scoped></style>
