<template>
  <div class="PDFPreview">
    <Card
      title="PDF预览"
      link="https://github.com/hrynko/vue-pdf-embed"
      linkTitle="github地址"
    >
      <div
        class="h-[calc(100vh-239px)]"
        v-loading="loading"
        :element-loading-text="t('status.hsLoad')"
      >
        <div class="flex justify-between items-center h-9">
          <div v-if="showAllPages" class="font-medium ml-1.25 text-xl">
            共{{ pageCount }}页
          </div>
          <div v-else>
            <el-pagination
              background
              layout="prev, slot, next"
              v-model:current-page="currentPage"
              :page-size="1"
              :total="pageCount"
            >
              {{ currentPage }} / {{ pageCount }}
            </el-pagination>
          </div>
          <div class="w-[170px] flex-bc">
            <el-checkbox v-model="showAllPages" @change="showAllPagesChange">
              显示所有页面
            </el-checkbox>
            <el-tooltip
              effect="dark"
              :content="`翻转（当前角度${rotations[currentRotation]}度）`"
              placement="top"
            >
            <el-icon class="mx-1 cursor-pointer"  @click="currentRotation === 3 ? (currentRotation = 0) : (currentRotation += 1)"><RefreshRight /></el-icon>
          </el-tooltip>
            <el-tooltip effect="dark" content="打印" placement="top">
              <el-icon class="mx-1 cursor-pointer" @click="onPrint"><Printer /></el-icon>
            </el-tooltip>
          </div>
        </div>
        <el-scrollbar>
          <vue-pdf-embed
            class="h-full container overflow-auto "
            ref="pdfRef"
            :rotation="rotations[currentRotation]"
            :page="currentPage"
            :source="source"
            @rendered="handleDocumentRender"
          />
        </el-scrollbar>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/baseUI/card/src/card.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import VuePdfEmbed from "vue-pdf-embed";

const { t } = useI18n();
const pdfRef = ref<any>();
const pageCount = ref(1);
const loading = ref(true);
const currentPage = ref<number>(1);
const currentRotation = ref(0);
const showAllPages = ref(false);
const rotations = [0, 90, 180, 270];

const source =
  "https://pure-admin.github.io/pure-admin-doc/pdf/Cookie%E5%92%8CSession%E5%8C%BA%E5%88%AB%E7%94%A8%E6%B3%95.pdf";

const handleDocumentRender = () => {
  loading.value = false;
  pageCount.value = pdfRef.value.pageCount;
};

const showAllPagesChange = () => {
  currentPage.value = showAllPages.value ? 0 : 1;
};

const onPrint = () => {
  pdfRef.value.print();
};
</script>

<style lang="scss" scoped>

</style>
