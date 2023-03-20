<template>
  <div class="ChatGPT h-full">
    <!-- chatGPT -->
    <div class="openai-box text-center" v-if="!chatDatas.length">
      <div class="mt-3">注：使用前需要科学上网(全局)</div>
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
        <el-card class="box-card mb-2">
          <template #header>
            <div class="card-header">
              <span>ME: {{ item.question }}</span>
            </div>
          </template>
          AI: <v-md-preview class="v-md-preview" :text="item.chatValue" copy></v-md-preview>
        </el-card>
      </template>
      <!-- <div v-for="item in 100">1</div> -->
    </div>
    <el-affix target=".ChatGPT" position="bottom" :offset="20">
      <div class="input-box">
        <el-input class="sticky bottom-0" v-model="iptValue" size="large" placeholder="请输入您的问题..." @keyup.enter="handleChatGPT(iptValue)" >
          <template #suffix>
            <el-icon size="25" class="input-suffix" @click="handleChatGPT(iptValue)"><Position /></el-icon>
          </template>
        </el-input>
      </div>
    </el-affix>
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
  let errMessage = ''
  if(!isChat.value) return
  isChat.value = false
  chatDatas.value.push({
    question: value,
    chatValue: ''
  })
  iptValue.value = ''
  try {
    const completion = await getGPTValue(value)
    // gptValue.value = <string>completion.data.choices[0].message?.content
    gptValue.value = <string>completion.data.choices[0].text
    chatDatas.value[chatDatas.value.length - 1].chatValue = gptValue.value
    isChat.value = true
  } catch (error) {
    chatDatas.value[chatDatas.value.length - 1].chatValue = '获取失败，系统key值过期或未科学(全局)上网！'
  }
}
</script>

<style lang="scss" scoped>
.ChatGPT {
  position: relative;
  .openai-box {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    .title-box {
      padding: 15px 0px;
    }
  }
  .chat-box {
    padding-bottom: 100px;
  }
  .input-box {
    width: 780px !important;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
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