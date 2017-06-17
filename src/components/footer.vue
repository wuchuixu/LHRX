<template>
	<footer id='footer'>
		<el-col class='foot-top'>
			<el-col :span='18' :offset='3'>
				<el-col :span="13" class='tips'>
					<h3>温馨提示：</h3>
					<p>请妥善保管客户编号、资金/股东账号、登陆密码、手机动态密码等私密信息。</p>
					<p>请通过广发证券官方渠道进行访问，切勿使用不明链接，谨防上当受骗。</p>
					<p>请保障个人电脑、移动设备等安全，及时升级杀毒软件，尽量不要在网吧等公共场所进行登陆操作。</p>
				</el-col>
				<el-col :span='4' class='ewm'>
					<img src='../../static/images/ft-ewm.jpg' />
					<p>官方微信公众号</p>
					<p>gf95575</p>
				</el-col>
				<el-col :span='7' class='kf'>
					<p class="kf-title">全国统一客服热线</p>
					<p class="trade-day">交易日8:30-21:00</p>
					<div class="tel">
						<el-col :span='4'><img src='../../static/images/tel.png' /></el-col>
						<el-col :span='20'><p>25678931</p></el-col>							
					</div>
				</el-col>
			</el-col>
		</el-col>
        <el-col class="copyright">
            <span>粤ICP备11070729号</span>
            <span>广发证券股份有限公司版权所有</span>
            <span>Copyright © 2000-<em id="curYear">2017</em> All Rights Reserved</span>
        </el-col>
	</footer>
</template>
<style scoped>
	footer{overflow: hidden;clear: both;}
</style>
<script>
	export default {
		data(){
			return {
				
			}
		}		
	}	
</script>
