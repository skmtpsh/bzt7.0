<template>
  <div class="searhbox">
    <div class="searchwrap">
      <i class="iconfont icon-search" @click="doSearch"></i>
      <input type="text" class="search_input" v-model="key" placeholder="请输入搜索内容" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      key: ''
    }
  },
  methods: {
    doSearch () {
      if (this.key === '') {
        alert('请输入关键字')
        return false
      }
      this.$emit('search', this.key)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .searhbox
    width: 100%
    padding: 8px 10px
    background: #f0efed
    .searchwrap
      position:relative
      background-color: $color-background
      .iconfont
        position: absolute
        right: 10px
        top: 8px
        color: $color-text
      .search_input
        width: 100%
        padding: 8px 2rem 8px 5px
        border: 0
        font-size: $font-size-normal
</style>


