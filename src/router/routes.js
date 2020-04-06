import Home from '@/pages/Home';
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Rejister from '@/pages/Rejister'

export default [
  {
    path:'/',
    component:Home
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:Search,
    props:(route)=>({keyword1:route.params.keyword,keyword2:route.query.keyword})
   
    
  },
  {
    path:'/rejister',
    component:Rejister,
    meta: {
      isHideFooter: true, // 标识footer是否隐藏
    }
  },
  {
    path:'/login',
    component:Login,
    meta: {
      isHideFooter: true, // 标识footer是否隐藏
    }
  },
  
]