<template>
  <div class="qrcode">
    <div :class="disabled ? 'mask' : ''">
      <Qrcode :value="value" :tag="tag" :options="{ width: size, ...options }" ></Qrcode>
      <img
        v-if='logo'
        class="qrcode__image"
        :src="imgSrc(logo)"
        :style="logoStyle(logo)"
      />
    </div>
    <div class="refresh" v-if="disabled" @click="handleRefresh">
      <el-icon color="var(--el-color-primary)" :size="35"><RefreshRight /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Qrcode from '@chenfengyuan/vue-qrcode'
import { computed } from 'vue';
import useImageUrl from '@/hooks/imageHooks';
const props = withDefaults(defineProps<{
  value?: string,
  size?: number,
  options?: any,
  tag?: string,
  logo?: string | object,
  disabled?: boolean,
}>(), {
  value: 'qrcode',
  size: 150,
  options: ()=> ({}),
  tag: 'canvas',
  logo: '',
  disabled: false,
})
const emit = defineEmits<{
  (e: "refresh"): void;
}>();

const imgSrc = computed(()=> (logo: any)=> {
  let url = typeof logo == 'string' ? logo : logo.src
  return url
})
const logoStyle = computed(()=> (logo: any)=> {
  let isLogoString = typeof logo == 'string'
  if(!isLogoString) {
    const {src, ...test} = logo
    return test
  }
})
const handleRefresh = ()=> {
  emit('refresh')
}
</script>

<style lang="scss" scoped>
.qrcode {
  display: inline-block;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
}
.refresh {
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mask {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.5;
  opacity: 0.2;
}
</style>