<template>
  <div class="ChatGPT h-full">
    <!-- chatGPT -->
    <div class="openai-box text-center" v-if="!chatDatas.length">
      <div class="title-box text-3xl">
        <i class="iconfont icon-openai font-medium text-4xl mr-1"></i>
        <span class="font-bold">Open AI</span>
      </div>
      <div class="desc-box text-gray-500 text-sm tracking-wide">
        <span>本系统基于OpenAI最新版API，返回结果和官方完全一致！</span>
      </div>
    </div>
    <div class="chat-box" v-else>
      <template v-for="item in chatDatas" :key="item.question">
        <div>ME: {{ item.question }}</div>
        AI: <v-md-preview class="v-md-preview" :text="item.chatValue"></v-md-preview>
      </template>
    </div>
    <div class="input-box">
      <el-input class="sticky bottom-0" v-model="iptValue" size="large" placeholder="请输入您的问题..." @keyup.enter="handleChatGPT(iptValue)" >
        <template #suffix>
          <el-icon size="25" class="input-suffix" @click="handleChatGPT(iptValue)"><Position /></el-icon>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getGPTValue, getChatGPTValue } from '@/service/openAI/openAIAPI';

const iptValue = ref<string>('')
const gptValue = ref<string>('')
const chatDatas = ref<any[]>([])
const isChat = ref<boolean>(true)
const handleChatGPT = async (value: string)=> {
  if(!isChat.value) return
  isChat.value = false
  chatDatas.value.push({
    question: value,
    chatValue: ''
  })
  iptValue.value = ''
  const completion = await getGPTValue(value)
  // gptValue.value = <string>completion.data.choices[0].message?.content
  gptValue.value = <string>completion.data.choices[0].text

  chatDatas.value[chatDatas.value.length - 1].chatValue = gptValue.value
  console.log(111)
  isChat.value = true
}
</script>

<style lang="scss" scoped>
.ChatGPT {
  position: relative;
  background-color: #fff;
  .openai-box {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    .title-box {
      padding: 15px 0px;
    }
  }
  .input-box {
    width: calc(100% - 220px)!important;
    height: 100px;
    position: fixed;
    bottom: 20px;
    left: 60%;
    transform: translateX(-40%);
    background-color: #f0f2f5 !important;
    .input-suffix {
      cursor: pointer;
      border-radius: 5px;
      padding: 4px;
      &:hover {
        background-color: #ececf1;
      }
    }
  }
}
</style>