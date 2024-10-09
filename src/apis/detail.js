import http from "@/utils/http"

export function getDetailAPI (id) {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}
