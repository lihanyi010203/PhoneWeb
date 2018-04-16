<template>
  <div class="Index">
    <!--  头部信息 -->
    <div class="header">
    	<img src="../../static/images/Index/header/1.png" alt="">
    	<input type="text" value="">
    	<router-link to="/user" tag="span">
    		<span class="iconfont icon-icon-test"></span>
    	</router-link>
    </div>
	<!--  头部滚动导航 -->
    <nav class="top">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
			   	<router-link to="/" tag="span" :class=" $route.path=='/'?'changeColor changebdColor':'NOchangeColor' ">
			    	推荐
			    </router-link>
      	  </div>
          <div class="swiper-slide">
			   	<router-link to="/Index/Shouji" tag="span" :class=" $route.path=='/Index/Shouji'?'changeColor changebdColor':'NOchangeColor' ">
			    	手机
			    </router-link>
          </div>
          <div class="swiper-slide">
                <router-link to="/Index/Zhineng" tag="span" :class=" $route.path=='/Index/Zhineng'?'changeColor changebdColor':'NOchangeColor' " class="">
			    	智能
			    </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Dianshi" tag="span" :class=" $route.path=='/Index/Dianshi'?'changeColor changebdColor':'NOchangeColor' ">
				    	电视
			  </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Diannao" tag="span" :class=" $route.path=='/Index/Diannao'?'changeColor changebdColor':'NOchangeColor' ">
	                    电脑
	          </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Quanmianping" tag="span" :class=" $route.path=='/Index/Quanmianping'?'changeColor changebdColor':'NOchangeColor' ">
	                     全面屏
	          </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Shenghuozhoubian" tag="span" :class=" $route.path=='/Index/Shenghuozhoubian'?'changeColor changebdColor':'NOchangeColor' ">
	                     生活周边
	          </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Hezi" tag="span" :class="" :class=" $route.path=='/Index/Hezi'?'changeColor changebdColor':'NOchangeColor' ">
	                       盒子
	          </router-link>
          </div>
          <div class="swiper-slide">
	          <router-link to="/Index/Yishu" tag="span" :class=" $route.path=='/Index/Yishu'?'changeColor changebdColor':'NOchangeColor' ">
	                       艺术
	          </router-link>
         </div>
        </div>
      </div>
    </nav>
    <!-- vue窗口 -->
    <router-view/>
  </div>
</template>
<script> 
//引入公共的底部
export default {
  name: 'Index',
  data () {
    return {
      msg:''
    }
  },
  // 这里的 js 才能够执行
  mounted(){
        // 实例化Swiper
      var mySwiper = new Swiper('.swiper-container', {
        // autoplay: true,//可选选项，自动滑动
                slidesPerView:6,
      })    
      //打印是斜杠路由
      // console.log(this.$route.path)
   },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import '../assets/css/base.scss';
 *{font-family:Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif};
  .header{
  	  display: flex;
  	  align-items: center;
      height: rem(100px);
      background: #f2f2f2;
      img{
           width:rem(51px);
           height:rem(32px);
           padding-left: rem(27px);
           padding-right: rem(27px);
      }
      input{
          width:rem(540px);
          height:rem(66px);
          border: 1px solid #e5e5e5
      }
      span{
      	  text-align: center;
      	  line-height: rem(100px);
      	  font-size: rem(50px);
          width:rem(105px);
          height:rem(100px);
      }
    }
    .top{
    	width: 100%;
    	height: rem(64px);
    	background: #f2f2f2;
    	.swiper-container{
           width: 100%;
    	     height: rem(64px);
    	   .swiper-wrapper{
    	   	width: 100%;
    	    height: rem(64px);
    	    .swiper-slide{
    	    	text-align: center;
    	    	line-height: rem(64px); 
    	    	font-size:  rem(26px);
    	    	height:rem(64px); 
    	    	span{
    	    		display: inline-block;
    	    		height: rem(61px);  
    	    		line-height: rem(64px); 
    	    	}
    	    	.changeColor{
                    color: #ED5B00;
    	    	}
                .NochangeColor{
                    color: rgb(116, 116, 116);
    	    	}
    	    	.changebdColor{
    	    		border-bottom: rem(3px) solid #ED5B00;
    	    	}
    	    	.NochangebdColor{
    	            border-bottom: rem(3px) solid white;
    	    	}
    	    }
    	    
    	   }
    	}
    }
</style>
