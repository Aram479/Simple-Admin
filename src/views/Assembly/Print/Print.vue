<template>
  <div class="Print">
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-medium">打印功能（报表、图表、图片）</span>
          <div>
            <el-select
              v-model="value"
              class="m-2"
              placeholder="Select"
              size="small"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button size="small" type="primary" @click="onPrint">
              打印
            </el-button>
          </div>
        </div>
      </template>
      <el-row :gutter="24">
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
        >
          <p class="font-medium pt-1">Table</p>
          <el-table
            border
            :data="tableData"
            header-row-class-name="el-table--default" cell-class-name="el-table--default"
            class="el-table w-full mt-[10px]"
          >
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="age" label="age" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-col>

        <el-divider />

        <el-col
          :xs="11"
          :sm="11"
          :md="11"
          :lg="11"
          :xl="11"
        >
          <p class="font-medium pt-1">Echart</p>
          <div ref="pieEchart" class="echart" style="height: 100%;"></div>
        </el-col>

        <el-col
          :xs="11"
          :sm="11"
          :md="11"
          :lg="11"
          :xl="11"
        >
          <p class="font-medium pt-1">Image</p>
          <img
            src="@/assets/img/logo.png"
            alt="avatars"
            class="img mt-[10px] w-[250px] h-[250px] m-auto"
          />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/baseUI/card/src/card.vue";
import echartCard from "@/components/card/echartCard.vue";
import { ref, onMounted, nextTick, inject } from 'vue';
import Print from "@/utils/print";
import useEchart, { useEchartOption } from "@/hooks/useEchart";

interface User {
  date: string;
  name: string;
  age: number;
  address: string;
}

const value = ref("1");

const pieEchart = ref<HTMLHtmlElement>()
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

const options = [
  {
    value: "1",
    el: ".el-table",
    label: "Table"
  },
  {
    value: "2",
    el: ".echart",
    label: "Echart"
  },
  {
    value: "3",
    el: ".img",
    label: "Image"
  }
];

function onPrint() {
  const el = options.filter(v => v.value === value.value)[0]?.el;
  Print(el).toPrint;
}

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    age: 18,
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    age: 18,
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    age: 18,
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    age: 18,
    address: "No. 189, Grove St, Los Angeles"
  }
];
onMounted(()=> {
  const { echartsInstance, setOptions } = useEchart(pieEchart.value!)
  let option = useEchartOption(pieData.value, 'pie')
  setOptions(option)
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    echartsInstance.resize();
  });
})
</script>

<style lang="scss" scoped>
:deep(.el-table__row.warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

:deep(.el-table__row.success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>