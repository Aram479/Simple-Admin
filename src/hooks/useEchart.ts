import { inject } from "vue";
import type { EChartsOption } from "echarts";
import { convertData } from "@/utils/convert-data";
import chinaJson from '@/common/json/china.json'



export default function (el: HTMLElement) {
  let echarts: any = inject("echarts"); // 主要
// 注册中国地图
  echarts.registerMap('china', chinaJson)
  const echartsInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options);
  };
  return {
    echartsInstance,
    setOptions,
  };
}

// 柱形图
export function useBarEchart(data: any, otherOption?: EChartsOption) {
  let options: EChartsOption = {
    tooltip: {
      show: true, //设置是否显示提示框
      trigger: "item",
    },
    xAxis: {
      data: data.xData
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: data.yData
      }
    ],
    // [
    //   {
    //     type: "bar",
    //     data: [23, 24, 18, 25, 27, 28, 25],
    //   },
    // ],
  };
  options = {...options, ...otherOption}
  return options;
}

// 折线图
export function useLineEchart(data: any, otherOption?: EChartsOption) {
  let options: EChartsOption = {
    tooltip: {
      show: true, //设置是否显示提示框
      trigger: 'axis'
    },
    xAxis: {
      data: data.xData,
    },
    yAxis: {},
    series: [
      {
        type: 'line',
        data: data.yData,
        areaStyle: {}
      }
    ]
  };
  options = {...options, ...otherOption}
  return options;
}

// 圆盘图
export function usePieEchart(data: any[], otherOption?: EChartsOption) {
  let options: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  options = {...options, ...otherOption}
  return options;
}

// 地图
export function useMapEchart(data: any[], otherOption?: EChartsOption) {
  let options: any = {
    backgroundColor: '#fff',
    title: {
      text: '全国销量统计',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: {
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  };
  options = {...options, ...otherOption}
  return options;
}
// 根据类型使用不同图
export function useEchartOption(data: any, type: string, otherOption?: EChartsOption): EChartsOption {
  let fun: any = null
  switch(type) {
    case 'bar': 
      fun = useBarEchart
      break;
    case 'line':
      fun = useLineEchart
      break;
    case 'pie':
      fun = usePieEchart
      break;
    case 'map':
      fun = useMapEchart
      break;
  }
  return fun(data, otherOption)
}

