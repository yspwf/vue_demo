<template>
	<div>
		{{count}}
        center
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
	methods:mapActions(
	      [
	        //'reviseTodo', // 将 `this.reviseTodo()` 映射为 `this.$store.dispatch('reviseTodo')
	        'increment',
	        'decrement'
	      ]
	    )
    /*
		increment: () => {
		   //console.log('1111');
		   this.$store.dispatch('increment');
		},
		decrement: () => {
			//console.log('22222222222');
			this.$store.dispatch('decrement');
		}
		*/
	
	
}

</script>

<style>

</style>