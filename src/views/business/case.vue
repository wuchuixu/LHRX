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
					<ul class="case_list">
						<li v-for="item in cases">
							<el-row :gutter="20">
								<el-col :span="6" :xs="24" class="case_list_img">
									<img :src="item.img.src" :alt="item.img.alt" />
								</el-col>
								<el-col :span="18" :xs="24" class="case_list_con">
									<h3>{{item.title}}</h3>
									<p>{{item.content}}</p>
								</el-col>
							</el-row>
						</li>
					</ul>
					<el-pagination layout="prev, pager, next" :page-size="pagesize" :total="pagetotal"></el-pagination>
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
            		{src:'../../../static/images/default.jpg',link:'https://www.baidu.com/',alt:''}
            	],
            	activeType:1,
            	tabHeaders:[
            		{name:'股权融资案例',type:1},
            		{name:'股权融资案例',type:2},
            		{name:'股权融资案例',type:3},
            	],
            	cases:[
            		{ 
            			img:{src:'../../../static/images/info.jpg',alt:''},
            			title:'国信证券股份有限公司 IPO项目',
            			content:'国信证券IPO项目募集资金总额为69.96亿元，是2014年A股市场融资规模最大的IPO项目，也是近年来规模最大的证券公司IPO项目，荣获“第八届新财富中国最佳投行”最佳IPO项目。国信证券成功股票并上市，使公司资本实力得到快速提升，有望加快推动各项资本中介业务的良好发展，治理结构也有望进一步规范，同时为后续融资拓宽了渠道。'
            		},
            		{ 
            			img:{src:'../../../static/images/business.jpg',alt:''},
            			title:'康美药业股份有限公司 非公开发行优先股项目',
            			content:'康美药业（603366），2014年12月上海主板优先股，保荐机构和主承销商，募集资金30亿.康美药业是我司保荐和重点打造的医药行业标杆案例，目前市值已从IPO上市时的不足10亿元增长至超过300亿元，并入选上证50指数，成为医药板块的龙头企业。2014年12月，康美药业非公开发行优先股项目在广发投行的努力下如期完成发行，成为国内第一批成功发行的优先股案例，也是第一单A股市场非银行类优先股项目。康美药业（603366），2014年12月上海主板优先股，保荐机构和主承销商，募集资金30亿.康美药业是我司保荐和重点打造的医药行业标杆案例，目前市值已从IPO上市时的不足10亿元增长至超过300亿元，并入选上证50指数，成为医药板块的龙头企业。2014年12月，康美药业非公开发行优先股项目在广发投行的努力下如期完成发行，成为国内第一批成功发行的优先股案例，也是第一单A股市场非银行类优先股项目。康美药业（603366），2014年12月上海主板优先股，保荐机构和主承销商，募集资金30亿.康美药业是我司保荐和重点打造的医药行业标杆案例，目前市值已从IPO上市时的不足10亿元增长至超过300亿元，并入选上证50指数，成为医药板块的龙头企业。2014年12月，康美药业非公开发行优先股项目在广发投行的努力下如期完成发行，成为国内第一批成功发行的优先股案例，也是第一单A股市场非银行类优先股项目。'
            		},
            		{ 
            			img:{src:'../../../static/images/info.jpg',alt:''},
            			title:'广东宏大爆破股份有限公司非公开发行项目',
            			content:'宏大爆破（002683），2014年9月再融资（非公开发行），保荐机构和主承销商，募集资金6.00亿元。宏大爆破非公开发行项目是资本市场上第一单高管集体通过资产管理计划间接参与定向增发的股权激励新模式。该项目作为国有企业股权激励新模式得到了广东省国资委的高度认同，并将其作为国有企业混合所有制改革的模式之一向系统内国有企业进行推广。宏大爆破非公开发行项目的成功在市场上引起了巨大的反响，多家上市公司纷纷主动要求广发证券为其策划股权激励或员工持股计划，为公司争取股权激励业务市场份额领先的地位打下了坚实的基础。'
            		}
            	],
            	pagetotal:3,
            	pagenum:0,
            	pagesize:10
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
        		console.log(row);
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
	.case_content .el-pagination{
		margin-top: 20px; 
		text-align: center;
	}
	.case_list{ 
		border-top: 1px solid #dfe6ec;
	}
	.case_list li{ 
		padding: 20px;
		border-bottom: 1px solid #dfe6ec;
	}
	.case_list_img img{ 
		width: 100%;
	}
	.case_list_con h3{ 
		margin-bottom: 10px;
		font-size: 22px;
	}
	.case_list_con p{ 
		line-height: 24px;
		font-size: 16px;
		color: #666;
	}
	.tab_header{ 
		padding: 10px 0;
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
