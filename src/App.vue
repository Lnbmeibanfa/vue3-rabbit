<script setup>
import { getCategoryAPI } from '@/apis/testApi'
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await getCategoryAPI()
  console.log(res)
})
</script>

<template>
  <div>这里是APP</div>
  <div class="test">test scss</div>
  <RouterView />
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
