<template>
  <scroll
  :listenScroll="listenScroll"
  @scroll="scroll"
  :data="data"
  :probe-type="probeType"
  :pullup="pullup"
  @scrollToEnd="searchMore"
  ref="listview" 
  class="listview"> 
      <ul class="stdList">
        <li class="item" @click="selectItem(item)" v-for="(item, index) in data" :key="index">
          <h2>{{item.JSON_std_name}}</h2>
          <p>编号：{{item.JSON_std_no}}</p>
          <p>
            <span class="label" v-if="item.JSON_status==='1'">
              未实施
            </span>
            <span class="label" v-if="item.JSON_status==='2'">
              已实施
            </span>
            <span class="label" v-if="item.JSON_status==='3'">
              已废止
            </span>             
            实施时间：{{item.JSON_publishDate}}</p>
        </li>
        <loading v-show="hasMore" title=""></loading>            
      </ul>
  </scroll>
</template>
<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'

export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.probeType = 3
    this.pullup = true
    this.listenScroll = true
  },
  methods: {
    scroll (pos) {
      let direct = this.$refs.listview.scroll.directionY
      this.$emit('direct', direct)
    },
    selectItem (item) {
      this.$emit('select', item)
    },
    searchMore () {   
      this.$emit('loadMore')
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden    
  .item
    padding: 20px 15px
    border-bottom: 1px solid #dedede

    h2
      overflow hidden
      text-overflow ellipsis
      padding: 5px 0
      white-space: nowrap
      font-size: $font-size-normal
    p
      padding:5px 0
      color: $color-text-normal
      font-size: $font-size-small
    &:nth-last-child(1)
      border-bottom: 0
</style>
