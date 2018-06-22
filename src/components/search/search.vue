<template>
  <div>
    <search-box @search="doSearch"></search-box>
    <div class="searchwrap" ref="searchwrap">
      <list-view :data="lists" @loadMore="_getListMore" :hasMore="hasMore" @select="selectStd"></list-view>
      <Loading v-show="hasMore" title=""></Loading> 
    </div>
  </div>
</template>
<script>
import SearchBox from 'components/searchbox/searchbox'
import ListView from 'base/listview/liststd'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapMutations} from 'vuex'

const ROWS = 20

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
    console.log(this.$route.params.key)
    this._getList()
  },
  watch: {
    '$route' (to, from) {
      this._getList()
    }
  },  
  methods: {
    doSearch (key) {
      this.$router.push({
        path: `/search/${encodeURI(key)}`
      })
    },
    selectStd (std) {
      this.$router.push({
        path: `/detail/${std.JSON_fileid}`
      })
      this.setDetail(std)
    },  
    _checkMore (data) {
      if (this.page * 20 >= data.total) {
        this.hasMore = false
      }
    },      
    _getList () {
      this.lists = []
      this.$ajx.querySearch({
        code: 0,
        searchValue: this.$route.params.key,
        timetype: 1,
        type: 3,
        isAll: 1,
        status: '1,2,3,4',
        page: 1,
        rows: ROWS
      }).then(res => { 
        this.lists = res.rows
        this._checkMore(res)  
      }) 
    },
    _getListMore () {
      if (!this.hasMore) {
        return
      } 
      this.page++      
      this.$ajx.querySearch({
        code: 0,
        searchValue: this.$route.params.key,
        timetype: 1,
        type: 3,
        isAll: 1,
        status: '1,2,3,4',
        page: this.page,
        rows: ROWS
      }).then(res => { 
        this.lists = this.lists.concat(res.rows)
        this._checkMore(res)
      }) 
    },    
    ...mapMutations({
      setDetail: 'SET_DETAIL'
    })    
  },
  components: {
    SearchBox,
    Scroll,
    ListView,
    Loading
  }
}
</script>
<style lang="stylus" scoped>
.searchwrap 
  position: fixed
  top: 50px
  height 100%
  bottom 0
  width 100%
  z-index 1
</style>

