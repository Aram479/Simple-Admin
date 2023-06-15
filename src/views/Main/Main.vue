<template>
  <div class="Main">
    <el-row class="h-full" :gutter="24">
      <el-col v-bind="colSpan" :span="12"><LogCard class="py-2" height="20rem" /></el-col>
      <el-col v-bind="colSpan" :span="12"><GithubCard class="py-2" height="20rem" /></el-col>
      <el-col v-bind="colSpan" :lg="8" :xl="8" :span="8"><EchartCard class="py-2" height="25rem" title="GitHub折线图信息" type="line" :optionData="optionData" :option="lineOption" /></el-col>
      <el-col v-bind="colSpan" :lg="8" :xl="8" :span="8"><EchartCard class="py-2" height="25rem" title="GitHub饼图信息" type="pie" :optionData="pieData" /></el-col>
      <el-col v-bind="colSpan" :lg="8" :xl="8" :md="24" :span="8"><EchartCard class="py-2" height="25rem" title="GitHub柱状图信息" type="bar" :optionData="optionData" :option="barOption" /></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import LogCard from '@/components/card/logCard.vue';
import GithubCard from '@/components/card/githubCard.vue'
import EchartCard from '@/components/card/echartCard.vue';
import { useLoginStore } from '@/stores/modules/loginStore';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const loginStore = useLoginStore()
const { loginType } = storeToRefs(loginStore)
const colSpan =  ref<any>({
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
})
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

</script>

<style lang="scss" scoped>
</style>
