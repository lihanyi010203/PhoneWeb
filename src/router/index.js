import Vue from 'vue'
import Router from 'vue-router'
//一级路由模板的位置
import Index from '@/components/Index'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import User from '@/components/User'

//二级路(user)模板的位置
import Tuijian from '@/components/Index/Tuijian'
import Shouji from '@/components/Index/Shouji'
import Zhineng from '@/components/Index/Zhineng'
import Dianshi from '@/components/Index/Dianshi'
import Diannao from '@/components/Index/Diannao'
import Quanmianping from '@/components/Index/Quanmianping'
import Shenghuozhoubian from '@/components/Index/Shenghuozhoubian'
import Hezi from '@/components/Index/Hezi'
import Yishu from '@/components/Index/Yishu'
//路由的配置
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
          children:[
          {
            path: '/',
            name: 'Tuijian',
            component: Tuijian 
         },    
         {
            path: '/Index/Shouji',
            name: 'Shouji',
            component: Shouji 
         }, 
         {
            path: '/Index/Zhineng',
            name: 'Zhineng',
            component: Zhineng 
         },   
         {
            path: '/Index/Dianshi',
            name: 'Dianshi',
            component: Dianshi 
         },  
         {
            path: '/Index/Diannao',
            name: 'Diannao',
            component: Diannao 
         },    
         {
            path: '/Index/Quanmianping',
            name: 'Quanmianping',
            component: Quanmianping 
         },  
         {
            path: '/Index/Shenghuozhoubian',
            name: 'Shenghuozhoubian',
            component: Shenghuozhoubian 
         },
         {
            path: '/Index/Hezi',
            name: 'Hezi',
            component: Hezi 
         },
         {
            path: '/Index/Yishu',
            name: 'Yishu',
            component: Yishu 
         },

      ]
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/User',
      name: 'User',
      component: User,
  
    }
  ]
})
