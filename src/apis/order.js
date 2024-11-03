import http from '@/utils/http'

export const submitOrderAPI = (obj) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data: obj
  })
}

export const getOrderAPI = (id) => {
  return http({
    url: `/member/order/${id}`
  })
}

export const aliPayAPI = (orderId, redirect) => {
  return http({
    url: '/pay/aliPay',
    params: {
      orderId,
      redirect
    }
  })
}
