<template>
	<section class="gg-wrapper">
		<v-banner :bannerDatas="banners"></v-banner>
		<div class="gg-main">
			<v-list :listData="list" :pagenum="pagenum" :pagesize="pagesize" :pagetotal="pagetotal" :activeType="activeType"></v-list>
		</div>
	</section>
</template>
<script>
	import vBanner from '../../components/banner.vue'  
	import vList from '../../components/list.vue'  
    export default {
        data(){
            return {
            	banners:[
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:''}
            	],
            	list:[
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示1',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示2',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示3',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示4',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示5',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示6',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示7',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示8',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示9',
            			date:'2017-06-09'
            		},
            		{ 
            			title:'华脉科技IPO项目网下投资者报备系统入口及重要提示10',
            			date:'2017-06-09'
            		},
            	],
            	activeType:1,
            	pagenum:0,
            	pagesize:10,
            	pagetotal:4
            }
        },
        created(){ 
        	const self = this;
        	self.$nextTick(()=>{ 
        		
        	});
        },
        methods:{
        	
	    },
	    components:{ 
			vBanner,
			vList
		}
    }
</script>
<style>
	.gg-main{ 
		padding: 20px 0 100px;
		background: #fff;
	}
</style>
