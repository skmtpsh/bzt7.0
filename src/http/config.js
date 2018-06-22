export default {
  method: 'post',
  baseAPI: '/api/',
  // 基础url前缀
  baseURL: '/api/PDCA/ashx/', // 'http://1nm5415219.imwork.net:55793/PDCA/ashx/'
  // baseURL: '/PDCA/ashx/',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 图片URL
  picURL: '/api/wap/',
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
