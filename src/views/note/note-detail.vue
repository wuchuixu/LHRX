<template>
	<el-row>
		<v-banner :bannerDatas="banners"></v-banner>
		<el-col class='note-detail'>
			<el-col :span='18' :offset='3'>
				<h3 class="title">{{article.title}}</h3>
				<p class='desc'>
					<span>发布时间：{{article.time}}</span>
				</p>
				<p class="content" v-html="article.content"></p>
			</el-col>
		</el-col>
	</el-row>
</template>
<style scoped>
	.note-detail{background: #fff;padding:60px 0;}
	.note-detail .title{font-size: 36px;text-align: center;color:#333;}
	.desc{text-align: center;margin:15px 0;color:#666;font-size: 14px;}
	.content{color: #333;margin-top: 45px;line-height: 30px;}
</style>
<script>
	import vBanner from '../../components/banner.vue'  
	export default{
		data(){
			return{
				banners:[
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:'',index:1}
            	],
            	article:{
            		title:'关于落实执行《非居民金融账户涉税信息尽职调查管理办法》的公告',
            		time:'2017-06-15',
            		content:'尊敬的客户：为了履行金融账户涉税信息自动交换国际义务，规范金融机构对非居民金融账户涉税信息的尽职调查行为，国家税务总局、财政部、中国人民银行、中国银行业监督管理委员会、中国证券监督管理委员会、中国保险监督管理委员会于2017年5月9日发布《非居民金融账户涉税信息尽职调查管理办法》（2017年第14号，以下简称“《办法》”），自2017年7月1日起正式施行。根据《办法》的要求，我司将依法履行非居民金融账户涉税信息尽职调查的义务，了解账户持有人或者有关控制人的税收居民身份，识别非居民金融账户，收集并报送账户相关信息。自2017年7月1日起我司新开户客户，应当真实、及时、准确、完整地向我司提供相关涉税信息，填报并签署《税收居民身份声明文件》，配合完成相关尽职调查工作。2017年7月1日前已开户客户如属于非中国收税居民身份的，请前往开户营业网点进行非居民涉税信息申报。按《办法》相关规定，账户持有人不得隐匿身份及资产信息，对于存在严重违规行为的，有关金融主管部门将依据相关法律、法规对账户持有人进行处罚，涉嫌犯罪的将移送司法机关进行处理。 特此公告。联系方式：全国统一客服电话95575（或您所在地区的开户营业部）'
            	}
			}
		},
		created(){

		},
		methods:{

		},
		components:{
			vBanner
		}
	}
</script>