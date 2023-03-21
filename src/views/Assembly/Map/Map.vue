<template>
  <div class="h-full">
    <!-- 仿百度地图官网 -->
    <BMap
      width="100%"
      height="100%"
      enableScrollWheelZoom
      ref="map"
      :center="location.point || undefined"
      @initd="get"
      :mapType="mapType"
    >
      <BZoom :offset="{ x: 22, y: 40 }" />
      <BCityList :offset="{ x: 20, y: 20 }"/>
      <BScale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" />
      <BNavigation3d anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :offset="{ x: 10, y: 140 }" />
      <template v-if="!isLoading">
        <BMarker :position="location.point"></BMarker>
        <BCircle
          strokeStyle="solid"
          strokeColor="#0099ff"
          :strokeOpacity="0.8"
          fillColor="#0099ff"
          :fillOpacity="0.5"
          :center="location.point"
          :radius="location.accuracy"
        />
      </template>
      <BControl
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :offset="{ x: 20, y: 20 }"
        class="custom-control"      
      >
        <select class="select" name="" id="" v-model="mapType">
    			<option value="BMAP_NORMAL_MAP">普通地图</option>
    			<option value="BMAP_SATELLITE_MAP">卫星地图</option>
    			<option value="BMAP_EARTH_MAP">地球模式</option>
  			</select>
      </BControl>
      <BControl
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :offset="{ x: 22, y: 103 }"
				@click="get"
        class="custom-control location-btn"
      >
        <span class="location-text" v-if="isLoading">定位中..</span>
        <LocationIcon v-if="!isLoading"></LocationIcon>
      </BControl>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    BMap,
    BZoom,
    BScale,
    BCityList,
    BNavigation3d,
    BControl,
    BCircle,
    BMarker,
    useBrowserLocation
  } from 'vue3-baidu-map-gl'
  import LocationIcon from './LocationIcon.vue'
  // import ReLocationIcon from './ReLocationIcon.vue'

  const map = ref()
  const { get, location, isLoading, isError, status } = useBrowserLocation(null, () => {
    map.value.resetCenter()
  })
  const mapType = ref<'BMAP_NORMAL_MAP'>('BMAP_NORMAL_MAP')
</script>

<style>
  body {
    margin: 0;
  }

  .location-btn {
    border: none;
    font-size:12px;
  }
  .custom-control{
    border-radius:4px;
    display: flex; 
    color: #666666;
    background-color: #fff; 
    padding: 6px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 15%) 1px 2px 1px;
  }
  .select{
    font-size: 12px;
    color: #666666;
    outline: none;
    border-radius: 6px;
  	padding: 1px 10px;
  	border: 1px solid var(--vp-custom-block-details-border);
  	background-color: var(--vp-custom-block-details-bg);
  	appearance: menulist-button;
  }
</style>
