<template>
  <div class="department">
    <SearchForm v-bind="searchConfig" @handleSearchForm="handleSearchForm" />
    <PageTable ref="tableRef" v-bind="tableConfig" pageName="department" :tableData="departmentList" >
      <template #parentId="scope">
        <div >{{ parentName(scope.row.parentId) ?? '最高级' }}</div>
      </template>
    </PageTable>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { ref, computed, onMounted } from "vue";
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from "pinia";
import { searchConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import { useSearchForm } from "@/hooks/systemHook";
import { getPageListData } from "@/service/system/systemAPI";
const systemStore = useSystemStore();
const { departmentList } = storeToRefs(systemStore);
const { tableRef, handleSearchForm } = useSearchForm()

const deptList = ref<any[]>([])
const parentName = computed(()=> (id: string)=> deptList.value.find(item=> item.id === id)?.name)

onMounted(async ()=> {
  const { data: deptData } = await getPageListData('/department/list')
  deptList.value = deptData.list
})
</script>

<style lang="scss" scoped></style>
