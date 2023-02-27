<template>
  <div class="role">
    <PageTable v-bind="tableConfig" pageName="role" :tableData="roleList" ></PageTable>
  </div>
</template>

<script lang="ts" setup>
import PageTable from "@/components/pageTable/pageTable.vue";
import { tableConfig } from './config/tableConfig';
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from "pinia";
const systemStore = useSystemStore();
const { roleList } = storeToRefs(systemStore);
</script>

<style lang="scss" scoped></style>
