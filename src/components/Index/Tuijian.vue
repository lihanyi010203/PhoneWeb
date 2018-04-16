<template>
  <div class="Tuijian">
  	<!-- 头部轮播 -->
    <div class="header">
	    <div class="swiper"  @mouseenter="enter" @mouseleave="leave">
			<!-- 图片图片 -->
			<transition-group name="fade" tag="ul" class="swiper-image">
				<!-- 当index的值和图片的索引值一致的时候，让它显示出来 -->
				<li v-for="(img,key) in imgs" v-bind:key="img" v-show="index==key"><a href=""><img :src="img" alt=""></a></li>
			</transition-group>
			
			<!-- 图片索引值 --> 
			<ol class="swiper-index">
				<!-- 当前图片的索引和 n的值一致的时候，给当前li标签增加active的类 -->
				<li v-for="n in imgs.length" :class="{active:index==n-1}" @mouseenter="numEnter(n-1)"></li>
			</ol>
		</div>
    </div>
     <!-- 头部轮播 上部分 -->
     <div class="menu">
     	<a v-for="menuimg in menuimgs" :href="menuimg.la"><img :src="menuimg.img" alt=""></a>
     </div>
     <!-- 头部轮播 菜单 -->
     <div class="header-menu">
     	<a href="#">
	     	  <div class="left">
	     	  	   <img src="../../../static/images/Index/tuijian-imgs/1.jpg" alt="">
	     	  </div>
     	 </a>
     	  <div class="right">
     	  	<a href="#">
     	  	   <div class="top">
     	  	   		<img src="../../../static/images/Index/tuijian-imgs/2.jpg" alt="">
     	  	   </div>
     	  	 </a>
     	  	 <a href="#">
     	  	   <div class="bottom">
	     	  	   	<img src="../../../static/images/Index/tuijian-imgs/3.jpg" alt="">
     	  	   </div>
     	  	 </a>
     	  </div>
     </div>
      <!-- 小米闪购 -->
      <img class="mi-go" src="../../../static/images/Index/tuijian-migo/1.jpg" alt="">
  </div>
</template>

<script> 
//引入公共的底部
export default {
  name: 'Tuijian',
  data () {
    return {
      // 所有的图片列表
			imgs: ['static/images/Index/tuijian/1.jpg','static/images/Index/tuijian/2.jpg','static/images/Index/tuijian/3.jpg','static/images/Index/tuijian/4.jpg'],
			// menu 数据
			menuimgs: [
                 { id: 1, la: '#', img:'static/images/Index/tuijian-menu/1.webp'},
                 { id: 2, la: '#', img:'static/images/Index/tuijian-menu/2.webp'},
                 { id: 3, la: '#', img:'static/images/Index/tuijian-menu/3.jpg'},
                 { id: 4, la: '#', img:'static/images/Index/tuijian-menu/4.webp'},
                 { id: 5, la: '#', img:'static/images/Index/tuijian-menu/5.png'}
            ],
			// 图片索引值
			index: 0,
			timer: 0,
			isBtnShow: false
          }
      },
        	methods: {
			// 自动轮播
			run: function(){
				// 图片自动轮播
				this.timer = setInterval(()=>{
					this.index++;
					if (this.index >= this.imgs.length) {
						this.index = 0;
					}
				},2000)
			},
			// 鼠标移入，停止轮播
			enter: function(){
				// 停止轮播
				clearInterval(this.timer);
			},
			// 鼠标离开，继续轮播
			leave: function(){
				// 继续轮播
				this.run();
			},
			// 鼠标移入数字，直接将移入的索引值赋值给index
			numEnter: function(index){
				this.index = index;
			},
		},
		created: function(){
			/*
			后期再create中会有很多数据的初始化，所以我们不能将所有的初始化放在created中

			解决办法：在methods中定义方法，在created中调用
			*/
			// 图片的自动轮播
			this.run();
		},
		// 小米闪购
		 mounted(){
              var swiper = new Swiper('.swiper-container');



		 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 @import '../../assets/css/base.scss';
*{
	font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}
 /*头部轮播 */
.header{
	width: 100%;
	height:rem(360px);
}
 .swiper {
		position: relative;
		width: 100%;
		height: rem(360px);
	}

	.swiper-image li {
		position: absolute;
		top: 0;
		left: 0;
	}
	.swiper-image li img{
        width: rem(750px);
		height: rem(360px);
	}
	.swiper div {
		position: absolute;
		top: rem(120px);
		width: rem(50px);
		height: rem(100px);
		text-align: center;
		line-height: rem(100px);
		color: #fff;
	}
	.swiper .show {
		display: block;
	}
	.swiper .swiper-index {
		position: absolute;
		left: 50%;
		bottom: rem(20px);
		margin-left: rem(-40px);
	}
	.swiper .swiper-index li{
		float: left;
		width: rem(18px);
		height: rem(18px);
		text-align: center;
		line-height: rem(20px);
		border-radius: 50%;
		margin-left: rem(10px);
		background: rgba(255, 255, 255, 0.3);
	}
	.swiper .swiper-index .active{
		background: rgba(255, 255, 255, 1);
	}

	.fade-leave,.fade-enter-to{
		opacity: 1;
	}

	.fade-leave-active,.fade-enter-active{
		transition: opacity .4s;
	}

	.fade-leave-to,.fade-enter {
		opacity: 0;
	}
	 /*头部轮播 上部分*/ 
	 .menu{
	 	display:flex;
	 	height:rem(158px);
	 	a{  
	 		display: block;
	 		width: 25%;
	 		height:rem(158px);
	 		img{
	 			width: 100%;
	 			height: 100%;
	 		}
	 	}
	 }
	/* 头部轮播 菜单 */
	.header-menu{
		display: flex;
		justify-content: space-between;
		padding-top:rem(20px); 
		padding-bottom:rem(30px); 
		height: rem(530px);
		background:#F5F5F5;
		.left{
			width: rem(372px);
            height: rem(530px);
		}
		img{
			width: 100%;
			height: 100%;
		}
		.right{
			display: flex;
			flex-wrap: wrap;
			align-content:space-between; 
			width: rem(372px);
            height: rem(530px);
		  .top{
		  	  width: rem(372px);
              height: rem(262px);
		  }
		  .bottom{
		  	  width: rem(372px);
              height: rem(262px);
		  }
		}
	}
	/*小米闪购*/
	.mi-go{
		display: block;
		width: 100%;
		height:rem(80px);
	}
	.mi-swiper{
		width: rem(750px);
		height: rem(260px);
		background:red;
    }
	.swiper-container {
      width: rem(750px);
      height: rem(260px);
	}
    
</style>
