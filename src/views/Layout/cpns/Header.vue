<template>
  <div class='Header h-full'>
    <div :class="['header-box h-full pl-5', isHorizontal ? 'headerMenu': '']">
      <div class="header-left h-full float-left">
        <Aside v-if="isHorizontal" :menuList="sidebarMenu" class="headerAside float-left h-full w-full" mode="horizontal" listType="first" :isLogo="isMix ? false : true" />
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" v-else>
          <el-breadcrumb-item v-for="breadItem in breadcrumbList" :to="{ path: breadItem.path || breadItem.redirect }">{{$t(<string>breadItem.meta.en)}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="header-right float-right h-full ">
        <!-- 搜索 -->
        <div class="right-icon" @click="searchClick"><el-icon :size="iconSize"><Search /></el-icon></div>
        <!-- 通知 -->
        <div class="right-icon w-16"><el-badge :value="12"><el-icon :size="iconSize"><Bell /></el-icon></el-badge></div>
        <!-- 语言 -->
        <el-dropdown trigger="click">
          <div class="icon flex items-center">
            <i class="iconfont icon-language text-lg"></i>
          </div>
          <template #dropdown>
            <el-dropdown-menu class="w-32">
              <el-dropdown-item v-for="(lang, langIndex) in languages" @click="langClick(langIndex)">
                <div class="flex items-center">
                  <el-icon :size="iconSize"><Check v-if="langActive === langIndex" /></el-icon>
                  <span>{{ lang.name }}</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 用户信息 -->
        <el-dropdown type="button" trigger="click">
          <div class="icon flex items-center">
            <el-avatar :size="25" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            <span class="ml-2">admin</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon :size="iconSize"><UserFilled /></el-icon>
                <span>Github</span>
              </el-dropdown-item>
              <!-- style="--el-dropdown-menuItem-hover-color: red; --el-dropdown-menuItem-hover-fill: green" -->
              <el-dropdown-item divided style="--el-dropdown-menuItem-hover-color: white; --el-dropdown-menuItem-hover-fill: #f87171" @click="logoutClick">
                <el-icon :size="iconSize"><SwitchButton /></el-icon>
                <span>退出系统</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 设置 -->
        <div class="right-icon" @click="settingClick"><el-icon :size="iconSize"><Setting /></el-icon></div>
      </div>
    </div>
    <!-- 项目页面 设置 -->
    <CmsSetting ref="cmsSettingRef" />
    <!-- 搜索菜单modal -->
    <SearchMenuModal ref="menuModal" />
  </div>
</template>

<script lang='ts' setup>
import Aside from './Aside.vue';
import MyMenu from '@/components/myMenu/myMenu.vue';
import SearchMenuModal from '@/components/Modal/searchMenuModal/searchMenuModal.vue';
import CmsSetting from '@/components/cmsSetting/cmsSetting.vue';
import { reactive, ref, computed, onMounted } from 'vue';
import { useThemesStore } from '@/stores/modules/themes';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
import { storeToRefs } from 'pinia';
import localCache from '@/utils/cache';
import { useLoginStore } from "@/stores/modules/loginStore";

const { locale } = useI18n();
const route = useRoute()
const router = useRouter()
const loginStore = useLoginStore();
const themesStore = useThemesStore()
const { sidebarMenu } = storeToRefs(loginStore);
const { menuMode, isHorizontal, isMix } = storeToRefs(themesStore);
const cmsSettingRef = ref<InstanceType<typeof CmsSetting>>()
const menuModal = ref<InstanceType<typeof SearchMenuModal>>()
const languages = reactive([{name: '简体中文', value: 'zhCN'},{name: 'English', value: 'en'}])
const breadcrumbList = computed(()=> route.matched.slice(1))
const langActive = ref(languages.findIndex(item=> item.value === localCache.getItem('lang')))
const iconSize = ref(18)

// 搜索菜单事件
const searchClick = ()=> {
  menuModal.value!.isModal = true
}
// 语言切换
const langClick = (index: number)=>{
  langActive.value = index
  locale.value = languages[index].value
  localCache.setItem('lang', locale.value)
}
// 设置事件
const settingClick = ()=> {
  cmsSettingRef.value!.drawerValue = true
}
// 暗黑模式切换
// const handleSwitchChange = (change: boolean)=> {
//   toggleDark()
// }
// 退出
const logoutClick = ()=> {
  localCache.clearCache()
  router.replace('/login')
}
onMounted(()=>{
  themesStore.setTheme()
})
</script>

<style lang='scss' scoped>
.header-box {
  @include flex(center, space-between);
  .header-left {
    @include flex(center, space-between);
    flex-grow: 1;
    .headerAside {
      @include flex(center, space-between);
    }
  }
  .header-right {
    @include flex(center, flex-end);
  }
  .myMenu {
    width: 100%
  }
  .header-left, .header-right {
    position: relative;
    top:50%;
    transform: translateY(-50%);
    .right-icon, .el-dropdown {
      height: 100%;
      &:hover {
        background-color:  #a9a9a930;
      }
    }
    .right-icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 0.75rem;
      .el-badge {
        @include flex(center, none);
        position: relative;
        z-index: 1;
      }
    }
    .el-dropdown {
      .icon {
        padding: 0px 0.75rem;
      }
    }
  }
}
.headerMenu {
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-text-color);
  & i,span {
    color: var(--el-menu-text-color) !important
  }
}
</style>
