<template>
	<el-row class="business-wrapper">
		<el-col :sm='24'>
			<v-banner :bannerDatas="banners"></v-banner>
			<!--业务优势-->
			<el-row class='item-row business_ys'>
				<el-col :span='18' :offset='3'>
					<h3 class="title">{{businessYs.title}}</h3>
					<p class="intro-content content">{{businessYs.content}}</p>
					<div>
		  				<el-col class="info_list" :span='8' v-for='(list,index) in businessYs.list' :key='index'>
		  					<div class="img_icon">
		  						<i class='iconfont flag' v-html="list.icon"></i>
		  					</div>
		  					<p>{{list.title}}</p>
		  					<p class="time">{{list.time}}</p>
		  					<p>{{list.desc}}</p>
		  				</el-col>
		  			</div>
					<div class="list_more">
						<a class="btn_more" @click='goDetail'>了解更多</a>	
					</div>
				</el-col>
			</el-row>
			<!--业务公告-->
			<el-row class='item-row business_gg'>
				<el-col :span='18' :offset='3'>
					<h3 class="title">{{businessGg.title}}</h3>
					<el-row class="business_gg_list" :gutter="30">
						<el-col class="business_gg_item" :lg="12" :md="12" :sm="24" :xs="24" v-for="(item,index) in businessGg.list" :key="index">
							<el-row class="business_gg_box">
								<el-col class="business_gg_img" :lg="12" :md="12" :sm="12" :xs="24">
									<img :src="item.img" />
								</el-col>
								<el-col class="business_gg_con" :lg="12" :md="12" :sm="12" :xs="24">
									<i class="sqr"></i>
									<label>{{item.tag}}</label>
									<h3>{{item.title}}</h3>
									<p>{{item.date}}</p>
									<p>{{item.desc}}</p>
								</el-col>
							</el-row>
						</el-col>
					</el-row>
					<div class="list_more">
						<a class="btn_more" @click='goGG'>了解更多</a>	
					</div>
				</el-col>
			</el-row>
			<!--联系我们-->
			<el-row class='item-row business_lx'>
				<el-col :span='18' :offset='3'>
					<h3 class="title">{{businessLx.title}}</h3>
					<el-row>
						<el-col class="business_lx_item" :span='8' v-for="(item,index) in businessLx.list" :key="index">
							<i class="iconfont" v-html="item.icon"></i>
							<p class="con">{{item.content}}</p>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>
<style scoped>
	.flag{font-size: 75px;color:#58a2ef;left:50%;top:25px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}
	.item-row{padding: 60px 0;}
	.business_ys{background: #fff;}
	.business_gg{background: #eaeaea;}
	.business_lx{background: #2a8cc4;color: #fff;}
	.item-row h3{font-size: 50px;text-align: center;margin:0 0 40px;}
	.btn_more{
		-webkit-transition: all ease 0.3s;
		-moz-transition: all ease 0.3s;
		-ms-transition: all ease 0.3s;
	    transition: all ease 0.3s;
	    display: inline-block;
	    margin: 0 auto;
	    width: 8em;
	    height: 3em;
	    line-height: 2.8em;
	    padding: 0 1em;
	    text-align: center;
	    color: #333;
	    border: 2px solid #3a89da;
	    border-radius: 1.5em;
	    font-size: 1.2em;
	    margin-top: 20px;
	    cursor: pointer;
	}
	.btn_more:hover{
	    background: #3a89da;
	    color: #fff;
	}
	.list_more{text-align: center;clear: both;}

	.img_icon,.info_list{text-align: center;}
	.img_icon{position: relative;height: 130px;}
	.info_list p{color: #666;}
	.info_list p.time{color: #666;font-size: 22px;color:#333;margin:10px;}
	.info_list{margin-top: 40px;}
	.content{text-align: justify}
	.intro-content{text-align: center;}
	.business_gg_item{ margin-bottom: 20px;}
	.business_gg_box{ 
		border:1px solid #e0e0e0;
		background: #fff;
		text-align: left;
		cursor: pointer;
		transition: 0.4s;
	}
	.business_gg_box:hover{ 
		background: #f1f1f1;
	}
	.business_gg_box:hover .sqr{ 
		background: #f1f1f1;
	}
	.business_gg_img{ 
		position: relative;
		z-index: 9;
	}
	.business_gg_img img{ 
		display: block;
		width: 100%;
	}
	.business_gg_con{ 
		position: relative;
		padding: 20px;
		z-index: 99;
	}
	.business_gg_con h3{
		height: 48px;
		margin: 10px 0 0; 
		font-size: 18px;
		text-align: left;
		overflow: hidden;
	}
	.business_gg_con label{ 
		display: inline-block;
		padding: 2px 6px;
		font-size: 14px;
		color: #fff;
		background: #8eb5de;
	}
	.business_gg_con p{
		max-height: 38px; 
		font-size: 14px;
		color: #999;
		margin: 10px 0 0; 
		overflow: hidden;
	}
	.sqr{ 
		position: absolute;
		top:40px;
		left:-10px;
		width: 20px;
		height: 20px;
		background: #fff;
		transform: rotateZ(45deg);
		z-index: 100;
		transition: 0.4s;
	}
	@media screen and (max-width: 768px){ 
		.sqr{display: none;}
	}
	.business_lx_item{ 
		position: relative;
		padding-top: 80px;
	}
	.business_lx_item .iconfont{ 
		top:0;
		left:50%;
		font-size: 60px;
		color: #abcdef;
		transform: translateX(-50%);
		text-align: center;
	}
	.business_lx_item .con{font-size: 18px;text-align: center;}
</style>
<script>
	import vBanner from '../../components/banner.vue'
	export default{
		data(){
			return {
				banners:[
            		{src:'../../../static/images/business_banner.jpg',link:'',alt:''}
            	],
				businessYs:{
					title:'业务优势',
					content:'我们建立了强大的销售网络，依托超400人的优秀的专业团队，通过稳健有效的经营管理，保持行业持续领先的骄人业绩',
					list:[
						{title:'优秀保荐机构',time:'2011年',desc:'深圳证劵交易所',icon:'&#xe681;'},
						{title:'中国区优秀投行评选',time:'2015年',desc:'证劵时报',icon:'&#xe63a;'},
						{title:'新财富中国最佳投行',time:'2012-2015年',desc:'新财富',icon:'&#xe605;'},
					]
				},
				businessGg:{
					title:'业务公告',
					list:[
						{ 
							img:'../../../static/images/info.jpg',
							tag:'投资银行',
							title:'沪宁股份IPO项目网下投资者报备系统入...',
							date:'2017-06-09',
							desc:'请投资者点击以下链接 http://store.gf.com.cn/gfw/html/ipo/login'
						},
						{ 
							img:'../../../static/images/info.jpg',
							tag:'投资银行',
							title:'广发证券关于日辰食品辅导工作总结报告',
							date:'2017-06-09',
							desc:''
						}
					]
				},
				businessLx:{
					title:'联系我们',
					list:[
						{ 
							icon:'&#xe606;',
							content:`地址：${WEB_LHRX.address}`
						},
						{ 
							icon:'&#xe6ed;',
							content:`电话：${WEB_LHRX.tel}`
						},
						{ 
							icon:'&#xe838;',
							content:`邮箱：${WEB_LHRX.email}`
						},
					]
				}
			}
		},
		create(){

		},
		methods:{
			goDetail(){
				this.$router.push({path:'/pages/intro-detail'});
			},
			goGG(){
				this.$router.push({path:'/pages/industry'});
			}
		},
		components:{ 
			vBanner
		}
	}
</script>