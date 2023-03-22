<template>
  <div class="MessagePoint">
    <Card title="Message消息提示">
      <div class="element-box">
        <div class="desc font-bold">element-plus 的消息提示，点击弹出提示信息</div>
        <template v-for="item in buttonArr" :key="item.content">
          <el-button :type="item.type" @click="handleEleMessage(item)">{{ item.content }}</el-button>
        </template>
      </div>
      <el-divider />
      <div class="ant-box">
        <div class="desc font-bold">类似 Ant Design 风格的消息提示，点击弹出提示信息（基于 ElMessage 样式改版，不会影响 ElMessage 原本样式，使用和打包大小成本极低并适配暗黑模式）</div>
        <template v-for="item in buttonArr" :key="item.content">
          <el-button :type="item.type" @click="handleAntMessage(item)">{{ item.content }}</el-button>
        </template>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/baseUI/card/src/card.vue';
import { Message } from '@/utils/message';
import { Check } from '@element-plus/icons-vue';
import { ElMessageBoxOptions, ElMessage } from 'element-plus';
import { ref } from 'vue'
const buttonName = ref<string>('ele')
const handleMessageClose = ()=> {
  if(buttonName.value === 'ele') ElMessage({ message: '消息已关闭',  type: 'success' })
  else Message('消息已关闭',{ type: 'success' })
}
const buttonArr = [
  {
    content: 'Info',
    type: 'info',
    messageData:{
      message: 'info消息提示',
      type: 'info',
    }
  },
  {
    content: 'Success',
    type: 'success',
    messageData:{
      message: 'Success消息提示',
      type: 'success',
    }
  },
  {
    content: 'Warning',
    type: 'warning',
    messageData:{
      message: 'Warning消息提示',
      type: 'warning',
    }
  },
  {
    content: 'Error',
    type: 'danger',
    messageData:{
      message: 'Error消息提示',
      type: 'error',
    }
  },
  {
    content: '可关闭',
    plain: true,
    messageData:{
      message: '可关闭',
      showClose: true
    }
  },
  {
    content: '分组消息合并',
    plain: true,
    messageData:{
      message: '分组消息合并',
      grouping: true
    }
  },
  {
    content: '自定义图标',
    plain: true,
    messageData:{
      message: '自定义图标',
      icon: Check
    }
  },
  {
    content: '自定义延迟时间并设置关闭后其他操作',
    plain: true,
    messageData:{
      message: '3秒后关闭',
      duration: 3000,
      onClose: handleMessageClose
    }
  },
  {
    content: 'HTML片段作为正文内容',
    plain: true,
    messageData:{
      dangerouslyUseHTMLString: true,
      message: '<strong>This is <i>HTML</i> string</strong>',
    }
  },
]

// element消息提示
const handleEleMessage = (item: any)=> {
  buttonName.value = 'ele' 
  ElMessage(item.messageData)
}
// 仿ant消息提示
const handleAntMessage = (item: any)=> {
  buttonName.value = 'ant'
  const params = Object.keys(item.messageData).filter((key) => key !== "message").reduce((obj, key) => { return Object.assign(obj, {[key]: item.messageData[key]}) }, {})
  Message(item.messageData.message,  params)
}
</script>

<style lang="scss" scoped>
.desc {
  margin: 5px 0px;
}
.el-button {
  margin: 5px !important;
}
</style>
