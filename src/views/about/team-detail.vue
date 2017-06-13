<template>
	<el-row class='item-row'>
		<el-col class='simple-banner'></el-col>
		<el-col :span='18' :offset='3' style='margin-top:60px;margin-bottom:60px;'>
			<el-col :span='13'>
				<h3 class="profile-name">
					{{profile.name}}<span class="sex">{{profile.sex}}</span>
				</h3>
				<p class="profile-position">{{profile.position}}</p>
				<p class='content'>{{profile.desc}}</p>
			</el-col>
			<el-col :span='11'>
				<img :src='profile.img' />
			</el-col>	
		</el-col>
			
	</el-row>
</template>
<style scoped>
	.profile-name{font-size: 36px;color:#333;}
	.profile-name .sex{font-size: 20px;display: inline-block;margin-left: 10px;}
	.simple-banner{height: 8px;background: #3a89da;}
	.item-row{background: #fff;}
	.content{line-height: 1.8;padding-top: 40px;border-top: 3px solid #ddd;margin-top: 45px;text-align: justify}
	.profile-position{padding: 15px 0;margin:15px 0;font-size: 20px;color:#fff;background: #8eb5de;width: 250px;text-align: center;margin-top:30px;}
</style>
<script>
	export default{
		data(){
			return{
				profile:{
					name:'韩布寒',
					sex:'先生',
					position:'常务副总裁 执行董事',
					desc:'秦力先生自2011年4月起获委任为我们的执行董事兼常务副总经理。其主要工作经历包括：自1997年3月起历任本公司投行业务管理总部常务副总经理、投资理财部总经理、资金营运部总经理、规划管理部总经理、投资部总经理、公司总经理助理、副总经理，2010年5月至2013年8月任广发信德董事长；2006年9月起任广发控股香港董事，2012年5月起任易方达基金董事及自2013年9月起任广东金融高新区股权交易中心有限公司董事长。秦先生于1992年7月取得上海财经大学经济学学士学位，于1995年6月取得位于广州的暨南大学商业经济学硕士学位，于2003年7月取得位于北京的中国人民大学经济学博士学位及于2013年9月在北京完成长江商学院高级管理人员工商管理课程。',
					img:'../../../static/images/team-detail.png',
				}
			}
		},
		created(){
			console.log(this.profile);
		},
		methods:{

		}
	}
</script>