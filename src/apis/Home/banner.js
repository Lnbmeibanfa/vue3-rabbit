import http from '@/utils/http.js'

export function getBannerAPI(distributionSite) {
  return http({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}
