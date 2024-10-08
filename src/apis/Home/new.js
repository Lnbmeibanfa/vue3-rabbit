import http from '@/utils/http'

export function getNewAPI() {
  return http({
    url: '/home/new'
  })
}
