import PageTable from "@/components/pageTable/pageTable.vue";
import { ref } from "vue";
import type { Iform } from "@/components/searchForm/searchFormTypes"
export function useSearchForm() {
  const tableRef = ref<InstanceType<typeof PageTable>>()
  const handleSearchForm = (searchValue: Iform)=>{
    tableRef.value?.setSearchVale(searchValue)
  }
  return { tableRef, handleSearchForm }
}