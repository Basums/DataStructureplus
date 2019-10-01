
function polyline()
{
	map.clearMap();
	path3=new Array();
	for(i=0;i<=f;i++)
	{
		path3[i] = lnglats[arr2[i]];
	}
	var polyline3 = new AMap.Polyline({
	path: path3,            // 设置线覆盖物路径
	showDir:true,
	dirImg:canvasDir,
	strokeColor: '#3366cc',   // 线颜色
	strokeWeight: 5           // 线宽
	});
 	var canvasDir = document.createElement('canvas')
	var width = 24;
	canvasDir.width = width;
	canvasDir.height = width;
	var context = canvasDir.getContext('2d');
    context.strokeStyle = 'red';
    context.lineJoin = 'round';
    context.lineWidth = 8;
    context.moveTo(-4, width - 4);
    context.lineTo(width / 2, 6);
    context.lineTo(width + 4, width - 4);
    context.stroke();
    
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
		position: path3[0],
		 offset: new AMap.Pixel(-10, -30),
		 icon:startIcon,
	 });
	 marker1.content = '初始点->'+MarkerName[arr2[0]];
     marker1.on('click', markerClick);
	 for(i=1;i<f;i++)
	 {
	 	var marker= new AMap.Marker({
		position: path3[i],
		 offset: new AMap.Pixel(-13, -30),
		 icon:passbyIcon,
	 	});
	 	marker.content = '途径点' + (i)+'->'+MarkerName[arr2[i]];
        marker.on('click', markerClick);
	  map.add(marker);
	 }
    var marker2 = new AMap.Marker({
		position: path3[f],
		 offset: new AMap.Pixel(-13, -30),
		 icon:endIcon,
	 });
	 marker2.content = '终止点->'+MarkerName[arr2[f]];
     marker2.on('click', markerClick);	 
    map.add(marker1);
    map.add(marker2);
    map.add(polyline3);
	map.setFitView();
	}