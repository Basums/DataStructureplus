    var map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:16, //初始化地图层级
		mapStyle:'fresh',
        center: [121.393401,31.315957] //初始化地图中心点
    });
	map.clearMap();  // 清除地图覆盖物
	 var lnglats = [[121.389294,31.316158],[121.38836,31.315745],[121.389594,31.319586],[121.391429,31.319302],[121.392244,31.316891],[121.390608,31.31586],[121.389192,31.316932],[121.388736,31.317716],[121.388688,31.318871],[121.392705,31.318115],[121.394272,31.318023],[121.397421,31.318376],[121.395881,31.318261],[121.395393,31.31954],[121.39469,31.319636],[121.39388,31.319403],[121.392541,31.319676],[121.396742,31.319369],[121.395462,31.317821],[121.387639,31.315192],[121.39038,31.312722],[121.389044,31.312222],[121.389382,31.311255],[121.389516,31.310682],[121.39082,31.310934],[121.395943,31.311938],[121.393588,31.312924],[121.391899,31.313982],[121.391652,31.317163],[121.393492,31.31692],[121.394195,31.317007],[121.393841,31.316521],[121.394597,31.316572],[121.394098,31.316109],[121.394951,31.316288],[121.395708,31.316274],[121.393857,31.315298],[121.39486,31.314871],[121.395648,31.315215],[121.395214,31.314496],[121.395863,31.314757],[121.39589,31.313643],[121.3967,31.313895],[121.397006,31.313377],[121.39538,31.314088],[121.396287,31.314413],[121.39391,31.314409],[121.394903,31.313322],[121.398138,31.317626],[121.399441,31.318309],[121.399393,31.317406],[121.399366,31.31698],[121.399404,31.316508],[121.399645,31.314166],[121.398138,31.314216],[121.398915,31.31269],];
	 var MarkerName=['益新楼','西外环路交叉口','北门交叉口','尔美楼','图书馆','泮池北路交叉口','S1','山明楼','网球馆','U楼交叉口','音乐学院交叉口','南陈路','体育馆正门','体育馆','训练馆','游泳馆','风雨操场','足球场','伟长楼','西门','南外环交叉口','后勤基建大楼','南区','吾鑫食堂','上大附中','东南门','美院','泮池环岛路','档案室','G','GJ','F','FJ','E','EJ','水秀','J','D','DJ','C','CJ','A','AJ','行政楼','B','BJ','名人广场','服务中心','永福庵','材料楼','计算机楼','翔鹰大楼','机自楼','钱伟长图书馆','东区西门','经管大楼',]
	 var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
    for (var i = 0, marker; i < lnglats.length; i++) {
        var marker = new AMap.Marker({
            position: lnglats[i],
            map: map,
        });
        marker.content = 'V' + (i)+' '+MarkerName[i];
        marker.on('click', markerClick);
        marker.emit('click', {target: marker});
    }
    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
    map.setFitView();