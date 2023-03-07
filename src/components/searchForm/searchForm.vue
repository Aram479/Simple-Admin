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
import { FormInstance } from "element-plus";
import { ref, watchEffect } from 'vue';
import type { ISearchItem, IColSpan, Iform } from './searchFormTypes';

const props = withDefaults(defineProps<{
  formItems: ISearchItem[] // 表单item
  rowItems?: Iform,
  colSpan?: IColSpan,
  labelWidth?: string,
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

const handleSearch = ()=> {
  emit('handleSearchForm', form.value)
}
const handleReset = ()=> {
  console.log('重置')
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
