import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

const usecategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})
export default usecategoryStore
