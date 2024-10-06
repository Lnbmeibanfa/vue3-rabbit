import http from '@/utils/http'

export function getHotAPI() {
  return http({
    url: '/home/hot'
  })
}
