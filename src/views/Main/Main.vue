<template>
  <div class="Main h-full">
    <!-- chatGPT -->
    <!-- <el-button @click="handleChatGPT">搜索</el-button>
    <el-input v-model="iptValue"></el-input>
    <v-md-preview :text="gptValue"></v-md-preview> -->
    <el-row class="h-full" :gutter="24">
      <el-col :span="12"><LogCard class="h-full py-2" /></el-col>
      <el-col :span="12"><GithubCard class="h-full py-2" /></el-col>
      <el-col :span="24"><EchartCard class="h-full py-2" /></el-col>
      <!-- <el-col :span="8"><GithubCard class="h-full py-2" /></el-col>
      <el-col :span="8"><GithubCard class="h-full py-2" /></el-col> -->
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import LogCard from '@/components/card/logCard.vue';
import GithubCard from '@/components/card/githubCard.vue'
import EchartCard from '@/components/card/echartCard.vue';
import { ref } from 'vue';
import { getGPTValue, getChatGPTValue } from '@/service/openAI/openAIAPI';

const iptValue = ref<string>('')
const gptValue = ref<string>('')
const handleChatGPT = async ()=> {
  const completion = await getGPTValue(iptValue.value)
  // gptValue.value = <string>completion.data.choices[0].message?.content
  gptValue.value = <string>completion.data.choices[0].text
    console.log(completion)
}
</script>

<style lang="scss" scoped>
.aaa {
  height: 100% !important;
}
</style>
