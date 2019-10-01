


var content1 = document.getElementById("txt1");
var content2 = document.getElementById("txt2");

var numVertexes = 56, //定义顶点数
	numEdges = 200; //定义边数
//定义邻接矩阵
var Arr2=new Array();
var i,j;
for(i = 0;i<numVertexes;i++){
	Arr2[i] = new Array();
	for(j = 0;j<numVertexes;j++){
		Arr2[i][j] = 65535;
	}
}////二维数组的声明和赋值(设初值值全为无穷大这里取65535)
	
for(i = 0;i<numVertexes;i++){
	for(j = 0;j<numVertexes;j++){
		if( i==j ){
			Arr2[i][j] = 0;
		}	
	}
}//邻接矩阵对角元的初始化
	Arr2[0][1]=120;
    Arr2[0][5]=160;
    Arr2[0][6]=240;

    Arr2[1][19]=120;
    Arr2[1][20]=390;
    Arr2[1][21]=470;

    Arr2[2][3]=270;
    Arr2[2][8]=180;
    Arr2[2][16]=280;

    Arr2[3][9]=220;
    Arr2[3][16]=260;

    Arr2[4][5]=250;
    Arr2[4][9]=370;
    Arr2[4][28]=190;
    Arr2[4][29]=200;
    Arr2[4][36]=260;

    Arr2[5][27]=250;
    Arr2[5][28]=210;
    Arr2[5][33]=400;
    Arr2[5][36]=360;

    Arr2[6][7]=170;
    Arr2[6][28]=410;

    Arr2[7][8]=210;
    Arr2[7][28]=410;

    Arr2[9][10]=170;
    Arr2[9][28]=320;
    Arr2[9][29]=180;

    Arr2[10][12]=180;
    Arr2[10][15]=210;
    Arr2[10][18]=180;
    Arr2[10][30]=240;

    Arr2[11][12]=160;
    Arr2[11][48]=220;
    Arr2[11][49]=270;

    Arr2[12][13]=160;
    Arr2[12][17]=150;
    Arr2[12][18]=60;

    Arr2[13][14]=70;
    Arr2[13][17]=150;
    Arr2[13][18]=200;

    Arr2[14][15]=250;

    Arr2[15][16]=220;

    Arr2[18][30]=160;

    Arr2[20][21]=170;
    Arr2[20][25]=550;
    Arr2[20][26]=430;
    Arr2[20][27]=240;

    Arr2[21][22]=150;

    Arr2[22][23]=100;
    Arr2[22][24]=220;
    Arr2[22][25]=700;

    Arr2[24][25]=620;

    Arr2[25][26]=240;
    Arr2[25][43]=220;
    Arr2[25][47]=170;

    Arr2[26][27]=370;
    Arr2[26][47]=160;

    Arr2[27][46]=320;
    Arr2[27][47]=350;

    Arr2[29][30]=70;
    Arr2[29][31]=50;

    Arr2[30][32]=90;

    Arr2[31][32]=60;
    Arr2[31][33]=40;

    Arr2[32][33]=130;
    Arr2[32][34]=60;
    Arr2[32][35]=140;
    Arr2[32][48]=450;

    Arr2[33][34]=80;
    Arr2[33][36]=110;
    Arr2[33][37]=240;
    Arr2[33][38]=270;

    Arr2[34][35]=90;
    Arr2[34][36]=230;
    Arr2[34][38]=180;
    Arr2[34][48]=530;

    Arr2[35][36]=250;
    Arr2[35][38]=150;
    Arr2[35][48]=520;

    Arr2[36][37]=130;
    Arr2[36][38]=200;
    Arr2[36][46]=150;

    Arr2[37][38]=80;
    Arr2[37][39]=100;
    Arr2[37][40]=130;
    Arr2[37][46]=120;

    Arr2[38][39]=140;
    Arr2[38][40]=90;

    Arr2[39][40]=80;
    Arr2[39][44]=70;
    Arr2[39][45]=140;
    Arr2[39][46]=150;
    Arr2[39][47]=200;

    Arr2[40][44]=150;
    Arr2[40][45]=100;

    Arr2[41][42]=80;
    Arr2[41][43]=120;
    Arr2[41][44]=130;
    Arr2[41][45]=130;
    Arr2[41][46]=260;
    Arr2[41][47]=100;
    Arr2[41][54]=750;

    Arr2[42][43]=150;
    Arr2[42][44]=120;
    Arr2[42][45]=60;
    Arr2[42][54]=860;

    Arr2[43][47]=220;
    Arr2[43][54]=770;

    Arr2[44][45]=80;
    Arr2[44][46]=200;
    Arr2[44][47]=150;
    Arr2[44][54]=820;

    Arr2[45][54]=950;

    Arr2[46][47]=170;

    Arr2[47][54]=700;

    Arr2[48][49]=160;
    Arr2[48][50]=220;
    Arr2[48][51]=230;
    Arr2[48][52]=380;
    Arr2[48][54]=420;

    Arr2[49][50]=150;
    Arr2[49][51]=160;

    Arr2[50][51]=90;
    Arr2[50][52]=290;

    Arr2[51][52]=200;
    Arr2[51][53]=420;
    Arr2[51][54]=480;

    Arr2[52][53]=270;
    Arr2[52][54]=320;
    Arr2[52][55]=300;

    Arr2[53][54]=140;
    Arr2[53][55]=130;

    Arr2[54][55]=170;

