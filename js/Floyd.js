	var arr1;
	var arr2;
	var b;
	var c;
	var f,p;
	var begin_d;
	var end_d;
	var flag1;
	var flag2;
	var traffic_couter;
	var oBtn1 = document.getElementById("btn1");
	var oBtn2 = document.getElementById("btn2");
	var oDiv = document.getElementById("div1");
	var oLine = window.document.getElementById("line");
	var oWeigh = window.document.getElementById("weigh");
	var oTime = window.document.getElementById("time");
	var content1 = document.getElementById("txt1");
	var content2 = document.getElementById("txt2");
// 定义图结构
	function MGraph() {
	    this.vexs = []; //顶点表
	    this.arc = []; // 邻接矩阵，可看作边表
	    this.numVertexes = null; //图中当前的顶点数
	    this.numEdges = null; //图中当前的边数
	}
	var G = new MGraph(); //创建图使用
	//创建图
	function createMGraph() {
	    G.numVertexes = numVertexes; //设置顶点数
	    G.numEdges = numEdges; //设置边数
	    //录入顶点信息
	    for (var i = 0; i < G.numVertexes; i++) {
	        G.vexs[i] = 'V' + i; //scanf('%s'); //ascii码转字符 //String.fromCharCode(i + 65);
	    }
	    console.log(G.vexs) //打印顶点
	    //邻接矩阵初始化
	    for (var i = 0; i < G.numVertexes; i++) {
	        G.arc[i] = [];
	        for (j = 0; j < G.numVertexes; j++) {
	            G.arc[i][j] = Arr2[i][j]; //INFINITY;
	        }
	    }
	    console.log(G.arc); //打印邻接矩阵
	}
	/*根据不同的行进方式，建立不同的图*/
	function Distinguish_Arr2bike(){
		Arr2[54][62]=65535;
		Arr2[55][68]=65535;
		Arr2[59][70]=65535;
		Arr2[61][67]=65535;
		Arr2[61][71]=65535;
		Arr2[106][107]=65535;
		Arr2[61][330]=65535;
		Arr2[14][28]=65535;
		Arr2[35][47]=65535;
		Arr2[80][221]=65535;
		Arr2[327][330]=65535;
		Arr2[51][66]=65535;
		for(i = 0;i<numVertexes;i++){
			for(j = i + 1;j<numVertexes;j++)
				Arr2[j][i] = Arr2[i][j];
		}
}////对角矩阵的赋值//即只需要上三角矩阵赋值即可

	function Distinguish_Arr2ride(){
		Arr2[54][62]=10;
		Arr2[55][68]=30;
		Arr2[59][70]=15;
		Arr2[61][67]=30;
		Arr2[61][71]=50;
		Arr2[106][107]=50;
		Arr2[61][330]=20;
		Arr2[14][28]=20;
		Arr2[35][47]=25;
		Arr2[80][221]=65;
		Arr2[327][330]=170;
		Arr2[51][66]=80;
		for(i = 0;i<numVertexes;i++){
			for(j = i + 1;j<numVertexes;j++)
				Arr2[j][i] = Arr2[i][j];
		}
}
	var Pathmatirx = []; //二维数组 表示顶点到顶点的最短路径权值和的矩阵
	var ShortPathTable = []; //二维数组 表示对应顶点的最小路径的前驱矩阵
	function Floyd() {
	    var w, k;
	    for (var v = 0; v < G.numVertexes; ++v) { //初始化 Pathmatirx ShortPathTable
	        Pathmatirx[v] = [];
	        ShortPathTable[v] = [];
	        for (var w = 0; w < G.numVertexes; ++w) {
	            ShortPathTable[v][w] = G.arc[v][w];
	            Pathmatirx[v][w] = w;
	        }
	    }
	    for (var k = 0; k < G.numVertexes; ++k) {
	        for (var v = 0; v < G.numVertexes; ++v) {
	            for (var w = 0; w < G.numVertexes; ++w) {
	                if (ShortPathTable[v][w] > (ShortPathTable[v][k] + ShortPathTable[k][w])) {
	                    //如果经过下标为k顶点路径比原两点间路径更短，当前两点间权值设为更小的一个
	                    ShortPathTable[v][w] = ShortPathTable[v][k] + ShortPathTable[k][w];
	                    Pathmatirx[v][w] = Pathmatirx[v][k]; //路径设置经过下标为k的顶点
	                }
	            }
	        }
	    }
	}
	function PrintAll(m,n) {
		arr1=new Array()//arr1存放的是路径上各点的content
		arr2=new Array()//arr2存放的是各点代表的序号
		var k=m;
		f = 1;
		p=1;
		for(i = 0;i<30;i++){
			arr1[i];
			arr2[i];
		}
		arr1[0]=MarkerName[k];
		arr2[0]=k;
	    for (var v = 0; v < G.numVertexes; ++v) {
	        for (var w = 0; w < G.numVertexes; w++) {
				if(v==m && w==n){
					c=ShortPathTable[v][w];
	                k = Pathmatirx[v][w];
	                traffic_couter = 0;
	                while (k != w) {
	                	if((MarkerName[k] != 'WR') && (MarkerName[k] != 'WNR') && (MarkerName[k] != 'DW') )
	                	{
	                		arr1[p]= MarkerName[k];
	                		if((MarkerName[k] == '上大路') || (MarkerName[k] == "上大路南陈路交叉口") || (MarkerName[k] == "南陈路") || (MarkerName[k] == "东区东门红绿灯")){
	                			traffic_couter++;
	                		}
	                	}
	                	else{
	                		p= p-1;
	                	}
						arr2[f]=k;
						f++;
						p++;
	                    k = Pathmatirx[k][w];
	            	}
						arr1[p]=MarkerName[w];
						arr2[f]=k;
	            }
	        }
	    }
		b=arr1.join("--->>>");
	}
	function Judgetxt(){
	flag1 = 0;
	flag2 = 0;
	for(var z=0;z<numVertexes;z++){
		if(content1.value == MarkerName[z]){
			begin_d = z;
			flag1=1;
		}	
		if(content2.value == MarkerName[z]){
			end_d = z;
			flag2=1;
		}	
	}
	PrintAll(begin_d,end_d);
}
	Distinguish_Arr2ride();
	createMGraph();
	Floyd();
	
    var last_Btn,now_Btn;   
    last_Btn = 1;/*默认步行*/
	oBtn1.onclick = function(){
   	 	now_Btn = 1;
   	 	if(now_Btn == last_Btn){
   	 		OBtn1_ride();
   	 		last_Btn = 1;
   	 	}else{
   	 		Distinguish_Arr2ride();
   	 		createMGraph();/*重新构图*/
   	 		Floyd();
   	 		OBtn1_ride();
   	 		last_Btn = 1;
   	 	}
   	};
   	oBtn2.onclick = function(){
   		now_Btn = 2;
   	 	if(now_Btn == last_Btn){
   	 		OBtn2_bike();
   	 		last_Btn = 2;
   	 	}else{
   	 		Distinguish_Arr2bike();
   	 		createMGraph();/*重新构图*/
   	 		Floyd();
   	 		OBtn2_bike();
   	 		last_Btn = 2;
   	 	}
   	}; 
	function OBtn1_ride(){
		Judgetxt();
		Delay_ifcrowded();
		if((flag1==1)&&(flag2==1)){
			oDiv.style.display = "block";
			if(traffic_couter != 0){
				oLine.innerHTML = b + "并且将通过" + traffic_couter + "个红绿灯";	
			}else{
				oLine.innerHTML = b;	
			}
			oWeigh.innerHTML = c+"米";
		oTime.innerHTML = "步行用时"+parseInt(c/100)+"分钟,"+Math.round((c/100-parseInt(c/100))*60 +Iscrowded_counter*4)+"秒";
		polyline();	
		}else if((flag1==1)&&(flag2==0)){
			alert("步行模式，起点格式正确，请重新检查终点");
		}else if((flag1==0)&&(flag2==1)){
			alert("步行模式，终点格式正确，请重新检查起点");
		}else{
			alert("步行模式，请输入起始点");
		}
	}
	function OBtn2_bike(){
		Delay_ifcrowded();
		Judgetxt();
		if((flag1==1)&&(flag2==1)){
			oDiv.style.display = "block";
			if(traffic_couter != 0){
				oLine.innerHTML = b +"       并且将通过" + traffic_couter + "个红绿灯";	
			}else{
				oLine.innerHTML = b;	
			}
			oWeigh.innerHTML = c+"米";
			oTime.innerHTML = "骑行用时"+parseInt(c/400)+"分钟,"+Math.round((c/400-parseInt(c/400))*60+Iscrowded_counter*2)+"秒";
			polyline();	
		}else if((flag1==1)&&(flag2==0)){
			alert("骑行模式，起点格式正确，请重新检查终点");
		}else if((flag1==0)&&(flag2==1)){
			alert("骑行模式，终点格式正确，请重新检查起点");
		}else{
			alert("骑行模式，请输入起始点");
		}
	}
	/*如果是拥挤路段的话每过一个数据点延时2s(自行车3s)*/
	var Iscrowded_counter;
	function Delay_ifcrowded(){
		/*现在是拥挤时刻*/
		Iscrowded_counter = 0;
		if(iscrowded_flag == 1){
			for(i=0;i<21;i++){
				for(j=0;j<=f;j++){
					if(arr2[j] == iscrowded_condition[i]){
						Iscrowded_counter++;
					}
				}
			}
			alert("前方道路拥挤，请有序前行");
		}else{
			Iscrowded_counter=0;
		}
	}


		