<template>
  <div class="footer">
    <div class="index-footer">
      <router-link tag="a" class="index-footertab" to="/">
        <i class="iconfont icon-shouye"></i><span class="index-txt">首页</span>
      </router-link>
      <router-link tag="a" class="index-footertab" to="/cate">
        <i class="iconfont icon-fenlei"></i><span class="index-txt">分类</span>
      </router-link>
      <router-link tag="a" class="index-footertab" to="/news">
        <i class="iconfont icon-office"></i><span class="index-txt">行业动态</span>
      </router-link>
      <router-link tag="a" class="index-footertab" to="/profile">
        <i class="iconfont icon-account"></i><span class="index-txt">个人中心</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .footer
    height: 60px
  .index-footer
    position: fixed
    left: 0
    right: 0
    bottom: 0
    z-index: 100

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

    height: 60px

    background-color: #fff

    -webkit-box-shadow: 0 -2px 20px rgba(0,0,0,0.2)
    box-shadow: 0 -2px 20px rgba(0,0,0,0.2)
    -webkit-box-shadow: 0 -2px 20px rgba(0,0,0,0.2)
    box-shadow: 0 -2px 20px rgba(0,0,0,0.2)
    &.router-link-active
 
        color: $color-backgournd-btn
  .index-footertab
    display: block
    -webkit-flex: 1
    -webkit-box-flex: 1
    -ms-flex: 1
    flex: 1
    text-align: center
    &.router-link-exact-active
        color: $color-backgournd-btn    
    .iconfont
      font-size: $font-size-large
  .index-txt
    padding:5px 0
    display: block
    font-size: $font-size-small
</style>

