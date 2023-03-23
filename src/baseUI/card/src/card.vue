<template>
  <el-card class="box-card">
    <template v-if="title || linkTitle" #header>
      <div class="card-header">
        <div>
          <span class="mr-1">{{ title }}</span>
          <el-link v-if="link" :href="link" target="_blank">{{ linkTitle }}</el-link>
        </div>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  props: {
    title: {
      type: String,
      default: 'Title'
    },
    link: {
      type: String,
      default: ''
    },
    linkTitle: {
      type: String,
      default: ''
    }
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
  // border: 1px solid red;
}
</style>
