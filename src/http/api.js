import axios from 'axios'
import config from './config'

export default function $axios (option, baseurl = config.baseURL) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: baseurl,
      headers: config.headers,
      transformResponse: [function (data) {}]
    })

    instance.interceptors.request.use(config => {
      return config
    }, error => {
      console.log(error)
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log('timeout')
      }
      return Promise.reject(error)
    })
    instance.interceptors.response.use(response => {
      let data
      if (response.data === undefined) {
        data = response.request.responseText
      } else {
        data = response.data
      }
      return data
    }, error => {
      if (error && error.response) {
        switch (error.response.status) {
          case 404:
            error.message = `请求地址出错: ${error.response.config.url}`
            break
          case 500:
            error.message = '服务器错误'
            break
        }
      }
      return Promise.reject(error)
    })  

    instance(option)
      .then(res => {
        resolve(JSON.parse(res))
      })
      .catch(err => {
        reject(err)
      })
  })
}
