<template>
	<section class="contact-wrapper">
		<v-banner :bannerDatas="banners"></v-banner>
		<el-row class="contact_content" >
			<el-col :span="18" :offset="3">
				<h2>公司总部</h2>
				<p>地址：深圳市南山区乌石头路8号天明科技大厦1201室</p>
				<p>邮编：518000</p>
				<p>交通：公交201路，B607路，81路，101路，226路，233路，237路，334路，36路，B786路</p>
				<p>联系电话：0755-26910347(周一至周五9:00-18:00)</p>
				<p>客服邮箱：kefu@eskworld.com</p>
			</el-col>
			<el-col :span="18" :offset="3" style="margin-top:20px;">
				<div style="width:100%;height:400px;border:#ccc solid 1px;" id="dituContent"></div>
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
            		{src:'../../../static/images/default.jpg',link:'',alt:''}
            	]
            }
        },
        created(){ 
        	const self = this;
        	self.$nextTick(()=>{ 
        		self.initMap();
        	});
        },
        methods:{
        	//创建和初始化地图函数：
	        initMap(){
	        	const self = this;
	        	self.createMap();//创建地图
	        	self.setMapEvent();//设置地图事件
	        	self.addMapControl();//向地图添加控件
	        	self.addMapOverlay();//向地图添加覆盖物
	        },
            //创建地图函数：
            createMap(){
                var map = new BMap.Map("dituContent");
				map.centerAndZoom(new BMap.Point(113.956952, 22.560364), 17);
                window.map = map;//将map变量存储在全局

            },
            //地图事件设置函数：
            setMapEvent(){
                map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
                map.enableScrollWheelZoom();//启用地图滚轮放大缩小
                map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
                map.enableKeyboard();//启用键盘上下左右键移动地图
            },
            addClickHandler(target, window) {
            	target.addEventListener("click", function() {
            		target.openInfoWindow(window);
            	});
            },
            addMapOverlay() {
            	const self = this;
            	var markers = [ {
            		content : "",
            		title : "乌石头路8号天明科技大厦1201室",
            		imageOffset : {
            			width : -46,
            			height : -21
            		},
            		position : {
            			lat : 22.560364,
            			lng : 113.956952
            		}
            	} ];
            	for (var index = 0; index < markers.length; index++) {
            		var point = new BMap.Point(markers[index].position.lng,
            				markers[index].position.lat);
            		var marker = new BMap.Marker(
            				point,
            				{
            					icon : new BMap.Icon(
            							"http://api.map.baidu.com/lbsapi/createmap/images/icon.png",
            							new BMap.Size(20, 25), {
            								imageOffset : new BMap.Size(
            										markers[index].imageOffset.width,
            										markers[index].imageOffset.height)
            							})
            				});
            		var label = new BMap.Label(markers[index].title, {
            			offset : new BMap.Size(25, 5)
            		});
            		var opts = {
            			width : 200,
            			title : markers[index].title,
            			enableMessage : false
            		};
            		var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
            		// marker.setLabel(label);
            		self.addClickHandler(marker, infoWindow);
            		map.addOverlay(marker);
            	}
            },
            //地图控件添加函数：
            addMapControl(){
                //向地图中添加缩放控件
	        	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_SMALL});
	        	map.addControl(ctrl_nav);
	                //向地图中添加缩略图控件
	        	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
	        	map.addControl(ctrl_ove);
	                //向地图中添加比例尺控件
	        	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	        	map.addControl(ctrl_sca);
            }
	    },
	    components:{ 
			vBanner
		}
    }
</script>
<style>
	.contact-wrapper{ 
		
	}
	.contact_content{ 
		padding: 60px 0 100px;
		background: #fff;
	}
	.contact-wrapper h2{ 
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: bold;
	}
	.contact-wrapper p{ 
		padding: 5px 0;
	}
	.iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
    .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
</style>
