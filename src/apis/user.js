import http from '@/utils/http'

export function LoginAPI({ account, password }) {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
