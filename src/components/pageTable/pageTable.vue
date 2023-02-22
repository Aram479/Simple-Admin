<template>
  <div class="pageTable">
    <el-table :data="tableData" table-layout="auto"  border>
      <el-table-column v-for="item in headerData" align="center" :key="item.prop" :prop="item.prop" :label="item.label">
        <template #default="scoped">
          <!-- 动态插槽 -->
          <slot :name="item.slotName" :row="scoped.row">
            <!-- 操作列按钮 -->
            <div class="options-box" v-if="item.prop === 'options'">
              <el-button type="primary" icon="EditPen" size="small">修改</el-button>
              <el-button type="danger" icon="Delete" size="small">删除</el-button>
              <el-dropdown class="mx-3">
                <span class="el-dropdown-link">
                  <el-icon color="#4285f4" :size="18"><MoreFilled /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>重置密码</el-dropdown-item>
                    <el-dropdown-item>分配角色</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <!-- 其他列数据 -->
            <span v-else>{{ scoped.row[item.prop]}}</span>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { ITableHeader } from '@/components/pageTable/pageTableTypes'
import type { ISystemListData } from "@/service/system/systemAPIType";
const props = withDefaults(defineProps<{
  headerData: ITableHeader[],
  tableData: ISystemListData[],
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
.options-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
<style>
.cell-box {
  padding: 8px !important;
}
</style>