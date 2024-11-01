import http from '@/utils/http'

export const getOrderInfoAPI = () => {
  return http({
    url: '/member/order/pre'
  })
}
