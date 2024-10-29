import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user'
import { useCartStore } from './cart'

const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    // 1. 定义user
    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
      const res = await LoginAPI({ account, password })
      userInfo.value = res.result
    }

    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)

export default useUserStore
