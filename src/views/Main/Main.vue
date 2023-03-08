<template>
  <div class="Main">

    <el-button @click="handleChatGPT">搜索</el-button>
    <el-input v-model="iptValue"></el-input>
    <v-md-preview :text="gptValue"></v-md-preview>
  </div>
</template>

<script lang="ts" setup>
import TypeWriter from '@/components/typeWriter/typeWriter.vue';
import { ref } from 'vue';
import { getGPTValue, getChatGPTValue } from '../../service/openAI/openAIAPI';

const iptValue = ref<string>('')
const gptValue = ref<string>('')
const handleChatGPT = async ()=> {
  const completion = await getChatGPTValue(iptValue.value)
  gptValue.value = <string>completion.data.choices[0].message?.content
  // gptValue.value = <string>completion.data.choices[0].text
    console.log(completion)
}
</script>

<style lang="scss" scoped>
</style>
