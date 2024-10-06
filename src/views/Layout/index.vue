<script setup>
import LayoutNav from './Components/LayoutNav.vue'
import LayoutFooter from './Components/LayoutFooter.vue'
import LayoutHeader from './Components/LayoutHeader.vue'
import LayoutFixed from './Components/LayoutFixed.vue'
import { onMounted } from 'vue'
import usecategoryStore from '@/stores/categorys'
const userCategory = usecategoryStore()
onMounted(() => {
  userCategory.getCategory()
})
</script>

<template>
  <LayoutNav />
  <LayoutFixed />
  <layout-header />
  <router-view></router-view>
  <LayoutFooter />
</template>

<style></style>
