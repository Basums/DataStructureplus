/*
这是一些取消默认行为的描述
*/
document.oncontextmenu=function(){
	
	var arr_alert=new Array();
	arr_alert=["欢迎进入校园最短路径项目，保护代码，从我做起","本项目采用HTML+CSS+Javascript","代码仅存在本地","再次确定即可退出右键菜单","哈哈，骗你的","再试一次","( •̀ ω •́ )y还是不行","算了不逗你了，再点一次退出"];
	for(i=0;i<8;i++)
	{
		alert(arr_alert[i]);
	}
	return false;
}

	
/*全屏预览*/




function fullScreen(el) {
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
        wscript;
 
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el);
        return;
    }
 
    if(typeof window.ActiveXObject != "undefined") {
        wscript = new ActiveXObject("WScript.Shell");
        if(wscript) {
            wscript.SendKeys("{F11}");
        }
    }
}
var btn = document.getElementById('btn');
		var content = document.getElementById('html');
		btn.onclick = function(){
			fullScreen(content);
		}