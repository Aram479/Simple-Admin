<template>
  <Card title="3D图片" class="mb-5">
    <div class="base">
      <div class="container" ref="container"></div>
    </div>
  </Card>
</template>

<script setup>
import * as THREE from "three";
import { ref, onMounted } from "vue";
import Card from "@/baseUI/card/src/card.vue";
// 场景
const scene = new THREE.Scene();
// 相机
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5.5);

// 渲染器
const container = ref(null);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 加载纹理
const textureLoader = new THREE.TextureLoader();
// const texture = textureLoader.load("/assets/cat.jpg");
// const depthTexture = textureLoader.load("/assets/cat_depth.jpg");

const texture = textureLoader.load("/assets/build.jpg");
const depthTexture = textureLoader.load("/assets/build_depth.jpg");

// 创建平面
const geometry = new THREE.PlaneGeometry(19.2, 12);
// const material = new THREE.MeshBasicMaterial({ map: texture });
// 鼠标坐标
const mouse = new THREE.Vector2();

// 着色器材质
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: texture },
    uDepthTexture: { value: depthTexture },
    uMouse: { value: mouse },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform sampler2D uDepthTexture;
    uniform vec2 uMouse;
    varying vec2 vUv;
    uniform float uTime;
    void main() {
      vec4 color = texture2D(uTexture, vUv);
      vec4 depth = texture2D(uDepthTexture, vUv);
      float depthValue = depth.r;
      float x = vUv.x + (uMouse.x+sin(uTime))*0.01*depthValue;
      float y = vUv.y + (uMouse.y+cos(uTime))*0.01*depthValue;
      vec4 newColor = texture2D(uTexture, vec2(x, y));
      gl_FragColor = newColor;
    }
  `,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// 渲染
requestAnimationFrame(function animate() {
  material.uniforms.uMouse.value = mouse;
  material.uniforms.uTime.value = performance.now() / 1000;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
});
onMounted(() => {
  container.value.appendChild(renderer.domElement);
});
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
canvas {
  height: 100% !important;
  width: 100% !important;
}
</style>
