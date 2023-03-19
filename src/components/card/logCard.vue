<template>
  <div class="versionLog">
    <el-card class="box-card" :body-style="{height}">
      <template #header>
        <typeWriter str="项目技术栈"></typeWriter>
      </template>
      <el-scrollbar class="h-full">
        <el-table :data="tableData" border header-row-class-name="el-table--default" cell-class-name="el-table--default">
          <el-table-column v-for="item in headerData" :key="item.prop" :prop="item.prop" :label="item.label">
            <template #default="scoped">
              <img  v-if="item.prop === 'technology'" :alt="scoped.row[item.prop].alt" :src="scoped.row[item.prop].url">
              <el-link v-if="item.prop === 'website'" type="primary" :href="scoped.row[item.prop]">{{ scoped.row.technology.alt }}</el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import typeWriter from "../typeWriter/typeWriter.vue";
import { MoreFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
const props = withDefaults(defineProps<{
  height: string,
}>(), {
  height: '23rem',
})
const headerData = ref<any[]>([
  { prop: "technology", label: "技术", minWidth: "40", slotName: "technology" },
  { prop: "version", label: "版本", minWidth: "60", slotName: "version" },
  { prop: "website", label: "网址", minWidth: "40", slotName: "website" },
])
const tableData = ref<any[]>([
  {
    technology: {
      alt: 'Vue3',
      url: 'https://img.shields.io/badge/Vue%20-%232b3847.svg?logo=vue.js',
    },
    version: '^3.2.45',
    website: 'https://cn.vuejs.org/',
  },
  {
    technology: {
      alt: 'JavaScript',
      url: 'https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?logo=javascript&logoColor=black',
    },
    version: 'ES6+',
    website: 'https://tc39.es/',
  },
  {
    technology: {
      alt: 'TypeScript',
      url: 'https://img.shields.io/badge/TypeScript%20-%231867C0.svg?logo=TypeScript&logoColor=white',
    },
    version: '^4.7.4',
    website: 'https://www.typescriptlang.org/',
  },
  {
    technology: {
      alt: 'Pinia',
      url: 'https://img.shields.io/badge/P-Pinia%20-%23ffd450.svg?logo=Pinia',
    },
    version: '^2.0.28',
    website: 'https://pinia.web3doc.top/',
  },
  {
    technology: {
      alt: 'Element Plus',
      url: 'https://img.shields.io/badge/ElementPlus%20-%23409eff.svg?logo=Element-Plus',
    },
    version: '^2.2.29',
    website: 'https://element-plus.gitee.io/zh-CN/',
  },
  {
    technology: {
      alt: 'Tailwind CSS',
      url: 'https://img.shields.io/badge/Tailwind CSS%20-%2306B6D4.svg?logo=Tailwind CSS&logoColor=white">',
    },
    version: '^3.2.4',
    website: 'https://www.tailwindcss.cn/docs',
  },
  {
    technology: {
      alt: 'Vite',
      url: 'https://img.shields.io/badge/Vite%20-%236f98ff.svg?logo=Vite&logoColor=#8976fe',
    },
    version: '^4.0.0',
    website: 'https://vitejs.cn/',
  },
  {
    technology: {
      alt: 'Axios',
      url: 'https://img.shields.io/badge/Axios%20-black.svg?logo=Axios&logoColor=#5a29e4',
    },
    version: '^1.3.2',
    website: 'http://axios-js.com/',
  },
  {
    technology: {
      alt: 'Scss',
      url: 'https://img.shields.io/badge/Sass%20-%23CC6699.svg?logo=Sass&logoColor=white',
    },
    version: '^1.58.0',
    website: 'https://www.sass.hk/',
  },
])
</script>

<style lang="scss" scoped>
.box-card {
  height: 100% !important;
}
</style>
