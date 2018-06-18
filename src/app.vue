<template>
	<div>
	    
		  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>

        <div class="footer">
		<router-link to="/home">首页</router-link>
		<router-link to="/center">中兴</router-link>

		</div> 
	</div>
</template>

<script>

export default{
	data(){
      return {
          transitionName:''
      }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > 0){
                    if( to.meta.index < from.meta.index){
                        this.transitionName = 'slide-right';
                    }else{
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0 && from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }
    }
  }
}

</script>

<style>
*{
	margin:0;
	padding:0;
}
body{
	background:#efefef;
}
.footer{
	position: fixed;
    left:0;
    bottom:0; 
}
.footer a{
    
	font-size:38px;
	height:50px;
}


* {
        margin: 0;
        padding: 0;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        font-family: arial;
        color: #333;
        -webkit-user-select: none;
    }

    html {
        font-family: arail;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 1;
        font-size: 20px;
        height:100%;
        overflow-x: hidden;
    }
    body{
        position: relative;
        overflow-x: hidden;
        background: #f0f2f5;
        min-height:100%;
        display: flex;
        flex-direction: column;
    }
    #app{
        display: flex;
        flex:1;
        flex-direction: column;
        background: #f0f2f5;
    }
    img {
        display: block;
    }
    ul,ol{
        list-style: none;
    }
    a{
        text-decoration: none;
        outline: none;
    }
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }


</style>