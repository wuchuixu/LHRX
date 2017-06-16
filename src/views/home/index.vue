<template>
	<el-row>
		<el-col :sm='24'>
			<el-col class="about-wrapper">
				<el-col>
					<v-banner :bannerDatas="banners"></v-banner>
				</el-col>
				<el-col class="home_content">
					<!--关于我们-->
					<el-row>
					  	<el-col :span="18" :offset='3' class='about_us item-row' @click.native='goAboutUs'>
				  			<el-col :span='8' class='img_wrap'>
					  			<img :src="aboutUs.img" alt="">
					  		</el-col>
					  		<el-col :span='16' class='content'>
					  			<h3 class="title" >{{aboutUs.title}}</h3>
					  			<p>{{aboutUs.content}}</p>
					  		</el-col>						  		
					  	</el-col>
					</el-row>

					<!--动态-->
					<el-row>
					  	<el-col :span="24" class='info item-row'>
					  		<el-col :span='18' :offset='3'>
						  		<el-col :span='12'>
						  			<el-col :span='10' class='img_wrap'>
							  			<img :src="industryInfo.img" alt="">
							  		</el-col>
							  		<el-col :span='14' class='item_list content'>
							  			<h3 class="title">{{industryInfo.title}}</h3>
							  			<p class="list_title" @click='goNote(list.id)' v-for='(list,index) in industryInfo.list' :key='index'>{{list.title}}</p>
							  			<a class="more" @click=''>更多<i class="iconfont more_icon">&#xe6a7;</i></a>
							  		</el-col>
						  		</el-col>

						  		<el-col :span='12'>
						  			<el-col :span='10' class='img_wrap'>
							  			<img :src="companyInfo.img" alt="">
							  		</el-col>
							  		<el-col :span='14' class='item_list content'>
							  			<h3 class="title">{{companyInfo.title}}</h3>
							  			<p class="list_title" @click='goNote(list.id)' v-for='(list,index) in companyInfo.list' :key='index'>
							  				{{list.title}}
							  			</p>
							  			<a class="more">更多<i class="iconfont more_icon">&#xe6a7;</i></a>
							  		</el-col>
						  		</el-col>
					  		</el-col>
					  	</el-col>
					</el-row>

					<!--股权投资-->
					<el-row>
					  	<el-col :span="18" :offset='3' class='stock item-row'>
					  		<el-col :span='8' class='img_wrap'>
					  			<img :src="stockInfo.img" alt="">
					  		</el-col>
					  		<el-col :span='16' class='content'>
					  			<h3 class="title">{{stockInfo.title}}</h3>
					  			<p>{{stockInfo.content}}</p>
					  			
					  		</el-col>
					  	</el-col>
					</el-row>

					<!--案例展示-->
					<el-row>
						<el-col :span="18" :offset='3' class='case item-row'>
					  		<el-col class='case_list' :gutter='8' :span='8' v-for='(item,index) in caseList' :key='index'>
					  			<div class="img_wrap">
					  				<img :src='item.img' alt="">
					  			</div>
					  			<div class="content">
					  				<p class="title">{{item.title}}</p>
					  				<p>{{item.content}}</p>
					  			</div>
					  		</el-col>
					  	</el-col>
					</el-row>
				</el-col>
			</el-col>
		</el-col>
	</el-row>
