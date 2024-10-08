<script setup>
import { getBannerAPI } from '@/apis/Home/banner.js'
import { onMounted, ref } from 'vue'
const banners = ref([])
onMounted(async () => {
  const res = await getBannerAPI(1)
  banners.value = res.result
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <img :src="banner.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
