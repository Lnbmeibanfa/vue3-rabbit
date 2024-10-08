import http from '@/utils/http'

export function getCategoryListAPI(id) {
  return http({
      url: `/category`,
      params:{
        id
      }
    })
}

export function getSubCategoryFliterAPI(id) {
  return http({
    url: 'category/sub/filter',
    params: {
      id
    }
  })
}


/**
 * 获取导航数据
 * @param {*} data {
 *  categoryId: 1005000,
 *  page: 1,
 *  pageSize: 20,
 *  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 * } 
 * @returns 
 */
export function getCategoryAPI (data) {
  return http({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
