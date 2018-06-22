<template>
  <!-- <transition name="slide"> -->
   
  <div class="wrapper">
    <scroll class="detaitxt"> 
      <section >
        <ul class="detailpro">
          <li v-for="(item, index) in dList" :key="index">
            {{item.JSON_catalog_name}} ：{{item.JSON_catalog_content}}
          </li>
        </ul>
      </section>
      <div class="footer">
        <div class="index-footer">
          <span class="fav">
            <i class="iconfont icon-favorites"></i>
          </span>
          <a href="#" class="index-footertab bgred">
            <span class="index-txt">PDF阅读</span>
          </a>
          <router-link 
            tag="a" 
            class="index-footertab bgori" 
            :to="{ name: 'struct', params: { fileid: tempFileID }}">
              <span class="index-txt">结构化数据</span>
          </router-link>                
        </div>
      </div>      
    </scroll>
  </div>
  
  <!-- </transition> -->
</template>
<script>
import {mapGetters} from 'vuex'
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      dList: []
    }
  },
  computed: {
    ...mapGetters([
      'detail'
    ])
  },
  created () {
    this.tempFileID = this.detail.fileid || this.detail.JSON_fileid
    this._getDetail()
  },
  methods: {
    _getDetail () {
      let tempStdType = this.detail.std_type || this.detail.JSON_std_type

      if (!this.tempFileID) {
        this.$router.push('/cate')
        return
      }
      this.$ajx.queryStdDetail({
        fileid: this.tempFileID,
        std_type: tempStdType
      }).then(res => {
        this.dList = res.rows
      }) 
    }
  },
  components: {
    Scroll
  }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"

$height = 50px

.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
.wrapper
  position: fixed
  top: 0
  bottom: 0
  height: 100%
  width: 100%
  background: #fff
  z-index: 1000  
.detaitxt
  height 100%
  padding:0 15px
  background: #ffffff
  h2
  p
    font-size: $font-size-medium
    margin:15px 0
    line-height: 1.6
  p
    font-size: $font-size-normal
  & .detailpro
      padding:10px 0 
      & li
        padding: 8px 0
        line-height: 1.6
.footer 
  height $height
.index-footer
    position: fixed
    left: 0
    right: 0
    bottom: 0
    z-index: 9999

    display: -webkit-flex
    display: -webkit-box
    display: -ms-flexbox
    display: flex

    -webkit-align-items: center
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center

    -webkit-justify-content: space-between
    -webkit-box-pack: justify
    -ms-flex-pack: justify
    justify-content: space-between    

    height: $height

    background-color: #fff
  .fav
    display: block
    width: 80px
    height: $height
    line-height: $height
    text-align: center
    background-color: #e3e3e3
  .index-footertab
    height:$height
    
    -webkit-flex: 1
    -webkit-box-flex: 1
    -ms-flex: 1
    flex: 1 
    font-size: $font-size-small

    display: -webkit-flex
    display: -webkit-box
    display: -ms-flexbox
    display: flex

    -webkit-align-items: center
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    color:$color-text-white
 
    -webkit-justify-content: center
    -webkit-box-pack: center
    -ms-flex-pack: center
    justify-content: center 
    &.bgred
      background-color:#cf0c00
    &.bgori
      background-color:#ff7416
  .index-txt 
    font-size: $font-size-normal
       
</style>
