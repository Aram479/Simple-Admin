<template>
  <div class="tableOperate mb-4">
    <div class="title-box">用户管理</div>
    <div class="operate-box">
      <div class="button-box mr-4">
        <el-button type="primary" icon="CirclePlusFilled">新建用户</el-button>
      </div>
      <div class="icon-box">
        <!-- 刷新 -->
        <el-icon :size="20" @click="handleReTable"><Refresh /></el-icon>
        <el-divider direction="vertical" />
        <!-- 密度 -->
        <el-dropdown trigger="click">
          <el-icon :size="20"><DCaret /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in densityArr"
                :key="item.value"
                :class="[item.value === dropdownActive ? 'dropdownActive': '']"
                @click="handleRowDensity(item.value)"
              >{{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-divider direction="vertical" />
        <!-- 设置 -->
        <el-dropdown trigger="click">
          <el-icon :size="20"><Setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-tree
                class="p-4 py-2"
                node-key="id"
                :data="treeArr"
                :default-checked-keys="[1]"
                :props="defaultProps"
                default-expand-all
                show-checkbox
                @check="handleTreeChange"
              />
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEventbus } from "@/utils/mitt";
import { ref, reactive } from "vue";
import { ITableHeader, ITreeData } from './pageTableTypes';
import { CheckedInfo } from "element-plus/es/components/tree-v2/src/types";
import { useRoute, RouteRecordRaw } from 'vue-router';
import { MetaProperty } from "@babel/types";
const props = withDefaults(defineProps<{
  headerData: ITableHeader[],
}>(), {
  headerData: ()=> ([]),
})
const emit = defineEmits<{
  (e: "handleRowDensity", density: string): void;
  (e: "handleTreeChange", tree: any[]): void;
}>();
const route = useRoute()
const aaa = ref<string>((route as RouteRecordRaw[]).meta.name.replace('管理', ''))
const { toRefreshTable } = useEventbus();
const dropdownActive = ref<string>('default')
const defaultProps = {
  children: 'children',
  label: 'label',
}
const densityArr = reactive([
  {
    value: "large",
    label: "宽松",
  },
  {
    value: "default",
    label: "中等",
  },
  {
    value: "small",
    label: "紧凑",
  },
]);
const treeArr = ref<ITreeData[]>([
{
    id: 1,
    label: '列展示',
    children: [],
  },
])
treeArr.value[0].children = props.headerData.map((item, index)=> (item.id = treeArr.value[0].id + (index + 1)) ? item : ({} as ITableHeader ))

/* 刷新表格事件 */
const handleReTable = () => {
  toRefreshTable();
};
/* 行密度改变事件 */
const handleRowDensity = (density: string) => {
  dropdownActive.value = density
  emit("handleRowDensity", density);
};
/* 树形选择复选改变事件 */
const handleTreeChange = (currentData: any, tree: CheckedInfo) => {
  const checked = tree.checkedNodes.map(item=> item.prop)
  // const activeColArr = tree
  emit('handleTreeChange', checked)
}
</script>

<style lang="scss" scoped>
.tableOperate {
  @include flex(center, space-between);
  .operate-box {
    @include flex(center, none);
    .icon-box {
      @include flex(center, center);
    }
    .el-icon {
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: #79bbff;
      }
    }
  }
}
</style>
<style lang="scss">
.dropdownActive {
  $bg-color: var(--el-color-primary);
  $text-color: white;
  background-color: $bg-color;
  color: $text-color;
  &:hover {
    background-color: $bg-color !important;
    color: $text-color !important;
  }
}
</style>