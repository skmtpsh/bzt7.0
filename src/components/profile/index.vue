<template>
  <div class="wraper">
    <div class="profile">
      <div class="avator">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNTY4RTczNTk5QTExRThBRjY5ODkyM0JGREU1MjkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMwNTY4RTc0NTk5QTExRThBRjY5ODkyM0JGREU1MjkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzA1NjhFNzE1OTlBMTFFOEFGNjk4OTIzQkZERTUyOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA1NjhFNzI1OTlBMTFFOEFGNjk4OTIzQkZERTUyOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6LEaPqAAAM7UlEQVR42uxd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" />
      </div>
      <div class="protxt">
        <p>{{username}}</p>
      </div>
    </div>
    <div class="profileLi">
      <router-link tag="a" class="indexbox" to="/fav/favlist">
        <aside class="index-ico"><i class="iconfont icon-lipin"></i></aside>
        <div class="index-txt">
          我的收藏
          <i class="iconfont icon-right-arrow"></i>
        </div>
      </router-link>
    </div>
    <!-- <div class="profileLi">
      <a href="javascript:;" class="indexbox">
        <aside class="index-ico"><i class="iconfont icon-wodedingdan"></i></aside>
        <div class="index-txt">
          最近访问
          <i class="iconfont icon-right-arrow"></i>
        </div>
      </a>
    </div>  
    <div class="profileLi">
      <a href="javascript:;" class="indexbox">
        <aside class="index-ico"><i class="iconfont icon-tishi"></i></aside>
        <div class="index-txt">
          关于
          <i class="iconfont icon-right-arrow"></i>
        </div>
      </a>
    </div> -->
    <div class="profileLi">
      <a href="javascript:;" class="indexbox" @click="logOut">
        <aside class="index-ico"><i class="iconfont icon-tishi"></i></aside>
        <div class="index-txt">
          退出
          <i class="iconfont icon-right-arrow"></i>
        </div>
      </a>
    </div>         
    <Footer></Footer>
  </div>
</template>
<script>
import store from '@/common/js/fn'
import Footer from 'components/m-footer/footer'
export default {
  data () {
    return {
      username: ''
    }
  },
  created () {
    if (store.getItem('PGINFO')) {
      this.username = JSON.parse(store.getItem('PGINFO')).name
    }
  },
  methods: {
    logOut () {
      store.clear()
      this.$router.push({
        path: '/login'
      })
    }
  },
  components: {
    Footer
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/variable"
 
  .profile
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    background-color: #07acff
    padding: 30px 15px
    -webkit-align-items: center
    -webkit-box-align: center
    -ms-flex-align: center
    align-items: center
    margin-bottom: 30px  
  .avator
    width: 60px
    height: 60px
    border-radius: 50%
    img
      max-width: 100%
  .protxt
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    margin-left: 20px
    flex-grow: 1
    -webkit-flex-grow: 1
    p
      font-size: $font-size-normal
      font-weight: 700
      color: $color-text-white
      padding: 5px 0
  .profileLi
    background-color: #fff
    margin-top: 0px
    font-size: $font-size-small
    border-bottom: 1px solid #f0f0f0
    .iconfont
      font-size: 18px
    .indexbox
      display: -webkit-box
      display: -webkit-flex
      display: -ms-flexbox
      display: flex
      -webkit-align-items: center
      -webkit-box-align: center
      -ms-flex-align: center
      align-items: center
      padding-left: 30px
      .index-ico
        margin-right: 15px
        margin-left: -15px
      .index-txt
        display: -webkit-box
        display: -webkit-flex
        display: -ms-flexbox
        display: flex
        -webkit-justify-content: space-between
        -webkit-box-pack: justify
        -ms-flex-pack: justify
        justify-content: space-between
        -webkit-align-items: center
        -webkit-box-align: center
        -ms-flex-align: center
        align-items: center        
        overflow: hidden       
        width: 100%
        padding: 15px 10px 15px 0
</style>

