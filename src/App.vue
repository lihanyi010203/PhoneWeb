<template>
  <div id="app">
    
    <div class="footernav">
        <ul>
           <router-link to="/" tag="li">
               <span class="iconfont icon-shouye" :class="  (result=='Index' || result=='')?'changeColor':'NochangeColor'"></span>
               <p :class=" (result=='Index' || result=='')?'changeColor':'NOchangeColor' ">首页</p>
           </router-link>
           <router-link to="/category" tag="li">
               <span class="iconfont icon-fenlei" :class=" $route.path=='/category'?'changeColor':'NochangeColor'"></span>
               <p :class=" $route.path=='/category'?'changeColor':'NOchangeColor' ">分类</p>
           </router-link>
           <router-link to="/cart" tag="li">
               <span class="iconfont icon-gouwuche" :class=" $route.path=='/cart'?'changeColor':'NochangeColor'"></span>
               <p :class=" $route.path=='/cart'?'changeColor':'NOchangeColor' ">购物车</p>
           </router-link>
           <router-link to="/user" tag="li">
               <span class="iconfont icon-icon-test " :class=" result=='user'?'changeColor':'NochangeColor'"></span>
               <p :class=" result=='user'?'changeColor':'NOchangeColor' ">我的</p>
           </router-link>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    //1.只要User跳转到这页面下边相应的字和图标将亮起来
    result:function(){

      // console.log(this.$route.path);
      // 把路由（字符串）分割成数组
      var arr = this.$route.path.split('/');
      // console.log(arr)

      //  把路由的名称 return
      return arr[1];

      // console.log(arr);
    },
    
  }
}
</script>

<style scoped lang="scss">
@import './assets/css/base.scss';
*{font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif};
  .footernav{
      position: fixed;
      z-index:333;
      bottom: 0;
      width: rem(750px);
      height:rem(100px);
      background:white;
      ul{
        display: flex;
        height:rem(100px);
        li{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          text-align: center;
          width: 25%;
          height: rem(100px);
           span{
             font-size:rem(50px); 
             width: 100%;
           }
      
           p{
             font-size:rem(30px);
             width: 100%;
           }
          .changeColor{
            color: #ff6700;
          }
          .NOchangeColor{
            color: #A1A1A1;
          }
          
        }
      }
  }

</style>
