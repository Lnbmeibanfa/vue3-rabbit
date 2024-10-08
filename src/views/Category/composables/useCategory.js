import { onBeforeRouteUpdate } from 'vue-router';
import { getCategoryListAPI } from '@/apis/category';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useCatogory() {
  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id)
  })
  const route = useRoute()
  const categoryList = ref({})
  
  const getCategoryList = async (id = route.params.id) => {
    const res = await getCategoryListAPI(id)
    categoryList.value = res.result
  }
  
  watch(route, () => getCategoryList())

  return {
    categoryList
  }
}