<template>
  <div>
    <loading v-show="!detail"></loading>
    <Scroll class="wrapper" ref="wrapper">
      <div class="pdcont">
        <div v-html="detail.NContent"></div>
      </div>
    </Scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      detail: {}
    }
  },
  created () {
    var _this = this
    if (!this.newDetail.CmsNewsID) {
      this.$router.push('/news')
      return
    }    
    this.$ajx.queryNewsDetail({
      id: _this.newDetail.CmsNewsID,
      status: 200
    }).then(res => {
      this.detail = res
    }) 
  },
  computed: {
    ...mapGetters([
      'newDetail'
    ])
  },
  components: {
    Scroll,
    Loading
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    position: fixed
    bottom: 0
    height: 100%
    width: 100%
    background: #fff
    z-index: 1000
    .pdcont
      line-height 1.6
      padding 20px
      word-wrap: break-word
      word-break: break-all
</style>
