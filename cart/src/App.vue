<template>
	<div>
		<!--
         <router-view></router-view>
	      <div>
	       {{count}}
			<router-link to="/home">首页</router-link>
			<router-link to="/center">中兴</router-link>
		  </div> 
       -->
       <div class="list" v-for="(val,index) in  goods.goodsData">
       	<ul>
       		商品名称：{{val.title}}
       		商品价格：{{val.price}}
       		商品数量：{{val.num}}
       		<button @click="$store.commit('reduceGoods', index)">-</button>
       		<input type="text" readonly value="" v-model="val.num" class="num" />
       		<button @click="$store.commit('addGoods', index)">+</button>
       	</ul>
       </div>
       <div>
       	合计：{{total}}
       </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
	data(){
		return {
			msg:'hello  eeeeeeeeeeeee'
		}
	},
	/*
	computed:{
		goods(){
			return this.$store.state.goods;
		}
	},
	*/
	computed:mapGetters({
			goods:'goodslist',
			total:'totalPrice'
		}),
	methods:{
		increment:()=>{
			console.log('666666');
			//this.$store.commit('addGoods', index);
		},
		decrement:()=>{
			console.log('7777777777');
		}
	}
	/*
	computed:mapGetters([
		'count'
	])
	*/
}

</script>

<style>
.num{
	width:15px;
}
</style>