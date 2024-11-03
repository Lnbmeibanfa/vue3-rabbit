import { ElMessageBox, ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'
import useUserStore from './login'
import { getCartAPI, addCartAPI, delCartItemsAPI, mergeCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    // 1. 定义state - cartList
    const cartList = ref([])

    // 2. 定义actrion - addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods
      // 判断是否登录
      const userStore = useUserStore()
      if (userStore.userInfo.token) {
        await addCartAPI({ skuId, count })
        updateCartList()
      } else {
        // 添加购物车操作
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
          item.count += goods.count
        } else {
          cartList.value.push(goods)
        }
      }
    }

    // 计算属性,求购物车中的和
    const cartTotalItems = computed(() => {
      return cartList.value.reduce((sum, item) => (sum += item.count), 0)
    })

    // 计算属性,求购物车里的总价格
    const cartTotalPrice = computed(() => {
      return cartList.value.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2)
    })

    // 计算属性,选中的数量
    const cartSelectedItems = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((sum, item) => sum + item.count, 0)
    )

    // 计算属性,选中的价格
    const cartSelectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.count * item.price, 0)
        .toFixed(2)
    )

    // 定义action,删除指定id的购物车项
    const delCart = async (skuId) => {
      const sku = cartList.value.find((item) => item.skuId === skuId)
      const attrsText = sku.attrsText
      // 判断是否登录
      const userStore = useUserStore()
      if (userStore.userInfo.token) {
        ElMessageBox.confirm(`是否将${attrsText}移除购物车?`, 'warning', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            await delCartItemsAPI([skuId])
            updateCartList()
            ElMessage.success('删除成功')
          })
          .catch(() => {
            ElMessage.info('取消删除')
          })
      } else {
        ElMessageBox.confirm(`是否将${attrsText}移除购物车?`, 'warning', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
            ElMessage.success('删除成功')
          })
          .catch(() => {
            ElMessage.info('取消删除')
          })
      }
    }

    // 清空购物车
    const clearCart = async () => {
      cartList.value = []
    }

    // 合并购物车到远程
    const mergeCart = async () => {
      const cartArray = cartList.value.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      })
      await mergeCartAPI(cartArray)
    }

    // action 单选框交互
    const changeSelected = (skuId, selected) => {
      const goods = cartList.value.find((item) => item.skuId === skuId)
      goods.selected = selected
    }

    // 全选反选操作
    const changeAllSelected = (selected) => {
      cartList.value.forEach((good) => (good.selected = selected))
    }

    const updateCartList = async () => {
      const res = await getCartAPI()
      cartList.value = res.result
    }
    return {
      cartList,
      addCart,
      cartTotalItems,
      delCart,
      cartTotalPrice,
      changeSelected,
      changeAllSelected,
      cartSelectedItems,
      cartSelectedPrice,
      clearCart,
      mergeCart,
      updateCartList
    }
  },
  {
    persist: true
  }
)
