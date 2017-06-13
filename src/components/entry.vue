<template>
	<div class="app-wrapper">
		<pageheader></pageheader>
		<div class="page_content">
			<router-view></router-view>
		</div>
		<pagefooter></pagefooter>
	</div>
</template>
<style scoped>	

</style>

<script>
	import f from './footer.vue'
	import { bus } from '../components/bus'
	import pageheader from '../components/header'
	import pagefooter from '../components/footer'
	export default {
		data(){
			return {
				// 班级列表
				
			}
		},
		components: {
			'pagefooter': pagefooter,
			'pageheader':pageheader
		},
		created: function(){ 


		},
		methods: {
			
		}
	}
</script>
