<template>
  <div class="user">
    <SearchForm :formItems="formItems"></SearchForm>
    <div class="table-box">34</div>
  </div>
</template>

<script lang="ts" setup>
import SearchForm from "@/components/searchForm/searchForm.vue";
import { ref, reactive } from "vue";
import type { ISearchForm, ISearchItem } from "@/components/searchForm/searchFormTypes";

const formItems = reactive<ISearchItem[]>([
  {
    type: 'input',
    label: "用户名",
    prop: "form.userName",
    placeholder: "请输入用户名",
  },
  {
    type: 'input',
    label: "密码",
    prop: "form.password",
    placeholder: "请输入密码",
  },
  {
    type: 'input',
    label: "根据ID",
    prop: "form.id",
    placeholder: "请输入根据ID",
  },
  {
    type: 'select',
    label: "是否开启",
    prop: "form.open",
    placeholder: "请输入是否开启",
    options: [{
      value:'open',
      label: '开启',
    },
    {
      value:'close',
      label: '关闭',
    }]
  },
  {
    type: 'date',
    label: "选择日期",
    prop: "form.open",
    placeholder: '选择时间',
    dateOptions: {
      type: 'daterange',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    }
  },
]);
</script>

<style lang="scss" scoped>
.table-box {
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>
