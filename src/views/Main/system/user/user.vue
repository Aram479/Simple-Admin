<template>
  <div class="user">
    <SearchForm v-bind="formConfig" />
    <PageTable v-bind="tableConfig" :tableData="userTableData" :totalCount="totalCount" @currentChange="currentChange">
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success': 'danger'">{{ scope.row.enable ? '启用': '禁用' }}</el-tag>
      </template>
      <template #createAt="scope">
        <span v-format-time>{{ scope.row.createAt}}</span>
      </template>
      <template #updateAt="scope">
        <span v-format-time>{{ scope.row.updateAt}}</span>
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
import { useEventbus } from '@/utils/mitt';
import { formConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import type { IUserResType, IQueryInfo } from "./userViewType";
const { refreshTable } = useEventbus()
const systemStore = useSystemStore();
const { userTableData, totalCount } = storeToRefs(systemStore);
const resPageData = ref<IUserResType>({
  pageUrl: "/users/list",
  queryInfo: {
    offset: 0,
    size: 5,
  },
});
const getTableList = () => {
  systemStore.getPageListActions(resPageData.value);
}
const currentChange = (data: IQueryInfo)=>{
  resPageData.value.queryInfo = data
}
watchEffect(()=>{
  getTableList()
})
onMounted(() => {
  refreshTable(()=>{
    getTableList()
  })
})
</script>

<style lang="scss" scoped></style>
