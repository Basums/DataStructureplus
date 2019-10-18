/*
 * 画线函数
 * */


	var canvasDir = document.createElement('canvas');
	var width = 24;
		canvasDir.width = width;
		canvasDir.height = width;
	var context = canvasDir.getContext('2d');
	    context.strokeStyle = 'white';
	    context.lineJoin = 'round';
	    context.lineWidth = 8;
	    context.moveTo(-4, width - 4);
	    context.lineTo(width / 2, 6);
	    context.lineTo(width + 4, width - 4);
	    context.stroke();
	    
function polyline()
{
	map.clearMap();
	var path_normal = new Array();	
	for(i=0;i<=f;i++){
		path_normal[i] = lnglats[arr2[i]];
	}
	/*
	 * 正常路线的路况类型
	 */
	var polyline_normal = new AMap.Polyline({
		path: path_normal,            // 设置线覆盖物路径
		showDir:true,
		dirImg:canvasDir,
		strokeColor: '#3366cc',   // 线颜色
		strokeWeight: 5           // 线宽
	});
	
	/*
	 * 路线样式
	 * */

	/*
	 * 可能拥挤路段的两种路况类型
	 * */
/*	
	var polyline_crowded = new AMap.polyline({
		path: path_iscorwded,            // 设置线覆盖物路径
		showDir:true,
		dirImg:canvasDir,
		strokeColor: '#red',   // 线颜色
		strokeWeight: 5           // 线宽
	});	
	var polyline_uncrowded = new AMap.polyline({
		path: path_iscorwded,            // 设置线覆盖物路径
		showDir:true,
		dirImg:canvasDir,
		strokeColor: '#3366cc',   // 线颜色
		strokeWeight: 5           // 线宽
	});
*/

	/*
	 * 设置起点终点样式
	 * */
	var startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(25, 34),
        // 图标的取图地址
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        // 图标所用图片大小
        imageSize: new AMap.Size(135, 40),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3)
    });
	var endIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        imageSize: new AMap.Size(135, 40),
        imageOffset: new AMap.Pixel(-95, -3)
    });
    var passbyIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
        imageSize: new AMap.Size(25, 34),
    });
    var marker1 = new AMap.Marker({
		position: path_normal[0],
		offset: new AMap.Pixel(-10, -30),
		icon:startIcon,
	 });
	 	marker1.content = '初始点->'+MarkerName[arr2[0]];
    var marker2 = new AMap.Marker({
		position: path_normal[f],
		offset: new AMap.Pixel(-13, -30),
		icon:endIcon,
	 });
		marker2.content = '终止点->'+MarkerName[arr2[f]];
	map.add(marker1);
    map.add(marker2);
    map.add(polyline_normal);
	map.setFitView();
};

var iscrowded_condition = [94,93,17,16,19,20,21,22,23,265,276,2,3,4,130,145,146,303,315,317,329];
function Road_condition(){
	map.clearMap();
	var path_condition1 = new Array();
	/*第一段缓慢路段*/
		path_condition1[0] = lnglats[94];
		path_condition1[1] = lnglats[93];
		path_condition1[2] = lnglats[17];
		path_condition1[3] = lnglats[16];
		path_condition1[4] = lnglats[19];
		path_condition1[5] = lnglats[20];
		path_condition1[6] = lnglats[21];
		path_condition1[7] = lnglats[22];
		path_condition1[8] = lnglats[23];
		path_condition1[9] = lnglats[265];
		path_condition1[10] = lnglats[276];
		
	var path_condition2 = new Array();
	/*第二段缓慢路段*/	
		path_condition2[0] = lnglats[2];
		path_condition2[1] = lnglats[3];
		path_condition2[2] = lnglats[4];		

	var path_condition3 = new Array();
		path_condition3[0] = lnglats[130];
		path_condition3[1] = lnglats[145];
		path_condition3[2] = lnglats[146];	
		
	var path_condition4 = new Array();
		path_condition4[0] = lnglats[303];
		path_condition4[1] = lnglats[315];
		path_condition4[2] = lnglats[317];	
		path_condition4[3] = lnglats[329];
	if(iscrowded_flag == 1){
		var polyline_crowded1 = new AMap.Polyline({
			path: path_condition1,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'red',   // 线颜色
			strokeWeight: 3           // 线宽
		});
		var polyline_crowded2 = new AMap.Polyline({
			path: path_condition2,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'red',   // 线颜色
			strokeWeight: 3           // 线宽
		});		
		var polyline_crowded3 = new AMap.Polyline({
			path: path_condition3,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'red',   // 线颜色
			strokeWeight: 3           // 线宽
		});		
		var polyline_crowded4 = new AMap.Polyline({
			path: path_condition4,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'red',   // 线颜色
			strokeWeight: 3           // 线宽
		});
	}else{
		var polyline_crowded1 = new AMap.Polyline({
		path: path_condition1,            // 设置线覆盖物路径
		showDir:true,
		dirImg:canvasDir,
		strokeColor: 'green',   // 线颜色
		strokeWeight: 3           // 线宽
	});
		var polyline_crowded2 = new AMap.Polyline({
			path: path_condition2,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'green',   // 线颜色
			strokeWeight: 3          // 线宽
		});
		var polyline_crowded3 = new AMap.Polyline({
			path: path_condition3,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'green',   // 线颜色
			strokeWeight: 3           // 线宽
		});
		var polyline_crowded4 = new AMap.Polyline({
			path: path_condition4,            // 设置线覆盖物路径
			showDir:true,
			dirImg:canvasDir,
			strokeColor: 'green',   // 线颜色
			strokeWeight: 3           // 线宽
		});
	}
	map.add(polyline_crowded1);
	map.add(polyline_crowded2);
	map.add(polyline_crowded3);
	map.add(polyline_crowded4);	
	map.setFitView();
}

