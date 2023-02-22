<template>
  <div class="user">
    <SearchForm v-bind="formConfig" />
    <PageTable v-bind="tableConfig" :tableData="userTableData"></PageTable>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSystemStore } from "@/stores/modules/system";
import { formConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import type { IUserResType } from "./userViewType";
const systemStore = useSystemStore();
const { userTableData } = storeToRefs(systemStore);
const resPageData = ref<IUserResType>({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10,
  },
});
systemStore.getPageListActions(resPageData.value);
</script>

<style lang="scss" scoped></style>
