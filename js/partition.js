/*
 * 主要是写运动框架里面分区显示的部分；
 */

var Trabtn_show = document.getElementById("trabtn_show");
var Trabtn_unshow = document.getElementById("trabtn_unshow");

 Trabtn_show.onclick = function(){
	Road_condition();
	alert('现在'+iscrowded+'拥挤时刻'+','+'各易拥挤路段路况信息显示');
 }
 
 Trabtn_unshow.onclick = function(){
 	alert("路况信息已关闭");
 	map.clearMap();
 }
