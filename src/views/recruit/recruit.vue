<template>
	<section class="recuit-wrapper">
		<v-banner :bannerDatas="banners"></v-banner>
		<el-row class="recuit_content1" >
			<el-col :span="18" :offset="3">
				<h2 class="title">
					<span>人才理念</span>
				</h2>
				<el-row :gutter="10">
					<el-col :lg="6" :md="6" :sm="12" :xs="24">
						<div class="icon_linian"><i class="iconfont">&#xe736;</i></div>
						<h3>企业理念</h3>
						<p>企业理念文案编辑</p>
					</el-col>
					<el-col :lg="6" :md="6" :sm="12" :xs="24">
						<div class="icon_linian"><i class="iconfont">&#xe724;</i></div>
						<h3>服务理念</h3>
						<p>服务理念文案编辑</p>
					</el-col>
					<el-col :lg="6" :md="6" :sm="12" :xs="24">
						<div class="icon_linian"><i class="iconfont">&#xe737;</i></div>
						<h3>用人理念</h3>
						<p>用人理念文案编辑</p>
					</el-col>
					<el-col :lg="6" :md="6" :sm="12" :xs="24">
						<div class="icon_linian"><i class="iconfont">&#xe61d;</i></div>
						<h3>人才培训</h3>
						<p>人才培训文案编辑</p>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-row class="recuit_content2" >
			<el-col :span="18" :offset="3">
				<h2 class="title">
					<span>招聘职位</span>
				</h2>
				<el-collapse class="recuit_collapse" v-model="activeName" accordion>
					<el-collapse-item v-for="(item,index) in jobs" :title="item.name" :name="item.index" :key="index">
					  	<div class="recuit_zhize">
					  		<h3>岗位职责：</h3>
					  		<p v-for="(res,idx) in item.res">{{(idx+1)+'.'+res}}</p>
					  	</div>
					  	<div class="recuit_yaoqiu">
					  		<h3>岗位要求：</h3>
					  		<p v-for="(req,idx) in item.req">{{(idx+1)+'.'+req}}</p>
					  	</div>
					</el-collapse-item>
				</el-collapse>
			</el-col>
		</el-row>
		<el-row class="recuit_content3" >
			<el-col :span="18" :offset="3">
				<h2 class="title">
					<span>福利待遇</span>
				</h2>
				<div class="border_box">
					<div class="recuit_daiyu_m">
						<h3>关于我们</h3>
						<p>智富大管家总部，位于深圳市福田金融商业中心区，公司的经营团队由金融管理、互联网、it技术、法律等业界资深专业人士组成，拥有行业领先的风险管控、运营管理、战略发展等实践经验，凭借专业、成熟、严谨的运营管理机制，立志与各大中小微企业共同发展。</p>
						<p>智富大管家诚邀各界精英人士加入，共同打造中国金融服务第一品牌。</p>
					</div>
					<div class="recuit_daiyu_m">
						<h3>福利待遇</h3>
						<p>1、年底双薪并且有年假；</p>
						<p>2、每年1至2次调薪机会；</p>
						<p>3、公司施行股权激励；</p>
						<p>4、和谐的公司氛围，内部晋升机会；</p>
						<p>5、朝九晚六、五天工作制；</p>
						<p>6、下午茶温馨享受；</p>
						<p>7、节假日发放节日礼品、员工生日派送红包和蛋糕；</p>
						<p>8、购买五险一金，国家规定的带薪假期；</p>
						<p>9、旅游基金福利；</p>
					</div>
					<div class="recuit_daiyu_m">
						<h3>联系方式</h3>
						<p>地址：福田区车公庙泰然六路红松大厦A座6B</p>
						<p>联系人：谢先生(13682548753)，胡小姐(15013490081)</p>
						<p>招聘邮箱：hr@eskworld.com</p>
						<p>电话：0755-36378023</p>
					</div>
				</div>
			</el-col>
		</el-row>
	</section>
