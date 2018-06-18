import Vue from 'vue';
import App from './app.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from './home.vue';
import Center from './center.vue';

const routes = [
	{
		path:"/home",
		meta:{index:0},
		component: Home
	},{
		path:"/center",
		meta:{index:1},
		component: Center
	}
];



/*const goods = { template: '<p>goods</p>' };
const ratings = { template: '<p>ratings</p>' };
const seller = { template: '<p>seller</p>' };*/
// 方法二：import引入路由组件
/*import home from './home.vue';
import center from './center.vue';

// 然后定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [
  { path: '/home', component: home },
  { path: '/center', component: center }
];*/



const router = new VueRouter({
	mode:'history',
	routes
});


new Vue({
	el:'#app',
	router,
	template: '<App/>',
	components: { App }
	//render:h=>h(App)
});