<template>
  <div class="searchForm">
    <div class="search-box">
      <el-form ref="formRef" :model="form" :label-width="labelWidth">
        <el-row :gutter="24">
          <!-- 搜索表单 -->
          <template v-for="item in formItems" :key="item.label">
            <el-col :span="6" v-bind="colSpan">
              <el-form-item :label="item.label" :prop="item.field" :rules="item.rules" v-if="!item.isHidden">
                <!-- 输入框 -->
                <template v-if="item.type === 'input'">
                  <el-input v-model="form[item.field]" :placeholder="item.placeholder" :prefix-icon="item.prefixIcon" :suffix-icon="item.suffixIcon"
                    clearable />
                </template>
                <!-- 下拉框 -->
                <template v-else-if="item.type === 'select'">
                  <el-select v-model="form[item.field]" class="w-full" :placeholder="item.placeholder">
                    <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label" :value="opt.value" />
                  </el-select>
                </template>
                <!-- 日期选择器 -->
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker v-model="form[item.field]" :placeholder="item.placeholder" range-separator="-" v-bind="item.dateOptions"
                    size="default" />
                </template>
                <!-- 树形控件 -->
                <template v-else-if="item.type === 'tree'">
                  <el-scrollbar height="200px">
                    <el-tree
                      v-if="form.menuList || modalType === 'create'"
                      class="p-4 py-2"
                      node-key="id"
                      :data="item.treeOptions"
                      :default-checked-keys="defaultCheck(form[item.field])"
                      :props="defaultProps"
                      default-expand-all
                      show-checkbox
                      @check="handleTreeChange"
                    />
                  </el-scrollbar>
                </template>
              </el-form-item>
            </el-col>
          </template>
          <!-- 按钮选项 -->
          <div class="options-box" v-if="isOptions">
            <el-col class="option" :span="24">
              <el-button icon="Search" type="primary" @click="handleSearch">{{ $t('Search') }}</el-button>
              <el-button icon="Refresh" @click="handleReset">{{ $t('Reset') }}</el-button>
            </el-col>
          </div>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { menuType } from "@/stores/modulesType/loginType";
import { FormInstance } from "element-plus";
import { ref, computed, watchEffect } from 'vue';
import _ from "lodash";
import type { ISearchItem, IColSpan, Iform } from './searchFormTypes';
import type { CheckedInfo } from "element-plus/es/components/tree-v2/src/types";

const props = withDefaults(defineProps<{
  formItems: ISearchItem[] // 表单item
  rowItems?: Iform,
  colSpan?: IColSpan,
  labelWidth?: string,
  modalType?: string,
  isOptions?: boolean
}>(), {
  formItems: () => ([]),
  colSpan: () => ({
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  }),
  labelWidth: '80px',
  isOptions: true
})
const emit = defineEmits<{
  (e: "handleSearchForm", form: Iform): void;
}>();
const formRef = ref<FormInstance>()
const form = ref<Iform>({})

// 默认树形选择节点
const defaultCheck = computed(()=> (menuList: menuType[])=> {
  let ids:number[] = []
  _.cloneDeepWith(menuList, (item)=>{
    if(item && item.id) {
      ids.push(item.id)
    }
  })
  return ids
})

/* 树形选择复选改变事件 */
const handleTreeChange = (currentData: any, tree: CheckedInfo) => {
  // const checked = tree.checkedNodes.map(item=> item.prop)
  if(form.value?.menuList) form.value!.menuList =  tree.checkedNodes
}



// 展示的字段名
const defaultProps = {
  children: 'children',
  label: 'name',
}
const handleSearch = ()=> {
  emit('handleSearchForm', form.value)
}
const handleReset = ()=> {
  formRef.value?.resetFields()
  form.value = {}
  handleSearch()
}
const validateForm = ()=> {
  return new Promise((reslove, reject)=>{
    formRef.value?.validate((data)=> {
      reslove(data)
    })
  })
} 
watchEffect(()=>{
  for (const item of props.formItems) {
    if(props.rowItems) {
      form.value[item.field] = props.rowItems[item.field] ?? ''
    }
  }
})
defineExpose({
  form,
  handleReset,
  validateForm
})


</script>

<style lang="scss" scoped>
.searchForm {
  padding: 25px;
  padding-bottom: 0px;
  background-color: #fff;
  margin-bottom: 20px;

  .el-col {
    margin-bottom: 10px;
  }
  .options-box {
    flex-grow: 1;
    .option {
      flex-grow: 1;
      float: right;
    }
  }
}
</style>
