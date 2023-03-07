<template>
  <div class="pageTable">
    <!-- 顶部操作 -->
    <TableOperate @handleRowDensity="handleRowDensity" @handleTreeChange="handleTreeChecks" :headerData="headerData" v-bind="$attrs">
      <template #create>
        <div class="button-box mr-4">
          <el-button type="primary" icon="CirclePlusFilled" v-if="isCreate" @click="handleCreate">{{ $attrs.tableBtnName }}</el-button>
        </div>
      </template>
    </TableOperate>
    <!-- 表格 -->
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
                <!-- 编辑 -->
                <el-button v-if="isUpdate" type="primary" icon="EditPen" size="small" @click="handleEdit(scoped.row)">{{ $t('Edit') }}</el-button>
                <!-- 删除 -->
                <el-popconfirm
                  width="220"
                  :confirm-button-text="$t('Confirm')"
                  :cancel-button-text="$t('Cancel')"
                  icon="InfoFilled"
                  icon-color="#f56c6c"
                  :title="$t('Are you sure to delete the data?')"
                  confirm-button-type="danger"
                  @confirm="handleDelete(scoped.row)"
                >
                  <template #reference>
                    <el-button v-if="isDelete" type="danger" icon="Delete" size="small">{{ $t('Delete') }}</el-button>
                  </template>
                </el-popconfirm>
                <!-- 其他操作 -->
                <el-dropdown class="mx-3">
                  <span class="el-dropdown-link">
                    <el-icon style="--color: var(--el-color-primary)" :size="18"><MoreFilled /></el-icon>
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
    <!-- 分页 -->
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
    <!-- 编辑/新建对话框 -->
    <pageModal ref="pageModalRef" :modalConfig="modalData" :pageName="pageName" v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
import TableOperate from './tableOperate.vue'
import pageModal from './pageModal.vue';
import { ref, toRaw, computed, watch, watchEffect, nextTick, onMounted } from 'vue';
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from 'pinia';
import { ElTable } from 'element-plus';
import { IUserResType, IQueryInfo } from '@/views/Main/system/user/userViewType';
import { useEventbus } from '@/utils/mitt';
import { userPermission } from '@/hooks/systemHook';
import { getPageListData } from "@/service/system/systemAPI";
import type { ITableHeader, IPageInfo, IElTableProps } from './pageTableTypes'
import type { ISystemListData } from "@/service/system/systemAPIType";
import type { Iform, ISearchFormConfig } from '../searchForm/searchFormTypes';
import type { Option } from 'element-plus/es/components/select-v2/src/select.types';

const props = withDefaults(defineProps<{
  headerData?: ITableHeader[],
  tableData?: ISystemListData[],
  modalData?: ISearchFormConfig;
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

// 按钮权限 CRUD
const isCreate = userPermission(props.pageName, 'create')
const isUpdate = userPermission(props.pageName, 'update')
const isDelete = userPermission(props.pageName, 'delete')
const isRead = userPermission(props.pageName, 'query')
// 分页请求数据
const resPageData = ref<IUserResType>({
  pageName: props.pageName,
  queryInfo: {
    offset: 1,
    size: 5,
  },
});
const tableRef = ref<InstanceType<typeof ElTable>>();
const pageModalRef = ref<InstanceType<typeof pageModal>>()
// 多选时选择的行
const selectRow = ref<ITableHeader[]>([])
// 分页数据
const pageInfo = ref<IPageInfo>({
  currentPage: 1,
  pageSize: 5
})
// 分页请求数据
const queryInfo = computed(()=> (searchData?:Iform)=> ({
  offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
  size: pageInfo.value.pageSize,
  ...searchData
}))

const departmentOptions = ref<Option[]>()
const roleOptions = ref<Option[]>()

// 数据总条数
const totalCount = computed<any>(()=> systemStore[`${props.pageName}Count` as keyof typeof systemStore])
// 默认显示的列(不包含多选和序号)
const checksCol = ref<string[]>(props.headerData.filter(item=> item.isShow || !item.type).map(item=> item.prop))
// 行密度
const rowDensity = ref<string>("el-table--default")

// 请求页面数据
const getTableList = (searchValue?: Iform) => {
  if(!isRead) return 
  // 获取监听搜索数据
  tableSearchValue.value = searchValue
  resPageData.value.queryInfo = queryInfo.value(searchValue)
  systemStore.getPageListActions(resPageData.value);
}
const tableSearchValue = ref<Iform | undefined>({})
const WSearchValue = computed(()=> tableSearchValue.value)
/* 设置页面搜索数据 */
const setSearchVale = (searchValue: Iform)=> {
  getTableList(searchValue)
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
/* 新建事件 */
const handleCreate = (title: string)=> {
  pageModalRef.value!.isModal = true
  pageModalRef.value!.modalType = 'create'
}
/* 删除事件 */
const handleDelete = (row: Iform)=>{
  const delData = {
    pageName: props.pageName,
    id: <number>row.id
  }
  systemStore.deletePageActions(delData)
}
/* 编辑事件 */
const handleEdit = (row: Iform)=> {
  pageModalRef.value!.isModal = true
  pageModalRef.value!.rowItems = row
  pageModalRef.value!.modalType = 'edit'
}

const getOptions = ()=> {
  props.modalData?.formItems?.map(async (item)=> {
    if(~['department', 'role'].indexOf(<string>item.name)) {
      const { data } = await getPageListData(`/${item.name}/list`)
      item.options = data.list.map(item=> ({value: item.id, label: <string>item.name}))
    }
  })
  console.log(props.modalData?.formItems)
}
/* 刷新列表 */
onMounted(() => {
  refreshTable(()=>{
    getTableList(WSearchValue.value)
  })
  getOptions()
})

/* tableData数据改变，记录选中的行 */
watch(()=> props.tableData, ()=>{
  nextTick(()=>{
    toggleSelection()
  })
})

/* 分页数据改变请求数据 */
watch(queryInfo.value, ()=>{
  getTableList()
}, {
  immediate: true,
  deep: true
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