<template>
  <div class="wrapper" ref="wrapper">
      <list-view :data="lists" @direct="checkFoot" @loadMore="_getStdMore" :hasMore="hasMore" @select="selectStd"></list-view>
      <Footer v-show="!direct"></Footer>
      <router-view></router-view>
  </div>
</template>
<script>
import Footer from 'components/m-footer/footer'
import ListView from 'base/listview/liststdwap'
import {mapMutations} from 'vuex'
import store from '@/common/js/fn' 
export default {
  data () {
    return {
      direct: false,
      page: 1,
      hasMore: true,
      lists: [],
      token: ''
    }
  },
  created () {
    if (store.getItem('PGINFO')) {
      this.token = JSON.parse(store.getItem('PGINFO')).token
    }
    this._getStd()  
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
        path: `/detail/${std.JSON_fileid}`
      })
      this.setDetail(std)
    },
    _getStdMore () {
      if (!this.hasMore) {
        return
      }
      this.page++
      this.$ajx.queryFavList({
        token: this.token
      }).then(res => {
        this.lists = this.lists.concat(res.rows)
        this._checkMore(res)
      })
    },
    _checkMore (data) {
      data.total = 2 // 需要陶工提供!!!!
      if (this.page * 8 >= data.total) {
        this.hasMore = false
      }
    },
    _getStd () {
      this.$ajx.queryFavList({
        token: this.token
      }).then(res => { 
        this.lists = res.data
        this._checkMore(res)  
      }) 
    },
    ...mapMutations({
      setDetail: 'SET_DETAIL'
    })
  },
  components: {
    Footer,
    ListView
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
