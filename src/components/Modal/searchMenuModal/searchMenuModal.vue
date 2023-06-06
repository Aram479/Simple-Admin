<template>
  <div class="searchMenuModal">
    <el-dialog v-model="isModal" width="40%" style="min-width: 300px;"  @closed="handleCloseModal">
      <div class="font-bold text-lg">菜单搜索</div>
      <div class="modal-content-box">
        <el-input
          v-model="searchValue"
          placeholder="请输入关键词"
          prefix-icon="Search"
          clearable
          @input="handleSearchMenu(searchValue, )"
        />
        <div class="content-box" v-if="!searchList.length">
          <el-empty :image-size="200" />
        </div>
        <!-- 列表页 -->
        <div :class="['list-box', routeActive(index) ? 'active' : '']" v-for="(item, index) in searchList" @click="routeClick(item, index)">
          <div class="route-icon">
            <i v-if="item.meta?.isCustomIcon" :class="['iconfont', item.meta?.icon]"></i>
            <el-icon v-else :color="routeActive(index) ? 'white' : ''"><component :is="item.meta?.icon || 'CollectionTag'"></component></el-icon></div>
          <span class="route-title">{{ $t(<string>item.meta?.en) }}</span>
          <i class="iconfont icon-corner-down-left"></i>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { useSearchMenu } from '@/hooks/layoutHook';
import type { RouteRecordRaw } from "vue-router";

const router = useRouter()
const { handleSearchMenu, searchList } = useSearchMenu()

const isModal = ref<boolean>(false);
const searchValue = ref<string>("");
const activeIndex = ref<number>(-1)
const routeActive = computed(()=> (index: number)=> activeIndex.value === index)

// 路由点击事件
const routeClick = (routeData:RouteRecordRaw, index: number) => {
  activeIndex.value = index
  isModal.value = false
  router.push(routeData.path)

}
// 关闭模态框
const handleCloseModal = (data: any) => {
  searchValue.value = ''
  searchList.value = []
}

defineExpose({
  isModal,
});
</script>

<style lang="scss" scoped>
.searchMenuModal {
  .modal-content-box {
  min-width: 200px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .list-box {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 13px;
      margin-top: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: 0.2s;
      &:hover {
        background-color: var(--el-color-primary);
        color: white;
      }
      .route-icon {
        @include flex(center, none)
      }
      .route-title {
        margin-left: 5px;
        flex-grow: 1;
      }
    }
  }
}
.active {
  background-color: var(--el-color-primary);
  color: white;
}
</style>
