<template>
  <div class="pageTable">
    <TableOperate @handleRowDensity="handleRowDensity" @handleTreeChange="handleTreeChecks" :headerData="headerData" v-bind="$attrs" />
    <el-table 
      ref="tableRef" 
      v-if="checksCol.length" 
      v-bind="elTableProps"
      :header-row-class-name="rowDensity" 
      :cell-class-name="rowDensity" 
      v-loading="tableLoading" 
      :data="tableData" 
      border 
      @select="handleSelectChange" 
      @select-all="handleSelectChange"
    >
      <template v-for="(item, index) in headerData" :key="item.prop">
        <el-table-column v-if="checksCol.indexOf(item.prop) !== -1" align="center" :type="item.type" :prop="item.prop" :label="item.label" :min-width="item.minWidth">
          <!-- 不能在多选插槽赋值 多选的样式是用element的 -->
          <template #default="scoped" v-if="item.type !== 'selection'">
            <!-- 动态插槽 -->
            <slot :name="item.slotName" :row="scoped.row">
              <!-- 操作列按钮 -->
              <div class="options-box" v-if="item.prop === 'options'">
                <el-button type="primary" icon="EditPen" size="small">{{ $t('Edit') }}</el-button>
                <el-button type="danger" icon="Delete" size="small">{{ $t('Delete') }}</el-button>
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
              <!-- 序号列 -->
              <div v-else-if="item.prop === 'index'">{{ (totalCount + 1) - scoped.row.id > 0 ? (totalCount + 1) - scoped.row.id : index }}</div>
              <!-- 图片列 -->
              <div v-else-if="item.prop === 'imgUrl'"><el-image fit="contain" :src="scoped.row.imgUrl" :previewSrcList="[scoped.row.imgUrl]" preview-teleported style="width: 90px; height: 90px" /></div>
              <!-- 时间列 -->
              <span v-else-if="~['createAt', 'updateAt'].indexOf(item.prop)" v-format-time>{{ scoped.row[item.prop] }}</span>
              <!-- 其他列数据 -->
              <span v-else class="truncate cursor-default" :title="scoped.row[item.prop]">{{ scoped.row[item.prop] ?? '暂无数据' }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="totalCount"
      class="justify-end py-5"
      layout="total, sizes, prev, pager, next, jumper"
      v-model:current-page="pageInfo.currentPage"
      v-model:page-size="pageInfo.pageSize"
      :page-sizes="[5, 10, 20, 30]"
      :background="true"
      :total="totalCount"
      @size-change="handleSizeChange"
      small
    />
  </div>
</template>

<script lang="ts" setup>
import TableOperate from './tableOperate.vue'
import { ref, toRaw, computed, watch, watchEffect, nextTick, onMounted } from 'vue';
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from 'pinia';
import { ElTable } from 'element-plus';
import { IUserResType, IQueryInfo } from '@/views/Main/system/user/userViewType';
import { useEventbus } from '@/utils/mitt';
import type { ITableHeader, IPageInfo, IElTableProps } from './pageTableTypes'
import type { ISystemListData } from "@/service/system/systemAPIType";
import type { Iform } from '../searchForm/searchFormTypes';

const props = withDefaults(defineProps<{
  headerData?: ITableHeader[],
  tableData?: ISystemListData[],
  elTableProps?: IElTableProps,
  pageName: string,
}>(), {
  headerData: ()=> ([]),
  tableData: ()=> ([]),
})
const emit = defineEmits<{
  (e: "currentChange", queryInfo: IQueryInfo): void;
}>();
const systemStore = useSystemStore();
const { tableLoading } = storeToRefs(systemStore);
const { refreshTable } = useEventbus()
// 分页请求数据
const resPageData = ref<IUserResType>({
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 5,
  },
});
const tableRef = ref<InstanceType<typeof ElTable>>();
// 多选时选择的行
const selectRow = ref<ITableHeader[]>([])
// 分页数据
const pageInfo = ref<IPageInfo>({
  currentPage: 1,
  pageSize: 5
})
// 分页请求数据
const queryInfo = computed(()=> ({
  offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
  size: pageInfo.value.pageSize
}))

// 数据总条数
const totalCount = computed<any>(()=> systemStore[`${props.pageName}Count` as keyof typeof systemStore])
// 默认显示的列(不包含多选和序号)
const checksCol = ref<string[]>(props.headerData.filter(item=> item.isShow || !item.type).map(item=> item.prop))
// 行密度
const rowDensity = ref<string>("el-table--default")

// 请求页面数据
const getTableList = () => {
  systemStore.getPageListActions(resPageData.value);
}
/* 设置页面搜索数据 */
const setSearchVale = (searchValue: Iform)=> {
  resPageData.value.queryInfo = {...queryInfo.value, ...searchValue}
}
/* 行密度改变事件 */
const handleRowDensity = (density: string)=>{
  rowDensity.value = `el-table--${density}`
}
/* 列隐藏事件 */
const handleTreeChecks = (checks: string[]) => {
  checksCol.value = checks
}
const set = new Set()
/* 行选择事件 */
const handleSelectChange = (selectArr: ITableHeader[], row?: ITableHeader)=>{
  if(!row) {
    selectArr.forEach(item=> {
      if(!set.has(item.id)) {
        set.add(item.id)
        selectRow.value.push(item)
      }
    })
    if(selectArr.length === 0) {
      props.tableData.forEach(item=>{
        set.delete(item.id)
      })
      selectRow.value = selectRow.value.filter((select)=> {
        if(!props.tableData.find(item=> select.id == item.id)) {
          return true
        }
      })
    }
    
  } else {
    if(!set.has(row.id)) {
      set.add(row.id)
      selectRow.value.push(row)
    } else {
      set.delete(row.id)
      selectRow.value.splice(selectRow.value.findIndex(item=> item.id === row.id), 1)
    }
  }
}
/* 行选择事件 */
const toggleSelection = () => {
  props.tableData.forEach((row) => {
    if(selectRow.value.find(select=> select.id === row.id)){
      tableRef.value!.toggleRowSelection(row, true)
    }
  })
}
/* tableData数据改变，记录选中的行 */
watch(()=> props.tableData, ()=>{
  nextTick(()=>{
    toggleSelection()
  })
})

/* 分页数据改变请求数据 */
watchEffect(()=>{
  // resPageData.value.queryInfo 带有搜索数据
  resPageData.value.queryInfo = {... resPageData.value.queryInfo, ...queryInfo.value}
  getTableList()
})

/* 刷新列表 */
onMounted(() => {
  refreshTable(()=>{
    getTableList()
  })
})

const handleCurrentChange = ()=>{
  // emit('currentChange', queryInfo.value)
}
const handleSizeChange = () => {
  pageInfo.value.currentPage = 1
}

defineExpose({
  setSearchVale
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