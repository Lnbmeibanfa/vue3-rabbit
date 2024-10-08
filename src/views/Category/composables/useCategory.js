import { onBeforeRouteUpdate } from 'vue-router';
import { getCategoryListAPI } from '@/apis/category';
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export function useCatogory() {
  onBeforeRouteUpdate((to) => {
    console.log(to)
    getCategoryList(to.params.id)
  })
  const route = useRoute()
  const categoryList = ref({})
  const getCategoryList = async (id = route.params.id) => {
    console.log(id)
    const res = await getCategoryListAPI(id)
    categoryList.value = res.result
  }
  onMounted(() => getCategoryList())
  
  watch(route, () => getCategoryList())

  return {
    categoryList
  }
}