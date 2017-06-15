<template>
	<el-row class="gg_content">
		<el-col :span="16" :offset="5">
			<div class="tab_header">
				<ul>
					<li :class="{'active':activeType == item.type}" v-for="(item,index) in tabHeaders" @click="tabChange(item)">
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="tab_body">
				<ul class="gg_list">
					<li v-for="item in listData">
						<i class="dot"></i>
						<span class="title">{{item.title}}</span>
						<span class="date">{{item.date}}</span>
					</li>
				</ul>
				<el-pagination layout="prev, pager, next" :page-size="pagesize" :total="pagetotal"></el-pagination>
			</div>
		</el-col>
	</el-row>
</template>
<script> 
	export default {
		data(){
			return{
            	tabHeaders:[
            		{name:'行业动态',type:1},
            		{name:'财经动态',type:2},
            		{name:'公司动态',type:3},
            	]
			}
		},
		props:{
			listData:{
				type:Array,
				default:[]
			},
			activeType:{
				type:Number,
				default:1
			},
			pagenum:{
				type:Number,
				default:0
			},
			pagesize:{
				type:Number,
				default:10
			},
			pagetotal:{
				type:Number,
				default:0
			},
		},
		mounted(){
			
		},
		watch:{
			//注意不能使用箭头函数
			listData:function(val,oldVal){

			}
		},
		methods:{
			tabChange(row){ 
				const self = this;
				if(row.type == self.activeType){
					return 
				}else{ 
					if(row.type == 1){ 
						//跳转行业动态
						self.activeType = 1;
						self.$router.push({path:'/pages/industry'});
					}else if(row.type == 2){ 
						//跳转财经动态
						self.activeType = 2;
						self.$router.push({path:'/pages/finance'});
					}else if(row.type == 3){ 
						//跳转公司动态
						self.activeType = 3;
						self.$router.push({path:'/pages/firm'});
					}
				}
			}
		}
	}
</script>
<style>
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
	.gg_content .el-pagination{
		margin-top: 20px; 
		text-align: center;
	}
	.gg_list{ 
		padding-top: 20px;
	}
	.gg_list li{ 
		padding: 0 20px;
	}
	.gg_list li:nth-child(2n+1){ 
		background: #f0f4f8;
	}
	.gg_list li{ 
		font-size: 0;
		cursor: pointer;
	}
	.gg_list li:hover{ 
		background: #bed5ec;
	}
	.gg_list li span{ 
		display: inline-block;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		vertical-align: middle;
	}
	.gg_list li .title{ 
		max-width: 70%;
		padding: 0 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		white-space: nowrap;
	}
	.gg_list li .dot{ 
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #3a89da;
		vertical-align: middle;
	}
	.gg_list li .date{ 
		float: right;
	}
</style>