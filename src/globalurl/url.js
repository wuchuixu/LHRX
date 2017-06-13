var host = {
	'localIp': 'http://192.168.8.66:8080/',
	'localImgIp': 'http://192.168.8.66:8090/91hxwkf/',
	'zsIp':''
}

var urls = {
	'getArticleLists':'bat/cgi-bin/getArticleLists.do',//type=bat_zszc&start=0&end=10
	'getArticleInfo':'bat/cgi-bin/getArticleInfo.do',//articleId=128,
    'getLqjgInfo':'bat/cgi-bin/getLqjgInfo',//bmlsh=10911702&dlmm=111111
}
export default {
	host: host,
	url: urls
}