</template>
<style scoped>
	.about_us,.stock,.case_list{cursor: pointer;}
	.item-row{background: #fff;margin-top:60px;position: relative;}
	.title{font-size: 30px;color:#333;margin:55px 0 30px 0;font-family: Microsoft YaHei;}
	.img_wrap,.case_list{position: relative;overflow: hidden;}
	.img_wrap img{width:100%}
	.content{padding: 15px;}
	/*.content p{line-height: 24px;}*/
	.img_wrap:after{
		position: absolute;
	    content: ' ';
	    width: 0px;
	    height: 0px;
	    right: 0;
	    top: 35px;
	    border-width: 20px 18px;
	    border-style: solid;
	    border-color: transparent #fff transparent transparent;
	}
	.about_us:after,.stock:after,.case_list:after{
		    -webkit-transition: background-color 120ms linear;
		    -moz-transition: background-color 120ms linear;
		    -ms-transition: background-color 120ms linear;
		    transition: background-color 120ms linear;
		    background-color: transparent;
		    content: "";
		    height: 100%;
		    left: 0;
		    position: absolute;
		    top: 0;
		    visibility: inherit;
		    width: 100%;
	}
	.about_us:hover:after,.stock:hover:after,.case_list:hover:after{
		background-color: rgba(0,0,0,.1);
	}
	.info{background: #fff;padding: 60px 0;}
	.info .img_wrap:after{border-width: 14px 13px;top:15px;}
	.info .title{margin:0 0 15px 0;}
	.list_title{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 1;position: relative;cursor: pointer;padding:6px 25px;}
	.list_title:before{display: inline-block;width: 5px;height: 5px;content: '';background: #50bfff;border-radius: 100%;position: absolute;left:10px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);}
	.list_title:hover{background: #f2f2f2;}
	.item_list{position: relative;padding-bottom: 60px;}
	.more{position: absolute;left:24px;bottom: 15px;width: 100px;cursor: pointer;color:#0096ff;}
	.more_icon{left: 30px;top:12px;color:#0096ff}
	.home_content>div:last-child{margin-bottom: 60px;}

	.case .img_wrap:after{
		left:10%;
		top:145px;
		border-width: 20px 18px;
	    border-style: solid;
	    border-color:  transparent transparent #fff  transparent;
	}
	.case{background: none;}
	.case .content{background: #fff;}
	.case_list{padding-right: 30px;}
	.case_list:last-child{padding-right: 0;}
	.case_list .img_wrap{height: 180px;overflow: hidden;}
	.case_list .title{margin-top: 10px;margin-bottom: 10px;}
	.case_list .img_wrap img{height: 100%;}
	.case_list:after{width: -webkit-calc( 100% - 30px );}

	.case_list:last-child:after{width: 100%;}
	.case_list .content{height: 200px;}
</style>

<script>
	import vBanner from '../../components/banner.vue'
	export default{
		data(){
			return{
				banners:[
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:'',index:1},
            		{src:'../../../static/images/default.jpg',link:'',alt:'',index:2},
            		{src:'../../../static/images/default.jpg',link:'',alt:'',index:3},
            	],
				aboutUs:{
					img:'../../../static/images/about.jpg',
					title:'公司简介',
					content:'广发证券成立于1991年，是国内首批综合类证券公司，先后于2010年和2015年分别在深圳证券交易所及香港联合交易所主板上市（股票代码：000776.SZ，1776.HK）。公司被誉为资本市场上的“博士军团”，秉承“知识图强，求实奉献；客户至上，合作共赢”的核心价值观，贯彻执行“稳健经营，持续创新；绩效导向，协同高效”的经营管理理念，在竞争激烈、复杂多变的行业环境中努力开拓、锐意进取，经受住了多次行业重大变化的考验。并以卓越的经营业绩、完善的风险管理及优质的服务成功实现持续稳健发展，多年来是中国资本市场最具影响力的证券公司之一。'
				},
				industryInfo:{
					img:'../../../static/images/business.jpg',
					title:'行业动态',
					list:[
						{id:'1',title:'周末交易系统暂停服务通告',content:''},
						{id:'2',title:'关于网上交易至强版软件停止服务的公告关于网上交易至强版软件停止服务的公告',content:''},
						{id:'3',title:'关于“歌尔转债”提前赎回提醒',content:''},
						{id:'4',title:'新都终止上市进入退市整理期的风险公告',content:''},
						{id:'5',title:'周末交易系统暂停服务公告',content:''},

					]
				},
				companyInfo:{
					img:'../../../static/images/news.jpg',
					title:'公司动态',
					list:[
						{id:'1',title:'周末交易系统暂停服务通告',content:''},
						{id:'2',title:'关于网上交易至强版软件停止服务的公告关于网上交易至强版软件停止服务的公告',content:''},
						{id:'3',title:'关于“歌尔转债”提前赎回提醒',content:''},
						{id:'4',title:'新都终止上市进入退市整理期的风险公告',content:''},
						{id:'5',title:'周末交易系统暂停服务公告',content:''},
					]
				},
				stockInfo:{
					img:'../../../static/images/stock.jpg',
					title:'股权投资',
					content:'融资融券交易，是指客户向证券公司提供担保物，借入资金买入上市证券（融资交易）或借入上市证券并卖出（融券交易）的行为。与普通交易相比，融资融券交易为客户提供了新的交易工具，让客户在操作更加灵活之余还能更好地规避市场风险。'
				},
				caseList:[
					{img:'../../../static/images/case2.jpg',title:'案例01',content:'周末交易系统暂停服务公告周末交易系统暂停服务公告周末交易系统暂停服务公告'},
					{img:'../../../static/images/case2.jpg',title:'案例02',content:'周末交易系统暂停服务公告'},
					{img:'../../../static/images/case3.jpg',title:'案例03',content:'周末交易系统暂停服务公告'}
				]

			}
		},
		created(){
		},
		methods:{
			goAboutUs(){
				const self = this;
				self.$router.push({path:'/pages/intro-detail'});
			},
			goNote(id){
				const self = this;
				self.$router.push({path:'/pages/note'});
			},
			goBusiness(){
				const self = this;
				self.$router.push({path:'/pages/busness'});
			}
		},
		components:{ 
			vBanner
		}
	}	
</script>