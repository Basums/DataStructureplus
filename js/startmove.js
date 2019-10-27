
/*
 * 这是一个完美运动框架
 * 用来让我的副选择框能够运动
 * */
function getStyle(obj,attr){
            return getComputedStyle ? getComputedStyle(obj,false)[attr] : obj.currentStyle[attr];
        }
function startMove(obj,json,fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bStop = true;
                for(attr in json){
                    // 1. 取得当前的值（可以是widht，height，opacity等的值）
                    var objAttr = 0;
                    if(attr == "opacity"){
                        objAttr = Math.round(parseFloat(getStyle(obj,attr))*100);
                    }else{
                        objAttr = parseInt(getStyle(obj,attr));
                    }
                    // 2.计算运动速度
                    var iSpeed = (json[attr] -objAttr)/10;
                        iSpeed = iSpeed>0 ?Math.ceil(iSpeed):Math.floor(iSpeed);
                    // 3. 检测所有运动是否到达目标
                    if(objAttr != json[attr]){
                        bStop = false;
                    }
                    if(attr == "opacity"){
                        obj.style.filter = 'alpha(opacity:'+(objAttr+iSpeed)+')';
                        obj.style.opacity = (objAttr+iSpeed)/100;
                    }else{
                        obj.style[attr] =  objAttr+iSpeed+'px';// 需要又.属性名的形式改成[]
                    }
                }
                if(bStop){ // 表示所有运动都到达目标值
                    clearInterval(obj.timer);
                    if(fn){
                        fn();
                    }
                }
            },30);
        };

var OBtn4 = document.getElementById("btn4");
var ODiv3 = document.getElementById("Partition_check_box");
var ODiv4 = document.getElementById("Partition_full");
var OBtn5 = document.getElementById("trabtn_show");
var OBtn6 = document.getElementById("trabtn_unshow");
var ODiv0 = document.getElementById("div0");




var OBtn_path = document.getElementById("btn_path");
var OBtn_search = document.getElementById("btn_search");
var OPath = document.getElementById("path");
var OSearch = document.getElementById("fuzzy_searchbox");
window.onload = function(){
	OBtn4.onclick = function(){
		if(OBtn4.value == ">>"){
			startMove(ODiv3,{width:120,height:180,opacity:100},function(){
				OBtn4.value = "<<"
				ODiv4.style.display = "block";
				OBtn5.style.display = "block";
				OBtn6.style.display = "block";
			});

		}else{
			startMove(ODiv3,{width:120,height:180,opacity:100},function(){
				OBtn5.style.display = "none";
				OBtn6.style.display = "none";
				ODiv4.style.display = "none";				
			});
			setTimeout("back()","100");  //100毫秒后执行test()函数，只执行一次。
		}
	};
	
	OBtn_path.onclick = function(){
		if(OBtn_path.value == "path"){
				OSearch.style.display = "none";
				OBtn_search.value = "search";		
				OBtn_search.title = "点击即可显示输入区域";
				
				OPath.style.display = "block";
				OBtn_path.value = "👆";		
				OBtn_path.title = "再次点击即可隐藏";
		}else{
			OSearch.style.display = "none";
			OBtn_search.value = "search";		
			OBtn_search.title = "点击即可显示输入区域";		
			
			OPath.style.display = "none";
			OBtn_path.value = "path";		
			OBtn_path.title = "点击即可显示输入区域";
		}
	};
	
	OBtn_search.onclick = function(){
		if(OBtn_search.value == "search"){
				OPath.style.display = "none";
				OBtn_path.value = "path";		
				OBtn_path.title = "点击即可显示输入区域";
				
				OSearch.style.display = "block";
				OBtn_search.value = "👆";		
				OBtn_search.title = "再次点击即可隐藏";
		}else{
			OPath.style.display = "none";
			OBtn_path.value = "path";		
			OBtn_path.title = "点击即可显示输入区域";
			
			OSearch.style.display = "none";
			OBtn_search.value = "search";		
			OBtn_search.title = "点击即可显示输入区域";
		};
	}
	
	
	
	
};
function back(){
	startMove(ODiv3,{width:30,height:20,opacity:100},function(){
	OBtn4.value = ">>"
	});
};