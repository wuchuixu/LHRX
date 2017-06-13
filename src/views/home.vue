<template>
	<div class="app-wrapper">
		<pageheader></pageheader>
		<div class="page_content">
			<router-view></router-view>
		</div>
		<pagefooter></pagefooter>
	</div>
</template>

<script>
	import pageheader from '../components/header'
	import pagefooter from '../components/footer'
	export default {
		data(){
			return {
				// 班级列表
				
			}
		},
		components: {
			pagefooter,
			pageheader
		},
		created: function(){ 


		},
		methods: {
			
		}
	}
</script>
