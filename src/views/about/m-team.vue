<template>
	<el-row class=''>
		<el-col>
			<v-banner :bannerDatas="banners"></v-banner>						
			<!--管理团队-->
			<el-row class='item-row manage_team'>
				<el-col :span='18' :offset='3' class='manage_wrap'>
					<!-- <h3 class="title">{{manageTeam.title}}</h3> -->
					<div>
						<el-col class='list_item pull' :span='8' v-for='(list,index) in manageTeam.list' :key='index' @click.native='goTeamDetail'>
							<div class="inner">
								<div class="img_wrap">
									<img :src='list.img' />
								</div>
								<div class="list_desc">
									<h4>{{list.name}}<span>{{list.sex}}</span></h4>
									<p class='list_position'>{{list.position}}</p>
									<a class="more">了解更多 <i class="iconfont more_icon">&#xe6a7;</i></a>
								</div>
							</div>
						</el-col>
					</div>	
				</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>
<style scoped>
	.content{color: #333;font-size: 14px;line-height: 1.5;}
	.about_txt img{text-align: center;margin: 60px auto 30px auto;}
	.item-row{padding: 60px 0;background: #fff;}
	.manage_team{background: #fff;}
	.manage_team .list_item{float: left;}
	.list_item:after{display: inline-block;clear: both;content: '';}
	.content{color: #666;text-align: center;}
	.manage_wrap .img_wrap{height: 350px;}
	.manage_wrap .list_item:first-child,.manage_wrap .list_item:nth-child(2) {width: 50%;}
	.manage_wrap .list_item:first-child .img_wrap,.manage_wrap .list_item:nth-child(2) .img_wrap{height: 420px;}
	.manage_wrap .list_item:nth-child(2){padding-right: 0;}
	.item-row{padding: 60px 0;background: #fff;}
	.company_wrap{background: #fff;}
	.company_team,.item-row{background: #fff;/*border-bottom: 30px solid #ebebeb;*/}
	.item-row h3{font-size: 50px;text-align: center;margin:0 0 60px 0;}
	.company_team h3,.company_cultrue h3{margin-bottom: 20px;}
	.company_wrap .desc{font-size: 16px;text-align: center;color:#666;}
	.list_item{box-sizing: border-box;padding-right: 30px;cursor: pointer;}
	.list_item:last-child{padding-right: 0;}
	.img_wrap{position: relative;overflow: hidden;height: 420px;}
	.img_wrap img{position: absolute;right: 0;top:0;}
	.inner{position: relative;background:#ebebeb;margin-bottom: 15px;}
	.inner:after{
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
	.inner:hover:after{background-color: rgba(0,0,0,.1);}
	.list_desc{position: absolute;top:130px;left: 30px;height: 50%;}
	.list_desc h4{font-size: 30px;color:#333;}
	.list_desc h4 span{font-size: 16px;display: inline-block;margin-left: 5px;}
	.list_position{font-size: 16px;margin-top: 15px;color:#666;}
	.more{position: absolute;left:0;bottom: 65px;width: 100px;cursor: pointer;color:#0096ff;}
	.more_icon{left: 60px;top:12px;color:#0096ff}
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

	.manage_team{background: #fff;}
	.manage_team .list_item{float: left;}
	.list_item:after{display: inline-block;clear: both;content: '';}
	.content{color: #666;text-align: center;}
	.manage_wrap .img_wrap{height: 350px;}
	.manage_wrap .list_item:first-child,.manage_wrap .list_item:nth-child(2) {width: 50%;}
	.manage_wrap .list_item:first-child .img_wrap,.manage_wrap .list_item:nth-child(2) .img_wrap{height: 420px;}
	.manage_wrap .list_item:nth-child(2),.manage_wrap .list_item:nth-child(5),.manage_wrap .list_item:nth-child(8){padding-right: 0;}
	.img_icon,.info_list{text-align: center;}
	.img_icon{position: relative;height: 130px;}
	.img_icon img{position: absolute;left: 50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%);}
	.info_list p{color: #666;}
	.info_list p.time{color: #666;font-size: 22px;color:#333;margin:10px;}
	.info_list{margin-top: 40px;}
	.company_team .btn_more{margin-top: 45px;}

</style>
<script>
	import vBanner from '../../components/banner.vue'
	export default{
		data(){
			return{
				banners:[
            		{src:'../../../static/images/team_banner.jpg',link:'',alt:''}
            	],
				txtImg:'../../../static/images/intro-inner-page.jpg',
				aboutUsTxt:'广发证券成立于1991年，是国内首批综合类证券公司，先后于2010年和2015年分别在深圳证券交易所及香港联合交易所主板上市（股票代码：000776.SZ，1776.HK）。公司被誉为资本市场上的“博士军团”，秉承“知识图强，求实奉献；客户至上，合作共赢”的核心价值观，贯彻执行“稳健经营，持续创新；绩效导向，协同高效”的经营管理理念，在竞争激烈、复杂多变的行业环境中努力开拓、锐意进取，经受住了多次行业重大变化的考验。并以卓越的经营业绩、完善的风险管理及优质的服务成功实现持续稳健发展，多年来是中国资本市场最具影响力的证券公司之一。',
				manageTeam:{
					title:'管理团队',
					content:'',
					list:[
						{id:'1',name:'郭小明',sex:'先生',img:'../../../static/images/team1.png',desc:'',position:'董事长兼执行董事长'},
						{id:'2',name:'韩布寒',sex:'先生',img:'../../../static/images/team2.png',desc:'',position:'总裁兼执行董事'},
						{id:'3',name:'韩布寒',sex:'先生',img:'../../../static/images/team3.png',desc:'',position:'总裁兼执行董事'},
						{id:'4',name:'韩布寒',sex:'先生',img:'../../../static/images/team4.png',desc:'',position:'总裁兼执行董事'},
						{id:'5',name:'韩布寒',sex:'先生',img:'../../../static/images/team5.png',desc:'',position:'总裁兼执行董事'},
						{id:'6',name:'韩布寒',sex:'先生',img:'../../../static/images/team6.png',desc:'',position:'总裁兼执行董事'},
						{id:'7',name:'韩布寒',sex:'先生',img:'../../../static/images/team7.png',desc:'',position:'总裁兼执行董事'},
						{id:'8',name:'韩布寒',sex:'先生',img:'../../../static/images/team8.png',desc:'',position:'总裁兼执行董事'},
						{id:'9',name:'韩布寒',sex:'先生',img:'../../../static/images/team9.png',desc:'',position:'总裁兼执行董事'},
						{id:'10',name:'韩布寒',sex:'先生',img:'../../../static/images/team10.png',desc:'',position:'总裁兼执行董事'},
						{id:'11',name:'韩布寒',sex:'先生',img:'../../../static/images/team11.png',desc:'',position:'总裁兼执行董事'},
					]
				},
			}
		},
		created(){

		},
		methods:{
			goTeamDetail(){
				this.$router.push({path:'/pages/team-detail'});
			}
		},
		components:{ 
			vBanner
		}
	}
</script>