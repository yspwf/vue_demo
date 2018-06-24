import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Vuex from 'vuex';
Vue.use(Vuex);


import Home from './page/Home.vue';
import Center from './page/Center.vue';
const routes = [
	{
		path:'/home',
		component:Home
	},
	{
		path:'/center',
		component:Center
	}
];


const router = new VueRouter({
	mode:'history',
	routes
});


/*const store = new Vuex.Store({
	state:{
		count:0
	},
	getters:{
		count: state =>  state.count
	},
	mutations:{
		increment(state){
			return state.count++;
		},
		decrement(state){
			return state.count--;
		}
	},
	actions:{
		increment(context){
			context.commit('increment');
		},
		decrement(context){
			context.commit('decrement');
		}
	}
});*/


const store = new Vuex.Store({
	state:{
		goods:{
			num:0,
			total:0,
			goodsData: [
	            {
	                id: '1',
	                title: '好吃的苹果',
	                price: 8.00,
	                image: 'https://www.shangdian.com/static/pingguo.jpg',
	                num: 1
	            },
	            {
	                id: '2',
	                title: '美味的香蕉',
	                price: 5.00,
	                image: 'https://www.shangdian.com/static/xiangjiao.jpg',
	                num: 1
	            }
	        ]
		}
		
	},
	getters:{
		goodslist: (state)=>{
			return state.goods;
		},
		totalNum: (state)=>{
			let all = 0;
			state.goods.goodsData.forEach((value, index)=>{
				all += value.num;
			});
			return all;
		},
		totalPrice: (state)=>{
			let allPrice = 0;
			state.goods.goodsData.forEach((value, index)=>{
				allPrice += value.num*value.price;
			});
			return allPrice.toFixed(2);
		}
	},
	mutations:{
		
		addGoods:(state, index)=>{
			state.goods.goodsData[index].num ++;
			//this.commit('resetResult');
			
		},
		reduceGoods: (state, index)=>{
			state.goods.goodsData[index].num--;
			if(state.goods.goodsData[index].num<=1){
				state.goods.goodsData[index].num = 1;
			}
			
			//this.$store.commit('resetResult');
		}
	},
	actions:{

	}
});


new Vue({
	el:"#app",
	//router,
	store,
	template: '<App/>',
	components: { App }
});