<template>
	<div class="app-wrapper">
		<pageheader id='pageheader'></pageheader>
		<div class="page_content" id='page_content'>
			<router-view></router-view>
		</div>
		<gotop v-show='showTop' @click.native='goTop' :class='isFixed?"fixed_top":""'></gotop>
		<news v-show='hasNews'></news>
		<pagefooter></pagefooter>
	</div>
</template>
<script>
	import pageheader from '../components/header'
	import pagefooter from '../components/footer'
	import gotop from '../components/gotop'
	import news from '../components/news'
	export default {
		data(){
			return {
				// 班级列表
				showTop:false,
				scroll:'',
				isFixed:false,
				footerHeight:0,
				headerHeight:0,
				//无news的页面：
				hasNews:false,
				notContainNews:[
				    '/index',
				    '/recruit',
				    '/contact',
				    '/pages/firm',
				    '/pages/finance',
				    '/pages/industry'
				]
			}
		},
		components: {
			pagefooter,
			pageheader,
			gotop,
			news
		},
		mounted: function(){ 
			const self = this;
			self.footerHeight = document.getElementById('footer').offsetHeight;
			self.headerHeight = document.getElementById('pageheader').offsetHeight;
			window.addEventListener('scroll', self.handleScroll);

			self.$router.afterEach(function(){					
				if(self.notContainNews.indexOf(self.$route.fullPath) != -1){
					self.hasNews = false;
				}else{
					self.hasNews = true;
				}
			});	

			
		},
		created(){
			const self = this;
			self.$nextTick(()=>{ 
				if(self.notContainNews.indexOf(self.$route.fullPath) != -1){
					self.hasNews = false;
				}else{
					self.hasNews = true;
				}
			});
		},
		methods: {
			handleScroll(){
				const self = this;
				self.scroll = document.body.scrollTop;				
				
				if(document.documentElement.scrollHeight <= (document.documentElement.clientHeight + self.scroll+self.footerHeight) ) {
                	self.isFixed = true;
            	}else{
            		self.isFixed = false;
            	}    

            	
            	self.showTop = self.scroll > self.headerHeight ? true : false;

				
			},
			goTop(){
				var isScrolling = false;
				if(isScrolling){ 
					return
				}else{ 
					isScrolling = true;
					var timer  = setInterval(function(){ 
						document.body.scrollTop -= 100;
						if(document.body.scrollTop <= 0){ 
							isScrolling = false;
							clearInterval(timer);
						}
					},20);
				}
			}
		}
	}
</script>
