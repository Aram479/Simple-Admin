<template>
  <div class="githubCard">
    <el-card class="box-card h-full" header="GitHub信息">
      <div
        class="table-box"
        v-for="(tableItem, tableItemIndex) in moretableData"
      >
        <el-table :data="tableItem" border header-row-class-name="el-table--default" cell-class-name="el-table--default">
          <template v-for="(table, tableIndex, key) in tableItem">
            <el-table-column
              v-for="(item, key, index) in table"
              :prop="key"
              :label="moreTableHeader[tableItemIndex][index].label"
              width="auto"
            >
              <template #default="scope" v-if="moreTableHeader[tableItemIndex][index].label === '标签'">
                <el-tag
                  v-for="item in scope.row[key]"
                  :key="item.label"
                  :type="item.type"
                  class="mx-1"
                  effect="dark"
                >  
                  {{ item.label }}
                </el-tag>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const moreTableHeader = ref<any[]>([
  [{ label: "用户名" }, { label: "手机" }, { label: "居住地" }],
  [{ label: "标签" }, { label: "联系地址" }],
  [{ label: "个性签名" }],
]);
const moretableData = ref<any[]>([
  [
    {
      username: "夏洛克",
      phone: "123456789",
      live: "中国大陆",
    },
  ],
  [
    {
      tag: [
        { type: "", label: "英俊" },
        { type: "success", label: "潇洒" },
        { type: "info", label: "帅气" },
        { type: "danger", label: "阳光" },
        { type: "warning", label: "好学" },
        { type: "", label: "追剧" },
      ],
      address: "英国伦敦",
    },
  ],
  [
    {
      signature: "花生你怎么看",
    },
  ],
]);
</script>

<style lang="scss" scoped>
.box-card {
  height: 100% !important;
  .table-box {
    @include flex(center, center, column);
  }
}
</style>
