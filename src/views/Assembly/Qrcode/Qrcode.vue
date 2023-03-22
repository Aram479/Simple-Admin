<template>
  <div class="Qrcode">
    <Card title="二维码基于" link="https://github.com/fengyuanchen/vue-qrcode" linkTile="vue-qrcode">
      <el-row :gutter="20" justify="space-between">
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">基础用法</div>
            <VueQrcode :value="qrcodeText" />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">img标签</div>
            <VueQrcode :value="qrcodeText" tag="img" />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">样式配置</div>
            <VueQrcode
              :value="qrcodeText"
              :options="{
                color: {
                  dark: '#55D187',
                  light: '#2d8cf0',
                },
              }"
            />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">点击事件</div>
            <VueQrcode :value="qrcodeText" @click="codeClick" />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">异步内容</div>
            <VueQrcode :value="asyncTitle" />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">失效</div>
            <VueQrcode
              :value="qrcodeText"
              disabled
              @refresh="disabledClick"
            />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">logo配置</div>
            <VueQrcode
              :value="qrcodeText"
              :logo="useImageUrl('logo', 'png')"
            />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">logo样式</div>
            <VueQrcode
              :value="qrcodeText"
              :logo="{
                src: useImageUrl('logo', 'png'),
                width: '40px',
                border: '5px solid var(--el-color-primary)',
                borderRadius: '50px',
                backgroundColor: 'blue',
              }"
            />
          </el-card>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
          <el-card shadow="hover" class="mb-4 text-center">
            <div class="font-bold">大小配置</div>
            <VueQrcode :value="qrcodeText" :size="100" />
          </el-card>
        </el-col>
      </el-row>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/baseUI/card/src/card.vue";
import VueQrcode from "@/baseUI/vueQrcode/vueQrcode.vue";
import { ref, unref } from "vue";
import { Message } from "@/utils/message";
import useImageUrl from '@/hooks/imageHooks';

const qrcodeText = "vue-simple-admin";

const asyncTitle = ref("test");
setTimeout(() => {
  asyncTitle.value = unref(qrcodeText);
}, 3000);
const codeClick = () => {
  Message("点击事件", { type: "info" });
};
const disabledClick = () => {
  Message("失效", { type: "info" });
};
</script>

<style lang="scss" scoped>
</style>
