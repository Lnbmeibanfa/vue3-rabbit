<script setup>
import LayoutNav from './Components/LayoutNav.vue'
import LayoutFooter from './Components/LayoutFooter.vue'
import LayoutHeader from './Components/LayoutHeader.vue'
</script>

<template>
  <LayoutNav />
  <layout-header />
  <router-view></router-view>
  <LayoutFooter />
</template>

<style></style>
