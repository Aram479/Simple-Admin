<template>
  <div class='camera'>
    <Card title="摄像头" class="mb-5">
      <div class="box">
        <div class="camera-box">
          <video id="video" ref="video" autoplay style="height: 100%; width: 100%;"></video>
          <canvas id="canvas" ref="cvs"></canvas>
        </div>
        <div class="content">
          <div v-for="item in 100">
            456
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref, onMounted } from 'vue'
import Card from '@/baseUI/card/src/card.vue';

const video = ref<HTMLVideoElement>()
onMounted(() => {
  if (!video.value) return
  video.value.width = video.value.height = 500
  const constraints = {
    video: {
      width: 500,
      height: 500
    }
  }
  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    video.value!.srcObject = stream
  })
})
</script>

<style lang='scss' scoped>
.camera {
  .box {
    position: relative;
    width: 100%;
    height: 100%;
    .content {
      height: 500px;
      width: 100%;
      overflow-y: auto;
      position: absolute;
      top: 0;
      z-index: 20;
    }
  }
}
</style>