</template>
<script>
	import vBanner from '../../components/banner.vue'  
    export default {
        data(){
            return {
            	banners:[
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:'',index:1},
            		{src:'../../../static/images/default.jpg',link:'',alt:'',index:2},
            		{src:'../../../static/images/default.jpg',link:'',alt:'',index:3},
            	],
            	activeName:1,
            	jobs:[
            		{ 
            			name:'客户经理',
            			index:1,
            			res:[
            				'通过网络、电话、拜访、会议营销、市场活动等渠道寻找投资意向客户，推广公司投资平台，注册成为公司互联网P2P平台会员，完成业绩目标。',
            				'招揽客户成为公司平台各省市服务网点。',
            				'及时收集并处理客户的反馈意见，维护客户关系，不断为客户提优质的金融服务。'
            			],
            			req:[
            				'男女不限，形象气质良好，口才表达优秀。',
            				'招揽客户成为公司平台各省市服务网点。'
            			]
            		},
            		{ 
            			name:'文案编辑',
            			index:2,
            			res:[
            				'负责公司品牌推广的撰写（与平面设计沟通达到推广效果）。',
            				'负责宣传推广文案及宣传资料文案的撰写。',
            				'负责公司对外媒体和广告软文的撰写。',
            				'定期跟踪行业资讯，撰写行业快讯。',
            				'负责媒体软文和广告资料的收集与整理。',
            				'负责公司官网文字更新。',
            				'负责微信、微博等文章撰写。',
            				'配合其它部门以及领导的其它工作。'
            			],
            			req:[
            				'大专以上，2年文案编辑工作经验，作品优秀者条件可放宽。',
            				'较强的文字功底和理解领悟能力，文笔流畅、文字转化能力强，金融类文案编写能力突出，有创意，有丰富的新媒体运营经验。',
            				'思维灵敏，文案风格多样化，文笔严谨，资深段子手，长能写剧本，短能抖段子，习惯性脑洞大开，嬉笑怒骂皆成文章。',
            				'熟练运用office等办公软件，擅长利用PHOTOSHOP/PPT/PDF表达创意。',
            				'应聘者需提供文字作品。'
            			]
            		}
            	]
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
			vBanner
		}
    }
</script>
<style>
	.recuit-wrapper .title{ 
		width: 100%;
		margin-bottom: 20px;
		font-size: 20px;
		text-align: center;
	}
	.recuit-wrapper .title span{ 
		display: inline-block;
		padding: 0px 20px;
		height: 48px;
		line-height: 48px;
		color: #1296db;
		border:1px solid #1296db;
		border-radius: 48px;
	}
	.recuit-wrapper .el-collapse-item__header{ 
		font-size: 15px;
	}
	.recuit_collapse h3{ 
		font-size: 15px;
	}
	.recuit_collapse p{ 
		padding: 5px 0;
		font-size: 14px;
		text-indent: 2em;
	}
	.page_banner img{ 
		display: block;
		width: 100%;
	}
	.recuit_content2{ 
		padding: 30px 0 40px;
	}
	.recuit_content1,.recuit_content3{ 
		padding: 30px 0 40px;
		background: #fff;
	}
	.border_box{
		padding: 20px;
		border:1px solid #dfe6ec;
	}
	.recuit_daiyu_m h3{
		margin: 10px 0;
		font-size: 16px;
	}
	.recuit_daiyu_m p{
		line-height: 24px;
		text-indent: 2em;
	}
	.icon_linian{
		position: relative;
		height: 80px;
	}
	.icon_linian .iconfont{ 
		left:50%;
		top:0;
		font-size: 60px;
		color: #1296db;
		transform: translateX(-50%);
	}
	.recuit_content1{ 
		text-align: center;
	}
	.recuit_content1 h3{ 
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: bold;
	}
	.recuit_content1 .el-col{ 
		padding: 10px 0;
	}
</style>
