<template>
  <div class="pageTable">
    <TableOperate @handleRowDensity="handleRowDensity" @handleTreeChange="handleTreeChecks" :headerData="headerData" />
    <el-table :header-row-class-name="rowDensity" :cell-class-name="rowDensity" v-loading="tableLoading" :data="tableData" table-layout="auto"  border>
      <template v-for="item in headerData" :key="item.prop" >
        <el-table-column v-if="checksCol.indexOf(item.prop) !== -1"  align="center" :prop="item.prop" :label="item.label">
          <template #default="scoped">
            <!-- 动态插槽 -->
            <slot :name="item.slotName" :row="scoped.row">
              <!-- 操作列按钮 -->
              <div class="options-box" v-if="item.prop === 'options'">
                <el-button type="primary" icon="EditPen" size="small">修改</el-button>
                <el-button type="danger" icon="Delete" size="small">删除</el-button>
                <!-- 其他操作 -->
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
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import TableOperate from './tableOperate.vue'
import { ref } from 'vue';
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from 'pinia';
import type { ITableHeader } from '@/components/pageTable/pageTableTypes'
import type { ISystemListData } from "@/service/system/systemAPIType";
const props = withDefaults(defineProps<{
  headerData: ITableHeader[],
  tableData: ISystemListData[],
}>(), {
  headerData: ()=> ([]),
  tableData: ()=> ([])
})
const systemStore = useSystemStore();
const { tableLoading } = storeToRefs(systemStore);
// 默认显示的列
const checksCol = ref<string[]>(props.headerData.map(item=> item.prop))
// 行密度
const rowDensity = ref<string>("el-table--default")
/* 行密度改变事件 */
const handleRowDensity = (density: string)=>{
  rowDensity.value = `el-table--${density}`
}
// 列隐藏事件
const handleTreeChecks = (checks: string[]) => {
  checksCol.value = checks
}
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
.el-table--large {
  padding: 12px 0px !important;
}
.el-table--default {
  padding: 8px 0px !important;
}
.el-table--small {
  padding: 4px 0px !important;
}
</style>