<template>
	<div>
        {{count}}
        home

        <button @click="increment">+5</button>
        <button @click="decrement">-3</button>
	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default{
	data(){
		return {
			msg:'hello  eeeeeeeeeeeee'
		}
	},
	computed:mapGetters([
		'count'
	]),
	methods:mapActions([
		'increment',
		'decrement'
	])
	/*
	methods:{
		increment: () => {
			//console.log('234');
			this.$store.dispatch('increment');
		},
		decrement: ()=>{
			//console.log('123');
			this.$store.dispatch('decrement');
		}
	}*/
	/*
	computed:mapGetters([
			'count'
		])
	*/
	/*
	computed:{
		
		count(){
			return this.$store.state.count;
		}
	}
	*/
}

</script>

<style>

</style>