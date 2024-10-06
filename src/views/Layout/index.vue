<script setup>
import LayoutNav from './Components/LayoutNav.vue'
import LayoutFooter from './Components/LayoutFooter.vue'
import LayoutHeader from './Components/LayoutHeader.vue'
import { getCategoryAPI } from '@/apis/layout'
import { onMounted, ref } from 'vue'
const category = ref([])
const getCategory = async () => {
  const res = await getCategoryAPI()
  category.value = res.result
}
onMounted(() => {
  getCategory()
})
</script>

<template>
  <LayoutNav />
  <layout-header :categoryList="category" />
  <router-view></router-view>
  <LayoutFooter />
</template>

<style></style>
