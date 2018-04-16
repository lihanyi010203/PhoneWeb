<template>
  <div class="User">
  	<!-- 头部header -->
  	<a href="#">
	      <div class="header">
	      	  <div class="center">
	      	  	  <img src="../../static/images/User/2.png" alt="">
	      	  	  <div>登录/注册</div>
	      	  </div>
	      </div>
      </a>
     <!-- 头部order -->
     <div class="order">
     	  <div class="cite">我的订单</div>
     	  <div class="allcite">
	     	  <a href="#">全部订单</a>
		      <div class="iconfont icon-jiantou"></div>
	      </div>
     </div>
     <!-- secationfirst -->
     <div class="secationfirst">
     	 <div>
     	 	<a href="#">
     	 		<span class="iconfont icon-qianbao"></span>
     	 		<p>待付款</p>
     	 	</a>
     	 </div>
      	 <div>
     	 	<a href="#">
     	 		<span class="iconfont icon-che"></span>
     	 		<p>待付款</p>
     	 	</a>
     	 </div>
      	 <div>
     	 	<a href="#">
     	 		<span class="iconfont icon-icon--"></span>
     	 		<p>待付款</p>
     	 	</a>
     	 </div>
     </div>
      <!-- secationsecond -->
      <div class="secationsecond">
      </div>
      <!-- secationthird -->
      <div class="secationthird">
      	   <a href="#">
      	  		<img src="../../static/images/User/3.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">会员福利</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
      <!-- secationforth -->
      <div class="secationforth">
      	   <a href="#">
      	  		<img src="../../static/images/User/4.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">我的优惠</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
       <!-- secationsecond -->
      <div class="secationsecond">
      </div>
      <!-- secationthird -->
      <div class="secationthird">
      	   <a href="#">
      	  		<img src="../../static/images/User/5.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">服务中心</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
      <!-- secationforth -->
      <div class="secationforth">
      	   <a href="#">
      	  		<img src="../../static/images/User/6.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">小米之家</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
       <!-- secationsecond -->
      <div class="secationsecond">
      </div>
      <!-- secationforth -->
      <div class="secationforth">
      	   <a href="#">
      	  		<img src="../../static/images/User/7.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">F码通道</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
      <!-- secationsecond -->
      <div class="secationsecond">
      </div>
      <!-- secationforth -->
      <div class="secationforth">
      	   <a href="#">
      	  		<img src="../../static/images/User/8.png" alt="">
      	  		<div class="right">
      	  			<div class="Left">设置</div>
      	  			<div class="iconfont icon-jiantou"></div>
      	  		</div>
      	  </a>
      </div>
      <!-- footer -->
      <div class="footer"></div>
  </div>
</template>
<script> 
//引入公共的底部
export default {
  name: 'User',
  data () {
    return {
      msg:'我的'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/base.scss';
*{
	font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}
 /*头部header*/
 html{
 	background-color: #F37D0F;
 }
 .header{
 	    display: flex;
 	    align-items: center;
 	    width: 100%;
        height: rem(170px);
        background-color: #F37D0F;
        background-image: url(../../static/images/User/1.png);
        background-size: 80%;
        .center{
        	display: flex;
        	align-items: center;
        	width: 100%;
        	height: rem(100px);
        	img{
        		height: rem(100px);
        		margin-left: rem(36px);
        	}
        	div{
        	   margin-left: rem(14px);
               font-size: rem(28px);
               color: white;
        	}
        }
   }
   /*头部order*/
   .order{
   	    display: flex;
   	    justify-content: space-between;
   	    align-items: center;
   	    width: 100%;
   	    height: rem(80px);
   	 .cite{
   	 	font-size: rem(30px);
   	 	margin-left: rem(30px); 
   	 }
   	 .allcite{
   	 	display: flex;
   	 	align-items: center;
   	 	width: 22%;
   	 	height: rem(80px);
   	 	a{
   	 		font-size: rem(24px);
   	 	}
   	 	.icon-jiantou{
   	 		font-size: rem(50px);
   	 		color:#ABABAB;
   	 	}
   	 }
   }
   /*secationfirst*/
   .secationfirst{
   	    display: flex;
   	    width:100%;
        height: rem(174px);
        border-top:rem(2px) solid #F5F5F5;
        div{ 
        	 display: flex;
        	 justify-content: center;
             width: 33.33%;
        	 height: rem(174px);
        	 a{ 
        	 	display: inline-block;
        	 	text-align: center;
        	    height: rem(174px);
        	   span{
        	   	line-height:rem(100px);
        	   	font-size:rem(50px); 
        	   }
        	   p{
        	   	font-size:rem(26px);
        	   }
        	 }
        }
   }
   /*secationsecond*/
   .secationsecond{
   	 height: rem(20px);
   	 background:#F5F5F5;
   }
    /*secationthird*/
     .secationthird{
 		width: 100%;
     	height: rem(108px);
     	a{  
     		width: 100%;
	     	height: rem(108px);
	     	display: flex;
	     	align-items:center;
     	    justify-content: space-between;

	     	img{
	     		margin-left:  rem(34px);
	     		margin-right:  rem(34px);
	     		width: rem(48px);
	     		height: rem(42px);
	     	}
	     	.right{
	     		display: flex;
	     		align-items:center;
	     		justify-content: space-between;
	     		width:rem(660px);
	     		height: rem(106px);
	     		border-bottom:  rem(2px) solid #F5F5F5;
	     		.Left{
	     			font-size: rem(30px);
	     		}
	     		.icon-jiantou{
	     			font-size: rem(56px);
	     		}
	     	}
     	}
     }
     /*secationforth*/
     .secationforth{
 		width: 100%;
     	height: rem(108px);
     	a{  
     		width: 100%;
	     	height: rem(108px);
	     	display: flex;
	     	align-items:center;
     	    justify-content: space-between;

	     	img{
	     		margin-left:  rem(34px);
	     		margin-right:  rem(34px);
	     		width: rem(48px);
	     		height: rem(42px);
	     	}
	     	.right{
	     		display: flex;
	     		align-items:center;
	     		justify-content: space-between;
	     		width:rem(660px);
	     		height: rem(108px);
	     		.Left{
	     			font-size: rem(30px);
	     		}
	     		.icon-jiantou{
	     			font-size: rem(56px);
	     		}
	     	}
     	}
     }
     .footer{
     	height: rem(90px);
     	background:#F5F5F5;
     }
</style>
