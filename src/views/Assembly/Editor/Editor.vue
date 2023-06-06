<template>
  <div class="Editor">
    <Card
      title="富文本编辑器 采用强大的"
      link="https://www.tiny.cloud/tinymce-self-hosted-premium-features/?utm_source=TinyMCE&utm_medium=SPAP&utm_campaign=SPAP&utm_id=editorreferral"
      linkTitle="Tinymce"
    >
      <el-link href="https://www.lanmper.cn/vue/t9844" target="_blank" class="mb-5">Tinymce安装教程</el-link>
      <TinymceEditor v-model="editorText" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Card from "@/baseUI/card/src/card.vue";
import TinymceEditor from "@/components/TinymceEditor/TinymceEditor.vue";
const editorText = ref("");
</script>

<style lang="scss" scoped></style>
