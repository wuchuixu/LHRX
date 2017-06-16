<template>
	<section class="case-wrapper">
		<v-banner :bannerDatas="banners"></v-banner>
		<el-row class="case_content">
			<el-col :span="16" :offset="5">
				<div class="tab_header">
					<ul>
						<li :class="{'active':activeType == item.type}" v-for="(item,index) in tabHeaders" @click="tabChange(item)">
							<span>{{item.name}}</span>
						</li>
					</ul>
				</div>
				<div class="tab_body">
					<el-row :gutter="20" class="stock_c_top">
						<el-col :span="6" :xs="24" class="stock_c_tleft">
							<i class="iconfont" v-html="curStock.icon"></i>
							<h3>{{curStock.cname}}</h3>
							<span>{{curStock.ename}}</span>
						</el-col>
						<el-col :span="18" :xs="24" class="stock_c_tRight">
							<p>{{curStock.hInfo}}</p>
						</el-col>
					</el-row>
					<el-row class="stock_c_steps">
						<el-col>
							<p v-html="curStock.steps"></p>
						</el-col>
					</el-row>
					<el-row class="stock_c_main">
						<el-col>
							<p v-html="curStock.mcontent"></p>
						</el-col>
					</el-row>
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
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:'',index:1}
            	],
            	activeType:1,
            	tabHeaders:[
            		{name:'股权融资',type:1},
            		{name:'债权融资',type:2},
            		{name:'兼并收购',type:3}
            	],
            	curStock:{
            		icon:'&#xe60d;', 
            		cname:'股权融资',
            		ename:'EQUITY',
            		hInfo:'卓越的客户服务是投行业务发展的基石，我们通过深入调研，为客户制订发展战略，科学运用资本市场工具实现客户长远、持续、高速发展。其中，金发科技、康美药业、武钢股份、湖北能源等上市公司均是广发的长期客户，部分客户更是通过参股广发证券或子公司，建立起以资本为纽带的战略伙伴关系。未来，我司将继续践行“投行创造价值”的理念，伴随企业共同成长。 投资者具有战略合作关系。涵盖上市公司、风险投资公司、高净值个人，该类投资者将为项目提供了更符合市场趋势的定价依据。',
            		steps:'公司完成股权融资类承销项目49个，排名行业第3；募集资金总额为512.5亿元，排名行业第5。其中，IPO主承销家数14， 排名行业第2。',
            		mcontent:'卓越的客户服务是投行业务发展的基石，我们通过深入调研，为客户制订发展战略，科学运用资本市场工具实现客户长远、持续、高速发展。其中，金发科技、康美药业、武钢股份、湖北能源等上市公司均是广发的长期客户，部分客户更是通过参股广发证券或子公司，建立起以资本为纽带的战略伙伴关系。未来，我司将继续践行“投行创造价值”的理念，伴随企业共同成长。 投资者具有战略合作关系。涵盖上市公司、风险投资公司、高净值个人，该类投资者将为项目提供了更符合市场趋势的定价依据。卓越的客户服务是投行业务发展的基石，我们通过深入调研，为客户制订发展战略，科学运用资本市场工具实现客户长远、持续、高速发展。其中，金发科技、康美药业、武钢股份、湖北能源等上市公司均是广发的长期客户，部分客户更是通过参股广发证券或子公司，建立起以资本为纽带的战略伙伴关系。未来，我司将继续践行“投行创造价值”的理念，伴随企业共同成长。 投资者具有战略合作关系。涵盖上市公司、风险投资公司、高净值个人，该类投资者将为项目提供了更符合市场趋势的定价依据。'
            	}
            }
        },
        created(){ 
        	const self = this;
        	self.$nextTick(()=>{ 
        		
        	});
        },
        methods:{
        	tabChange(row){ 
        		const self = this;
        		if(self.activeType = row.type){ 
        			return
        		}
        		self.activeType = row.type;
        	}
	    },
	    components:{ 
			vBanner
		}
    }
</script>
<style>
	.case_content{ 
		padding: 40px 0;
		background: #fff;
	}
	.stock_c_tleft{ 
		position: relative;
		padding-top: 120px;
		text-align: center;
	}
	.stock_c_tleft .iconfont{ 
		top:0;
		left:50%;
		transform: translateX(-50%);
		font-size: 100px;
		color: #3a89da;
	}
	.stock_c_tleft h3{ 
		margin-bottom:4px;
		font-size: 18px;
	}
	.stock_c_tleft span{ 
		color: #999;
	}
	.stock_c_tRight{ 
		padding: 10px 0;
	}
	.stock_c_tRight p{ 
		line-height: 26px;
		font-size: 16px;
	}
	.stock_c_steps{ 
		margin: 20px 0;
		padding: 20px;
		background: #e5eef7;
	}
	.stock_c_main{ 
		padding: 20px 0 100px;
		line-height: 24px;
	}
	.tab_header{ 
		padding: 10px 0 20px;
	}
	.tab_header li{ 
		display: inline-block;
		height: 40px;
		margin: 10px 15px;
		padding: 0px 15px;
		line-height: 40px;
		border:1px solid #3a89da;
		border-radius: 40px;
		cursor: pointer;
		transition: 0.4s;
	}
	.tab_header li.active,.tab_header li:hover{ 
		color: #fff;
		background: #3a89da;
	}
</style>
