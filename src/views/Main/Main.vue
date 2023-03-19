<template>
  <div class="Main">
    <!-- chatGPT -->
    <!-- <el-button @click="handleChatGPT">搜索</el-button>
    <el-input v-model="iptValue"></el-input>
    <v-md-preview :text="gptValue"></v-md-preview> -->
    <el-row class="h-full" :gutter="24">
      <el-col :span="12"><LogCard class="py-2" height="20rem" /></el-col>
      <el-col :span="12"><GithubCard class="py-2" height="20rem" /></el-col>
      <el-col :span="8"><EchartCard class="py-2" height="20rem" title="GitHub折线图信息" type="line" :optionData="optionData" :option="lineOption" /></el-col>
      <el-col :span="8"><EchartCard class="py-2" height="20rem" title="GitHub饼图信息" type="pie" :optionData="pieData" /></el-col>
      <el-col :span="8"><EchartCard class="py-2" height="20rem" title="GitHub柱状图信息" type="bar" :optionData="optionData" :option="barOption" /></el-col>
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

const optionData = ref<any>({
  xData: ['fock', 'star', 'watcher'],
  yData: [111,222,333]
})
const lineOption = ref<any>({
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['fock', 'star', 'watcher']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'fock',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'star',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'watcher',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
  ]
})
const barOption = ref<any>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: 'var(--el-color-primary)',
      }
    }
  },
  legend: {
    data: ['watcher', 'star', 'fork', 'Measure']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2021', '2022', '2023'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'star',
      min: 0,
      max: 3000,
      interval: 600,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Measure',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: 'watcher',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value;
        }
      },
      data: [
        500, 1000, 1500
      ]
    },
    {
      name: 'star',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value;
        }
      },
      data: [
        800, 1200, 1800
      ]
    },
    {
      name: 'fork',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value;
        }
      },
      data: [
        1000, 1800, 2800
      ]
    },
    {
      name: 'Measure',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value: any) {
          return value;
        }
      },
      data: [10, 15, 25]
    }
  ]
})
const pieData = ref<any>([
  {
    name: 'fock',
    value: 1000
  },
  {
    name: 'star',
    value: 1800
  },
  {
    name: 'watcher',
    value: 2800
  },
])


const iptValue = ref<string>('')
const gptValue = ref<string>('')
const handleChatGPT = async ()=> {
  const completion = await getGPTValue(iptValue.value)
  // gptValue.value = <string>completion.data.choices[0].message?.content
  gptValue.value = <string>completion.data.choices[0].text
}
</script>

<style lang="scss" scoped>
</style>
