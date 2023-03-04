import PageTable from "@/components/pageTable/pageTable.vue";
import { ref } from "vue";
import type { Iform } from "@/components/searchForm/searchFormTypes";
import { useLoginStore } from "@/stores/modules/loginStore";
import { storeToRefs } from "pinia";

// 搜索表格
export function useSearchForm() {
  const tableRef = ref<InstanceType<typeof PageTable>>();
  const handleSearchForm = (searchValue: Iform) => {
    tableRef.value?.setSearchVale(searchValue);
  };
  return { tableRef, handleSearchForm };
}

// 查询用户按钮权限
export function userPermission(pageName: string, handleName: string) {
  const loginStore = useLoginStore();
  const { buttonPermission } = storeToRefs(loginStore);
  //获取当前页面权限
  const verifyPermission = `system:${pageName}:${handleName}`;
  //根据当前页面权限返回布尔值
  return !!buttonPermission?.value?.find((item) => item === verifyPermission);
}
