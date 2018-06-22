import * as types from './mutation-types'

const mutations = {
  [types.SET_DETAIL] (state, detail) {
    state.detail = detail
  },
  [types.SET_NEWS_DETAIL] (state, detail) {
    state.newDetail = detail
  }
}

export default mutations
