import axios from './api'
// import axios2 from 'axios'

// 单独导出 首页标准查询
// export const queryStd2 = params => {
//   return axios2.post(
//     'http://1nm5415219.imwork.net/PDCA/ashx/NewsViewsMoreHandler.ashx?action=GetPdcaStdForum',
//     params, 
//     {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     }
//   )   
// }

// 单独导出 首页标准查询
export const queryStd = params => {
  return axios({
    url: 'NewsViewsMoreHandler.ashx?action=GetPdcaStdForum',
    method: 'POST',
    params
  })
}
// 单独导出 标准分类查询
export const queryStdCate = params => {
  return axios({
    url: 'CommentStandardHandler.ashx?action=query',
    method: 'POST',
    params
  })
}

// 单独导出 标准详情查询
export const queryStdDetail = params => {
  return axios({
    url: 'CommentStandardHandler.ashx?action=detail',
    method: 'POST',
    params
  })
}
// 单独导出 行业资讯查询
export const queryNews = params => {
  return axios({
    url: 'StructAPIHandler.ashx?action=GetHYMore',
    method: 'POST',
    params
  })
}
// 单独导出 行业资讯详情查询
export const queryNewsDetail = params => {
  return axios({
    url: 'DefaultHandler.ashx?action=GetDetail',
    method: 'POST',
    params
  }, '/ashx/')
}
// 单独导出 搜索查询
export const querySearch = params => {
  return axios({
    url: 'CommentStandardHandler.ashx?action=query',
    method: 'POST',
    params
  })
}
// 结构化查询
export const queryStruct = params => {
  return axios({
    url: 'StructAPIHandler.ashx?action=getContentInfo',
    method: 'POST',
    params
  })
}
// 我的收藏标签查询
export const queryFav = params => {
  return axios({
    url: 'PdcaCustomlabelHandler.ashx?action=GetPdcaCustomlabelByUser',
    method: 'POST',
    params
  })
}
// 我的收藏
export const queryAddFav = params => {
  return axios({
    url: 'wapHandler.ashx?action=FavorAppend',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 我的收藏
export const queryDelFav = params => {
  return axios({
    url: 'wapHandler.ashx?action=FavorDelete',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 我的收藏标签查询
export const queryFavList = params => {
  return axios({
    url: 'wapHandler.ashx?action=FavorLoadby',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 登录
export const queryLogin = params => {
  return axios({
    url: 'wapHandler.ashx?action=login',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 客户目录
export const queryCate = params => {
  return axios({
    url: 'wapHandler.ashx?action=CatalogLoadby',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 客户目录标准
export const queryCateStd = params => {
  return axios({
    url: 'wapHandler.ashx?action=TopicalLoadby',
    method: 'POST',
    params
  }, '/api/ashx/')
}
// 默认全部导出
export default {
  queryStd,
  queryStdCate,
  queryStdDetail,
  queryNews,
  queryNewsDetail,
  querySearch,
  queryStruct,
  queryFav,
  queryFavList,
  queryLogin,
  queryCate,
  queryAddFav,
  queryDelFav
}
