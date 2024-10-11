import http from "@/utils/http"

export function getDetailAPI (id) {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}


/**
 * 
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销棒 
 * @param {Number} limit - 获取个数
 * @returns 
 */
export const getHotGoodsAPI = ({ id, type, limit = 3}) => {
  return http({
    url: '/goods/hot',
    params:{
      id,
      type,
      limit
    }
  })
}
