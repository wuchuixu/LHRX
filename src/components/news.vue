<template>
	<!--公告动态-->
	<el-row>
		<el-col :span="18" :offset='3' class='case note-row'>
	  		<el-col @click.native='goInfoDetail' class='case_list' :gutter='8' :span='8' v-for='(item,index) in caseList' :key='index'>	 
	  			<div class="content">
	  				<span class='list_type'>{{item.type}}</span>
	  				<p class="title">{{item.title}}</p>
	  				<p class="time">{{item.time}}</p>
	  				<p class="desc">{{item.content}}</p>
	  			</div>
	  		</el-col>
	  	</el-col>
	</el-row>
</template>
<style scoped>
	.case_list{cursor: pointer;}
	.note-row{background: #fff;margin-bottom:60px;margin-top:60px;position: relative;}
	.title{font-size: 30px;color:#333;margin:40px 0 15px 0;font-family: Microsoft YaHei;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.img_wrap,.case_list{position: relative;overflow: hidden;}
	.img_wrap img{width:100%}
	.content{padding: 15px 15px 80px 15px;}
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
	.content .time,.content .desc{color:#999;}
	.content .desc{margin-top: 30px;font-size: 14px;padding-bottom: 20px;}
	.case_list:after{
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
	.case_list:hover:after{
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
	.case_list .img_wrap img{height: 100%;}
	.case_list:after{width: -webkit-calc( 100% - 30px );}

	.case_list:last-child:after{width: 100%;}
	.case_list .content{height:390px;}

	.list_type{display: inline-block;padding: 5px 18px;background: #8eb5de;color:#fff;font-size: 14px;}
	.case_list:nth-child(2) .content{background: #2a8cc4;color:#fff;}
	.case_list:nth-child(2) .content .list_type{background: #056da8;}
	.case_list:nth-child(2) .title{color:#fff;}
	.case_list:nth-child(2) .time,.case_list:nth-child(2) .desc{color:#aed4ea;}
</style>
<script>
	export default {
		data(){
			return {
				caseList:[
					{type:'行业动态',title:'周末交易系统暂停服务公告',content:'周末交易系统暂停服务公告',time:'2017-06-16'},
					{type:'财经动态',title:'关于落实执行《非居民金融账户涉税信息尽职',content:'关于落实执行《非居民金融账户涉税信息尽职',time:'2017-06-16'},
					{type:'公司动态',title:'关于落实执行《非居民金融账户涉税信息尽职',content:'关于行使&quot;14广发02&quot;次级债券发行人赎',time:'2017-06-16'}
				]

			}
		},
		components: {
			
		},
		mounted: function(){ 
		},
		methods: {
			goInfoDetail(){
				this.$router.push({path:'/pages/note-detail'});
			}	
		}
	}
</script>
