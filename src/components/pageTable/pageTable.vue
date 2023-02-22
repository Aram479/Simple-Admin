<template>
  <div class="pageTable">
    <el-table :data="tableData" table-layout="auto" cell-class-name="cell-box" header-cell-class-name="cell-box" border>
      <el-table-column v-for="item in headerData" :key="item.prop" :prop="item.prop" :label="item.label" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  headerData: any[],
  tableData: any[],
}>(), {
  headerData: ()=> ([]),
  tableData: ()=> ([])
})

</script>

<style lang="scss" scoped>
.pageTable {
  padding: 25px;
  margin-bottom: 20px;
  background-color: #fff;
}
</style>
<style>
.cell-box {
  padding: 8px !important;
}
</style>