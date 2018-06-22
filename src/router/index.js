import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login'
import Main from 'components/main/main'
import Classify from 'components/cate/index'
import StdDetail from 'components/detail/detail'
import NewsDetail from 'components/newsdetail/newdetail'
import NewsList from 'components/news/newslist'
import Person from 'components/profile/index'
import Search from 'components/search/search'
import Struct from 'components/struct/struct'
import FavList from 'components/fav/favList'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search/:key', // 搜索 
      component: Search,
      meta: {
        requiresAuth: true
      }      
    },
    {
      path: '/detail/:id',
      component: StdDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cate',
      component: Classify,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: ':id', // 分类
          component: StdDetail
        }
      ]      
    },    
    {
      path: '/news',
      component: NewsList,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: ':id', // 新闻详情
          component: NewsDetail 
        }
      ]
    },
    {
      path: '/struct/:fileid', // 结构化数据
      name: 'struct',
      component: Struct,
      meta: {
        requiresAuth: true
      } 
    },    
    {
      path: '/fav/favlist', // 我的收藏
      component: FavList,
      meta: {
        requiresAuth: true
      }      
    },
    {
      path: '/profile', // 个人中心
      component: Person,
      meta: {
        requiresAuth: true
      }
    }    
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.length === 0) { 
    from.name ? next({
      name: from.name
    }) : next('/')
  } else {
    next()
  }
});

export default router
