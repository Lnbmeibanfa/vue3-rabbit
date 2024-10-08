import { ref, onMounted } from "vue";
import { getBannerAPI } from '@/apis/Home/banner';

export function useBanner() {
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI('2');
    bannerList.value = res.result
  }
  onMounted(() => {
    getBannerList()
  })
  return {
    bannerList
  }
}