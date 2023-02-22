<template>
  <div class="searchForm">
    <div class="search-box">
      <el-form :model="form" :label-width="labelWidth">
        <el-row :gutter="24">
          <!-- 搜索表单 -->
          <template v-for="item in formItems" :key="item.label">
            <el-col :span="6" v-bind="colSpan">
              <el-form-item :label="item.label" :prop="item.prop">
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
          <div class="options-box">
            <el-col class="option" :span="24">
              <el-button icon="Search" type="primary" @click="handleSearch">搜索</el-button>
              <el-button icon="Refresh">重置</el-button>
            </el-col>
          </div>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AnyAaaaRecord } from "dns";
import { ref, reactive } from "vue";
import { ISearchForm, ISearchItem, IColSpan, Iform } from './searchFormTypes';
const props = withDefaults(defineProps<{
  formItems: ISearchItem[] // 表单item
  colSpan?: IColSpan,
  labelWidth?: string,
}>(), {
  formItems: () => ([]),
  colSpan: () => ({
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  }),
  labelWidth: '80px'
})
const form = ref<Iform>({})
for (const item of props.formItems) {
  if(item.field) form.value[item.field] = ''
}
const handleSearch = ()=> {
  console.log(form.value)
}

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
