<template>
	<el-row class='item-row'>
		<el-col>
			<el-col class="banner">
				<v-banner :bannerDatas="banners"></v-banner>						
			</el-col>
			<el-col :span='16' :offset='4' class='about_txt'>
				<img :src="txtImg" alt="">
				<p class="content">
					{{aboutUsTxt}}
				</p>
			</el-col>
		</el-col>
	</el-row>
</template>
<style scoped>
	.content{color: #333;font-size: 14px;line-height: 1.5;}
	.about_txt img{text-align: center;margin: 60px auto 30px;}
	.item-row {margin-bottom: 60px;}
</style>
<script>
	import vBanner from '../../components/banner.vue'
	export default{
		data(){
			return{
				banners:[
            		{src:'../../../static/images/cultrue_detail.jpg',link:'',alt:''}
            	],
				banner:'../../../static/images/cultrue_detail.jpg',
				txtImg:'../../../static/images/intro-inner-page.jpg',
				aboutUsTxt:'企业文化广发证券成立于1991年，是国内首批综合类证券公司，先后于2010年和2015年分别在深圳证券交易所及香港联合交易所主板上市（股票代码：000776.SZ，1776.HK）。公司被誉为资本市场上的“博士军团”，秉承“知识图强，求实奉献；客户至上，合作共赢”的核心价值观，贯彻执行“稳健经营，持续创新；绩效导向，协同高效”的经营管理理念，在竞争激烈、复杂多变的行业环境中努力开拓、锐意进取，经受住了多次行业重大变化的考验。并以卓越的经营业绩、完善的风险管理及优质的服务成功实现持续稳健发展，多年来是中国资本市场最具影响力的证券公司之一。'
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