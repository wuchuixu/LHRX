<template>
	<div class="gotop"></div>
</template>
<style scoped> 
	.gotop{position: fixed;bottom: 5px; height: 50px;width:50px;right: 10px;cursor: pointer;z-index: 9999;color:#fff;background: url('../../static/images/gotop.png')}
	.gotop:hover{background: url('../../static/images/gotop-hover.png') no-repeat !important;}
	.gotop.fixed_top{position: absolute;right:10px;bottom: 258px;}
</style>
<script>	
	export default {
		data(){
			return {
				
				
			}
		},
		created: function(){ 


		},
		methods: {
			
		}
	}
</script>