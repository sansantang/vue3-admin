import request from '@/utils/request'

/**
 * 登录
 * @param {*} data
 * @returns
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export const profile = () => {
  return request({
    url: '/sys/profile',
    method: 'get'
  })
}
