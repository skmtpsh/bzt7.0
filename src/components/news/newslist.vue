<template>
  <div class="wrapper" ref="wrapper">
  <Scroll
  :pullup="pullup"
  @scrollToEnd="_getStdMore"
  ref="listview" 
  class="listview">
    <ul class="newList">
      <li class="item" @click="selectNew(item)" v-for="(item, index) in lists" :key="index">
        <h2>{{item.NTitle}}</h2>
        <p>{{item.PublishDate2}}</p>
      </li>
      <Loading v-show="hasMore" title=""></Loading>
    </ul>
  </Scroll>
  <Footer></Footer>
  <router-view></router-view>
  </div>
</template>
<script>
import Footer from 'components/m-footer/footer'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      page: 1,
      hasMore: true,
      lists: []
    }
  },
  created () {
    this.probeType = 3
    this.pullup = true
    this.listenScroll = true
    this._getStd()
  },
  methods: {
    selectNew (item) {
      this.$router.push({
        path: `/news/${item.CmsNewsID}`
      }) 
      this.setNewDetail(item)
    },
    _getStdMore () {
      if (!this.hasMore) {
        return
      }
      var _this = this
      this.page++      
      this.$ajx.queryNews({
        id: 5,
        status: 2,
        page: _this.page,
        rows: 10,
        order: 'desc'
      }).then(res => { 
        this.lists = _this.lists.concat(res.rows)
        this._checkMore(res)
      }) 
    },
    _checkMore (data) {
      if (this.page * 8 >= data.total) {
        this.hasMore = false
      }
    },
    _getStd () {
      var _this = this
      this.$ajx.queryNews({
        id: 5,
        status: 2,
        page: _this.page,
        rows: 10,
        order: 'desc'
      }).then(res => { 
        this.lists = res.rows
        this._checkMore(res)
      }) 
    },
    ...mapMutations({
      setNewDetail: 'SET_NEWS_DETAIL'
    })
  },
  components: {
    Footer,
    Scroll,
    Loading
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    position: fixed
    bottom: 0
    height: 100%
    width: 100%
    background: #fff
    z-index: 1000  
  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden   
  .newList
    padding 0 15px
    .item
      padding: 10px 5px
      border-bottom: 1px solid #dedede
      h2
        padding: 5px 0
        line-height: 1.6
        font-size: $font-size-normal
      p
        padding:5px 0
        color: $color-text-normal
        font-size: $font-size-small
        text-align: right
</style>

