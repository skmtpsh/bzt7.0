<template>
  <div class="wrapper" ref="wrapper">
    <cate-log></cate-log>
    <list-view :data="lists" @direct="checkFoot" @loadMore="_getStdMore" :hasMore="hasMore" @select="selectStd"></list-view>
    <Footer v-show="!direct"></Footer>
    <router-view></router-view>
  </div>
</template>
<script>
import Footer from 'components/m-footer/footer'
import ListView from 'base/listview/liststd'
import {mapMutations} from 'vuex'
import store from '@/common/js/fn'
import cateLog from './cate'

export default {
  data () {
    return {
      direct: false,
      page: 1,
      hasMore: true,
      lists: []
    }
  },
  created () {
    // this._getStd()
    if (store.getItem('PGINFO')) {
      this.token = JSON.parse(store.getItem('PGINFO')).token
    } else {
      this.$router.push({
        path: '/login'
      })
    } 
    this._getCate()
  },
  methods: {
    checkFoot (dir) { 
      if (dir !== -1) {
        this.direct = true
      } else {
        this.direct = false
      }      
    },
    selectStd (std) {
      this.$router.push({
        path: `/cate/${std.JSON_fileid}`
      })
      this.setDetail(std)
    },
    _getCate () {
      this.$ajx.queryCate({
        token: 'Mix0b2tlbg=='
      }).then(res => {  
      })
    },
    _getStdMore () {
      if (!this.hasMore) {
        return
      }
      // var _this = this

      this.page++
      this.$ajx.queryStdCate({
        searchValue: '',
        type: 0,
        treeChildrens: '168499,168500,168501,168502,168503',
        isbuy: 0,
        status: '1,2,3,4',
        page: this.page,
        rows: 20
      }).then(res => {
        this.lists = this.lists.concat(res.rows)
        this._checkMore(res)
      })
    },
    _checkMore (data) {
      if (this.page * 8 >= data.total) {
        this.hasMore = false
      }
    },
    _getStd () {
      this.$ajx.queryStdCate({
        searchValue: '',
        type: 0,
        treeChildrens: '168499,168500,168501,168502,168503',
        isbuy: 0,
        status: '1,2,3,4',
        page: this.page,
        rows: 20
      }).then(res => { 
        this.lists = res.rows
        this._checkMore(res)  
      }) 
    },
    ...mapMutations({
      setDetail: 'SET_DETAIL'
    })
  },
  components: {
    Footer,
    ListView,
    cateLog
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    position: fixed
    top: 0
    bottom: 0
    height: 100%
    width: 100%
    background: #fff
    z-index: 1000
</style>
