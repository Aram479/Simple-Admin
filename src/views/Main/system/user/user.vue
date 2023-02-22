<template>
  <div class="user">
    <SearchForm v-bind="formConfig" />
    <PageTable v-bind="tableConfig" />
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import PageTable from "@/components/pageTable/pageTable.vue";
import { ref, computed, reactive } from "vue";
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from "pinia";
import { formConfig } from "./config/searchConfig";
import { tableConfig } from './config/tableConfig';
import type { IUserResType } from "./userViewType";
const systemStore = useSystemStore();
const { userList } = storeToRefs(systemStore);
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
