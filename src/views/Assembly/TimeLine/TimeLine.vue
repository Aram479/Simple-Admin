<template>
  <div class="TimeLine">
    <Card title="时间线">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :color="activity.color"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/baseUI/card/src/card.vue";
import { MoreFilled } from "@element-plus/icons-vue";
import { ref, markRaw } from "vue";
import { useRenderFlicker } from "@/components/ReFlicker/index";
const activities = [
  {
    content: "支持圆点闪动",
    timestamp: "2023-03-22 09:10",
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: "支持方形闪动",
    timestamp: "2023-03-22 09:10",
    icon: markRaw(useRenderFlicker({ borderRadius: 0, background: "#67C23A" })),
  },
  {
    content: "支持默认颜色",
    timestamp: "2023-03-22 09:10",
  },
  {
    content: "支持自定义颜色",
    timestamp: "2023-03-22 09:10",
    color: "#F56C6C",
  },
  {
    content: "支持自定义图标",
    timestamp: "2023-03-22 09:10",
    color: "#F56C6C",
    icon: MoreFilled,
  },
];
</script>

<style lang="scss" scoped></style>