for(i = 0;i<numVertexes;i++){
	for(j = i + 1;j<numVertexes;j++){
		Arr2[j][i] = Arr2[i][j];
	}
}////对角矩阵的赋值//即只需要上三角矩阵赋值即可

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

	var arr1;
	var arr2;
	var b;
	var c;
	var f;
function PrintAll(m,n) {
	arr1=new Array()//arr1存放的是路径上各点的content
	arr2=new Array()//arr2存放的是各点代表的序号
	var k=m;
	f = 1;
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
                while (k != w) {
					arr1[f]= MarkerName[k];
					arr2[f]=k;
					f++;
                    k = Pathmatirx[k][w];
            	}
					arr1[f]=MarkerName[w];
					arr2[f]=k;
            }
        }
    }
	b=arr1.join("|-->|");
}
createMGraph();
Floyd();

var begin_d;
var end_d;
var flag1;
var flag2;
var oBtn1 = document.getElementById("btn1");
var oBtn2 = document.getElementById("btn2");
var oDiv = document.getElementById("div1");
var oLine = window.document.getElementById("line");
var oWeigh = window.document.getElementById("weigh");
var oTime = window.document.getElementById("time");
oBtn1.onclick = function(){
	Judgetxt();
	if((flag1==1)&&(flag2==1)){
		oDiv.style.display = "block";
		oLine.innerHTML = b;	
		oWeigh.innerHTML = c+"米";
	oTime.innerHTML = "步行用时"+parseInt(c/60)+"分钟,"+Math.round((c/60-parseInt(c/60))*60)+"秒";
	polyline();	
	}	
	else if((flag1==1)&&(flag2==0)){
		alert("步行模式，起点格式正确，请重新检查终点");
	}
	else if((flag1==0)&&(flag2==1)){
		alert("步行模式，终点格式正确，请重新检查起点");
	}
	else{
		alert("步行模式，请输入起始点");
	}
}

oBtn2.onclick = function(){
	Judgetxt();
	if((flag1==1)&&(flag2==1)){
		oDiv.style.display = "block";
		oLine.innerHTML = b;	
		oWeigh.innerHTML = c+"米";
		oTime.innerHTML = "骑行用时"+parseInt(c/300)+"分钟,"+Math.round((c/300-parseInt(c/300))*60)+"秒";
		polyline();	
	}	
	else if((flag1==1)&&(flag2==0)){
		alert("骑行模式，起点格式正确，请重新检查终点");
	}
	else if((flag1==0)&&(flag2==1)){
		alert("骑行模式，终点格式正确，请重新检查起点");
	}
	else{
		alert("骑行模式，请输入起始点");
	}
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

		