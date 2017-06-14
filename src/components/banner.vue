<template>
	<swiper :options="options" ref="mySwiper" class="pages_banner">
	    <!-- slides -->
	    <swiper-slide v-for="item in bannerDatas">
	    	<template v-if="item.link !== ''">
		    	<a :href="item.link" target="_blank">
		    		<img :src="item.src" :alt="item.alt" />
		    	</a>
	    	</template>
	    	<template v-else>
		    	<img :src="item.src" :alt="item.alt" />
	    	</template>
	    </swiper-slide>
	    <!-- Optional controls -->
    	<template v-if="bannerDatas.length > 1">
	    	<div class="swiper-pagination"  slot="pagination"></div>
	    	<div class="swiper-button-prev" slot="button-prev">
	    		<i class="iconfont">&#xe60e;</i>
	    	</div>
	    	<div class="swiper-button-next" slot="button-next">
	    		<i class="iconfont">&#xe6a8;</i>
	    	</div>
    	</template>
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
	  </swiper>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
	export default {
		data(){
			return{
				
			}
		},
		props:{
			bannerDatas:{
				type:Array,
				default:[]
			},
			options:{ 
				type:Object,
				default:function () {
					return { 
						// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
						// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
						notNextTick: true,
						// swiper configs 所有的配置同swiper官方api配置
						autoplay: 3000,
						direction : 'horizontal',//vertical 垂直
						grabCursor : false,
						setWrapperSize :true,
						autoHeight: true,
						pagination : '.swiper-pagination',
						paginationClickable :true,
						prevButton:'.swiper-button-prev',
						nextButton:'.swiper-button-next',
						// scrollbar:'.swiper-scrollbar',
						mousewheelControl : false,
						observeParents:true,
						// if you need use plugins in the swiper, you can config in here like this
						// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
						debugger: true,
						// swiper callbacks
						// swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
						onTransitionStart(swiper){
						  // console.log(swiper)
						}
					}
				}
			}
		},
		mounted(){
			
		},
		watch:{
			//注意不能使用箭头函数
			swiperOption:function(val,oldVal){

			}
		},
		methods:{
			
		},
		components:{ 
			swiper,  
            swiperSlide  
		}
	}
</script>
<style>
	.pages_banner img{display: block;width: 100%;}
	.pages_banner .iconfont{right:-5px;font-size: 40px;color: #fff;}
	.pages_banner .swiper-button-prev,.pages_banner .swiper-button-next{background-image: none;}
	.pages_banner .swiper-button-prev.swiper-button-disabled{cursor: not-allowed;}
	.pages_banner .swiper-button-next.swiper-button-disabled{cursor: not-allowed;}
	.pages_banner .swiper-pagination-bullet{width: 12px;height: 12px;border-radius: 12px; background: #fff;opacity: 0.5;}
	.pages_banner .swiper-pagination-bullet-active{width: 20px;opacity:1;}
</style>