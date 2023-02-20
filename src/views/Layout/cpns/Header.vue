<template>
  <div class='Header h-full'>
    <div class="header-box h-full">
      <div class="header-left h-full flex items-center justify-between float-left">
        <!-- 面包屑 -->
        <!-- <el-breadcrumb separator-icon="ArrowRight">
          <el-breadcrumb-item v-for="breadItem in breadcrumbList" :to="{ path: breadItem.path || breadItem.redirect }">{{breadItem.meta.name}}</el-breadcrumb-item>
        </el-breadcrumb> -->
      </div>
      <div class="header-right flex items-center justify-evenly h-full float-right">
        <!-- 搜索 -->
        <div class="right-icon"><el-icon :size="iconSize"><Search /></el-icon></div>
        <!-- 通知 -->
        <div class="right-icon w-16"><el-badge class="flex items-center" :value="12"><el-icon :size="iconSize"><Bell /></el-icon></el-badge></div>
        <!-- 语言 -->
        <el-dropdown trigger="click">
          <div class="icon flex items-center">
            <el-icon :size="iconSize"><Watermelon /></el-icon>
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
                <span>用户信息</span>
              </el-dropdown-item>
              <!-- style="--el-dropdown-menuItem-hover-color: red; --el-dropdown-menuItem-hover-fill: green" -->
              <el-dropdown-item divided style="--el-dropdown-menuItem-hover-color: white; --el-dropdown-menuItem-hover-fill: #f87171">
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
    <!-- 主题/颜色 设置 -->
    <el-drawer v-model="drawerValue" :with-header="false">
      <div class="theme-box">
        <el-divider content-position="center">主题色</el-divider>
        <div class="theme-color flex items-center">
          <div class="theme-color-item mx-1" v-for="(colorItem, colorIndex) in themeColors" :key="colorItem.id">
            <div class="active-icon" v-if="colorActive === colorItem.id"><el-icon :color="colorItem.color === '#fff' ? 'black': '#fff'" :size="20"><CaretBottom /></el-icon></div>
            <div class="w-5 h-5 m-0.5 rounded-sm shadow-2xl" :style="{ backgroundColor: colorItem.color }" @click="colorClick(colorItem, colorIndex)"></div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { useThemesStore } from '@/stores/modules/themes';
import type { themesType } from '@/views/Layout/LayoutViewType';
import { useRoute } from 'vue-router';
import localCache from '@/utils/cache';

const route = useRoute()
const themesStore = useThemesStore()

const languages = reactive([{name: '简体中文'},{name: 'English'}])
const themeColors = reactive<themesType[]>([
  {id: 'darkBlue', color: '#1b2a47'},
  {id: 'whiteTheme', color: '#fff'},
  {id: 'purpleTheme', color: '#722ed1'}
])
const colorActive = ref(localCache.getItem('themeName') || 'darkBlue')
const breadcrumbList = computed(()=> route.matched)
const langActive = ref(0)
const iconSize = ref(18)
const drawerValue = ref(false)

const langClick = (index: number)=>{
  langActive.value = index
}
const settingClick = ()=> {
  drawerValue.value = true
}
const colorClick = (item: themesType, index: number)=> {
  colorActive.value = item.id
  themesStore.setTheme(item.id)
}

onMounted(()=>{
  themesStore.setTheme(localCache.getItem('themeName'))
})
</script>

<style lang='scss' scoped>
.header-box {
  .header-left, .header-right {
    position: relative;
    top:50%;
    transform: translateY(-50%);
    .right-icon, .el-dropdown {
      height: 100%;
      &:hover {
        background-color: #f6f6f6;
      }
    }
    .right-icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 0.75rem;
      .el-badge {
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
.theme-box {
  .theme-color {
    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid #ccc;
      border-radius: 3px;
      .active-icon {
        position: absolute;
        top: -20%;
      }
    }
  }
}
</style>