import http from '@/utils/http'

export function getCartAPI() {
  return http({
    url: '/member/cart'
  })
}

export function addCartAPI({ skuId, count }) {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export function delCartItemsAPI(ids) {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

/**
 * 
 * @param {
 *  {
 *    skuId,
 *    selected,
 *    count
 *  } ,{}
 *  goods 

 */
export function mergeCartAPI(data) {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
