<template>
  <div class="qrcode">
    <Qrcode :value="value" :options="{ width: size, ...options }" ></Qrcode>
    <img
      v-if='logo'
      class="qrcode__image"
      :src="logo"
      alt="Chen Fengyuan"
    />
  </div>
</template>

<script lang="ts" setup>
import Qrcode from '@chenfengyuan/vue-qrcode'
const props = withDefaults(defineProps<{
  value?: string,
  size?: number,
  options?: any,
  logo?: string,
}>(), {
  value: 'qrcode',
  size: 150,
  options: ()=> ({}),
  logo: ''
})
</script>

<style lang="scss" scoped>
.qrcode {
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>