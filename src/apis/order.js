import http from '@/utils/http'

export const submitOrderAPI = (obj) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data: obj
  })
}
