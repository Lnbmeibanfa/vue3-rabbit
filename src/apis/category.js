import http from '@/utils/http'

export function getCategoryListAPI(id) {
  return http({
      url: `/category`,
      params:{
        id
      }
    })
}

export function getSubCategoryListAPI(id) {
  return http({
    url: 'category/sub/filter',
    params: {
      id
    }
  })
}
