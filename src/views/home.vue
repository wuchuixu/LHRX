<template>
	<div class="app-wrapper">
		<pageheader id='pageheader'></pageheader>
		<div class="page_content" id='page_content'>
			<router-view></router-view>
		</div>
		<gotop v-show='showTop' @click.native='goTop' :class='isFixed?"fixed_top":""'></gotop>
		<pagefooter></pagefooter>
	</div>
</template>
<script>
	import pageheader from '../components/header'
	import pagefooter from '../components/footer'
	import gotop from '../components/gotop'
	export default {
		data(){
			return {
				// 班级列表
				showTop:false,
				scroll:'',
				isFixed:false,
				footerHeight:0,
				headerHeight:0
			}
		},
		components: {
			pagefooter,
			pageheader,
			gotop
		},
		mounted: function(){ 
			const self = this;
			self.footerHeight = document.getElementById('footer').offsetHeight;
			self.headerHeight = document.getElementById('pageheader').offsetHeight;
			window.addEventListener('scroll', self.handleScroll)
		},
		methods: {
			handleScroll(){
				const self = this;
				self.scroll = document.body.scrollTop;				
				
				if(document.documentElement.scrollHeight <= (document.documentElement.clientHeight + self.scroll+self.footerHeight) ) {
                	console.log("Touch_Buttom!");
                	self.isFixed = true;
            	}else{
            		self.isFixed = false;
            	}    

            	
            	self.showTop = self.scroll > self.headerHeight ? true : false;

				
			},
			goTop(){
				document.body.scrollTop = 0;
			}
		}
	}
</script>
