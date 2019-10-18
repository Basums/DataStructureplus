/*
 * 构建邻接矩阵
 */
var numVertexes = 395, //定义顶点数
	numEdges = 500; //定义边数
//定义邻接矩阵
var Arr2=new Array();
var Arr3=new Array();
var Arr4=new Array();
var Arr5=new Array();
var Arr6=new Array();
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

for(i = 0;i<47;i++){
	Arr3[i] = new Array();
	for(j = 0;j<47;j++){
		Arr3[i][j] = 65535;
	}
}////二维数组的声明和赋值(设初值值全为无穷大这里取65535)
for(i = 0;i<47;i++){
	for(j = 0;j<47;j++){
		if( i==j ){
			Arr3[i][j] = 0;
		}	
	}
}//邻接矩阵对角元的初始化

for(i = 0;i<74;i++){
	Arr4[i] = new Array();
	for(j = 0;j<74;j++){
		Arr4[i][j] = 65535;
	}
}////二维数组的声明和赋值(设初值值全为无穷大这里取65535)
for(i = 0;i<74;i++){
	for(j = 0;j<74;j++){
		if( i==j ){
			Arr4[i][j] = 0;
		}	
	}
}//邻接矩阵对角元的初始化


for(i = 0;i<124;i++){
	Arr5[i] = new Array();
	for(j = 0;j<124;j++){
		Arr5[i][j] = 65535;
	}
}////二维数组的声明和赋值(设初值值全为无穷大这里取65535)
for(i = 0;i<124;i++){
	for(j = 0;j<124;j++){
		if( i==j ){
			Arr5[i][j] = 0;
		}	
	}
}//邻接矩阵对角元的初始化

for(i = 0;i<50;i++){
	Arr6[i] = new Array();
	for(j = 0;j<50;j++){
		Arr6[i][j] = 65535;
	}
}////二维数组的声明和赋值(设初值值全为无穷大这里取65535)
for(i = 0;i<50;i++){
	for(j = 0;j<50;j++){
		if( i==j ){
			Arr6[i][j] = 0;
		}	
	}
}//邻接矩阵对角元的初始化
/*
 * 第一区包括
 * */
	Arr2[0][2]=50;
	
	Arr2[1][2]=5;
	
	Arr2[2][3]=40;
	
	Arr2[3][4]=20;
	
	Arr2[4][5]=100;
	Arr2[4][91]=650;
	
	Arr2[5][6]=30;
	
	Arr2[6][7]=5;
	
	Arr2[5][8]=50;
	
	Arr2[8][9]=30;
	Arr2[8][57]=80;
	
	Arr2[9][10]=60;
	
	Arr2[10][11]=5;
	Arr2[10][12]=5;
	Arr2[10][13]=170;
	
	Arr2[13][14]=40;
	Arr2[13][47]=10;

	Arr2[14][15]=30;
	Arr2[14][28]=20;
	
	Arr2[15][16]=60;
	
	Arr2[16][17]=50;
	Arr2[16][19]=40;
	
	Arr2[17][18]=15;
	Arr2[17][93]=30;
	
	Arr2[19][20]=80;
	
	Arr2[20][21]=20;
	Arr2[20][24]=50;
	
	Arr2[21][22]=30;
	
	Arr2[22][23]=40;
	
	Arr2[23][53]=60;
	
	Arr2[24][25]=50;
	Arr2[24][31]=20;
	
	Arr2[25][26]=5;
	Arr2[25][27]=20;
	
	Arr2[27][28]=20;
	
	Arr2[28][29]=30;
	
	Arr2[29][30]=5;
	Arr2[29][31]=50;
	
	Arr2[31][32]=20;
	Arr2[31][33]=30;

	Arr2[32][36]=30;
	
	Arr2[33][34]=50;
	
	Arr2[34][35]=10;
	
	Arr2[35][47]=20;
	Arr2[35][45]=50;
	
	Arr2[36][43]=30;	
	Arr2[36][37]=20;
	
	Arr2[37][45]=20;
	Arr2[37][38]=10;
		
	Arr2[38][39]=30;
	Arr2[38][49]=40;
	
	Arr2[39][41]=30;
	Arr2[39][40]=5;
	
	Arr2[41][42]=20;
	Arr2[42][43]=30;

	Arr2[43][44]=5;
	
	Arr2[45][46]=5;

	Arr2[47][50]=30;
	
	Arr2[48][50]=40;
	Arr2[48][49]=40;
	Arr2[48][62]=90;
	
	Arr2[49][51]=80;
	
	Arr2[50][54]=110;	
	
	Arr2[51][52]=30;
	Arr2[51][66]=100;
	
	Arr2[52][53]=90;
	
	Arr2[52][61]=90;
	
	Arr2[54][62]=30;
	Arr2[54][55]=40;
	
	Arr2[55][68]=70;
	Arr2[55][56]=50;
	
	Arr2[56][57]=30;
	Arr2[56][58]=30;
	
	Arr2[57][58]=30;
	
	Arr2[58][59]=40;
	
	Arr2[59][70]=20;
	Arr2[59][60]=70;
	
	Arr2[60][73]=30;	
	
	Arr2[61][71]=110;	
	Arr2[61][67]=60;
	Arr2[61][78]=110;
	
	Arr2[62][63]=30;	
	
	Arr2[63][64]=10;
	
	Arr2[65][68]=20;
	Arr2[65][64]=30;
	Arr2[65][66]=50;	
	
	Arr2[66][69]=40;
	Arr2[66][71]=70;
	Arr2[66][67]=30;
	
	Arr2[68][69]=40;
	
	Arr2[69][70]=40;
	
	Arr2[70][71]=50;
	
	Arr2[72][73]=50;
	
	Arr2[72][74]=90;
	
	Arr2[74][75]=20;
	Arr2[74][83]=90;
	
	Arr2[75][82]=70;	
	Arr2[75][76]=130;
	
	Arr2[76][77]=30;
	
	Arr2[77][78]=10;
	Arr2[77][79]=70;
	
	Arr2[78][84]=70;
	
	Arr2[79][84]=20;
	Arr2[79][80]=100;
	
	Arr2[80][82]=40;
	Arr2[80][81]=5;
	
	Arr2[82][83]=30;
	
	Arr2[83][85]=60;
	
	Arr2[85][88]=30;
	Arr2[85][87]=10;
	
	Arr2[87][92]=50;
	
	Arr2[88][90]=20;
	
	Arr2[89][92]=40;
	Arr2[89][91]=40;

	Arr2[93][94]=50;
	
	Arr2[94][95]=100;
	
	Arr2[95][96]=30;
	
/*
 * 第二区包括
 * */
	Arr3[1][24]=100;
	Arr3[1][46]=30;
	
	Arr3[2][39]=5;
	
	Arr3[3][4]=20;
	Arr3[3][16]=70;
	Arr3[3][34]=80;
	
	Arr3[4][5]=40;
	Arr3[4][15]=80;
	
	Arr3[5][14]=70;
	Arr3[5][32]=40;
	
	Arr3[6][33]=40;
	
	Arr3[7][8]=90;
	Arr3[7][35]=70;
	
	Arr3[8][9]=40;
	Arr3[8][41]=2;
	
	Arr3[9][10]=110;

	Arr3[10][11]=20;
	
	Arr3[11][12]=65;
	Arr3[11][38]=50;
	
	Arr3[12][13]=140;
	Arr3[12][44]=10;
	
	Arr3[13][14]=120;
	
	Arr3[14][15]=40;
	Arr3[14][31]=20;
	
	Arr3[15][16]=20;
	Arr3[15][43]=20;
	
	Arr3[16][17]=40;
	Arr3[16][43]=20;
	
	Arr3[17][18]=20;
	Arr3[17][21]=10;
	
	Arr3[18][19]=40;
	Arr3[18][26]=30;
	
	Arr3[19][20]=20;
	Arr3[19][25]=40;
	
	Arr3[20][22]=20;
	Arr3[20][23]=70;
	
	Arr3[21][22]=40;
	
	Arr3[23][24]=80;
	Arr3[23][27]=50;
	
	Arr3[24][39]=30;
	
	Arr3[25][27] = 65;
	Arr3[25][40]=20;
	Arr3[25][44]=60;

	Arr3[26][40]=20;
	Arr3[26][42]=20;
	
	Arr3[27][38]=20;
	
	Arr3[28][38]=2;
	
	Arr3[29][40]=5;
	
	
	Arr3[30][42]=15;
	Arr3[30][43]=55;
	
	Arr3[32][33]=60;
	
	Arr3[34][39]=30;
	
	Arr3[35][36]=40;
	
	Arr3[36][37]=30;
	
	Arr3[37][46]=40;
	
	Arr3[42][45]=80;
	
	Arr3[44][45]=40;

/*
 * 第三区域
 * */
    Arr4[1][2]=10;
    Arr4[1][69]=130;
    Arr4[2][3]=90;
    Arr4[3][4]=30;
    Arr4[3][29]=50;
    Arr4[4][5]=20;
    Arr4[4][30]=50;
    Arr4[5][6]=60;
    Arr4[6][7]=30;
    Arr4[6][21]=40;
    Arr4[7][8]=30;
    Arr4[7][9]=20;
    Arr4[9][10]=40;
    Arr4[10][11]=10;
    Arr4[11][12]=10;
    Arr4[11][21]=40;
    Arr4[12][13]=10;


    Arr4[13][14]=10;
    Arr4[14][15]=20;
    Arr4[15][16]=20;
    Arr4[15][17]=20;
    Arr4[17][18]=30;
    Arr4[18][19]=20;
    Arr4[18][31]=20;
    Arr4[19][20]=20;
    Arr4[19][32]=0;
    Arr4[20][21]=50;
    Arr4[20][22]=10;

    Arr4[22][23]=20;
    Arr4[22][26]=20;
    Arr4[23][24]=20;
    Arr4[23][33]=50;
    Arr4[24][25]=20;
    Arr4[25][26]=30;
    Arr4[25][28]=40;
    Arr4[26][27]=40;
    Arr4[27][28]=30;
    Arr4[27][30]=40;
    Arr4[28][29]=40;
    Arr4[29][30]=30;
    Arr4[32][33]=30;

    Arr4[33][34]=70;
    Arr4[34][35]=20;
    Arr4[35][36]=20;
    Arr4[35][37]=60;
    Arr4[36][42]=60;
    Arr4[37][38]=10;
    Arr4[38][39]=30;
    Arr4[39][40]=20;

    Arr4[41][42]=20;
    Arr4[42][43]=10;
    Arr4[42][44]=50;
    Arr4[43][45]=50;
    Arr4[44][45]=10;
    Arr4[44][58]=30;

    Arr4[47][58]=30;
    
    Arr4[47][48]=40;
    Arr4[48][49]=20;
    Arr4[49][50]=10;
    Arr4[50][51]=10;
    Arr4[50][67]=20; 
    Arr4[51][52]=5;
    Arr4[51][54]=30;
    Arr4[52][53]=5;
    
    Arr4[53][58]=50;
    Arr4[54][55]=10;
    Arr4[55][56]=10;
    Arr4[56][57]=40;
    Arr4[57][60]=80;
    Arr4[57][61]=70;
    Arr4[58][59]=30; 
    Arr4[58][66]=60;
    Arr4[59][60]=40;
    Arr4[61][62]=20;
    Arr4[62][63]=20;
    Arr4[63][64]=40;
    
    Arr4[64][65]=30;
    Arr4[67][68]=40;
    Arr4[68][69]=340;
    Arr4[69][70]=40;
    Arr4[70][71]=20;
    Arr4[71][72]=20;
    Arr4[72][73]=20;

/*
 * 中心区坐标点
 * */

	Arr5[0][1]=20;
	Arr5[1][2]=130;
	Arr5[1][3]=130;
	Arr5[2][7]=40;
	Arr5[2][40]=60;
	Arr5[3][8]=10;
	Arr5[3][5]=120;
	Arr5[3][41]=30;
	Arr5[4][9]=40;
	Arr5[4][17]=20;
	Arr5[4][42]=80;
	Arr5[4][121]=50;
	Arr5[5][7]=30;
	Arr5[5][38]=30;
	Arr5[6][17]=40;
	Arr5[6][43]=80;
	Arr5[6][22]=30;
	Arr5[6][123]=50;
	Arr5[7][39]=30;
	Arr5[8][12]=10;
	Arr5[8][41]=15;
	Arr5[8][16]=35; 
	Arr5[9][14]=20;
	Arr5[9][13]=50;
	Arr5[9][38]=15;
	
	Arr5[10][14]=20;
	Arr5[10][15]=30;
	Arr5[11][15]=15;
	Arr5[11][38]=50;
	Arr5[11][40]=80;
	Arr5[13][41]=60;
	Arr5[15][121]=30;
	Arr5[16][20]=30;
	Arr5[16][28]=30;
	Arr5[16][42]=20;
	Arr5[17][28]=50;
	Arr5[17][29]=10;
	Arr5[18][19]=30;
	Arr5[18][29]=30;
	Arr5[19][121]=20;
	Arr5[19][123]=30;
	
	Arr5[20][21]=10;
	Arr5[20][42]=25;
	Arr5[21][25]=30;
	Arr5[21][44]=30;
	Arr5[21][30]=30;
	Arr5[22][30]=40;
	Arr5[22][31]=10;
	Arr5[22][122]=30;
	Arr5[23][35]=30;
	Arr5[23][24]=30;
	Arr5[23][31]=20;
	Arr5[24][37]=50;
	Arr5[24][123]=25;
	Arr5[25][26]=20;
	Arr5[25][32]=20;
	Arr5[25][44]=40;
	Arr5[25][45]=40;
	Arr5[25][122]=100;
	Arr5[26][45]=35;
	Arr5[26][46]=30;
	Arr5[26][110]=25;
	Arr5[26][32]=20;
	Arr5[27][33]=9;
	Arr5[27][34]=5;
	Arr5[27][122]=25;
	Arr5[28][42]=55;
	
	Arr5[30][43]=45;
	Arr5[30][44]=45;
	Arr5[33][45]=50;
	Arr5[34][35]=10;
	Arr5[35][36]=25;
	Arr5[35][122]=25;
	Arr5[36][37]=15;
	Arr5[37][111]=30;
	Arr5[38][39]=30;
	
	Arr5[41][42]=30;
	Arr5[42][43]=40;
	Arr5[43][44]=30;
	Arr5[44][45]=30;
	Arr5[45][46]=20;
	Arr5[47][48]=40;
	Arr5[47][56]=45;
	Arr5[47][58]=50;
	Arr5[48][49]=30;
	Arr5[48][56]=20;
	Arr5[49][50]=10;
	
	Arr5[51][68]=20;
	Arr5[52][53]=20;
	Arr5[52][54]=20;
	Arr5[52][55]=20;
	Arr5[53][56]=15;
	Arr5[54][59]=30;
	Arr5[55][57]=30;
	Arr5[56][58]=30;
	Arr5[57][61]=10;
	Arr5[57][62]=20;
	Arr5[58][59]=30;
	Arr5[59][60]=30;
	
	Arr5[60][62]=65;
	Arr5[60][91]=65;
	Arr5[61][62]=10;
	Arr5[61][63]=10;
	Arr5[62][87]=10;
	Arr5[62][71]=10;
	Arr5[62][72]=10;
	Arr5[63][64]=20;
	Arr5[63][66]=100;
	Arr5[64][70]=10;
	Arr5[64][82]=90;
	Arr5[64][71]=20;
	Arr5[65][66]=30;
	Arr5[66][67]=40;
	Arr5[67][68]=100;
	Arr5[67][73]=160;
	Arr5[69][70]=20;
	Arr5[69][78]=30;
	
	Arr5[71][72]=10;
	Arr5[71][87]=20;
	Arr5[72][81]=20;
	Arr5[72][87]=20;
	Arr5[73][75]=50;
	Arr5[73][114]=120;
	Arr5[75][76]=40;
	Arr5[76][116]=80;
	Arr5[76][77]=25;
	Arr5[77][80]=5;
	Arr5[77][79]=20;
	Arr5[78][79]=10;
	Arr5[78][82]=30;
	
	Arr5[80][120]=20;
	Arr5[80][82]=35;
	Arr5[81][82]=30;
	Arr5[82][83]=10;
	Arr5[82][95]=45;
	Arr5[83][84]=30;
	Arr5[84][85]=20;
	Arr5[84][120]=25;
	Arr5[85][95]=45;
	Arr5[85][97]=35;
	Arr5[85][120]=35;
	Arr5[87][88]=35;
	Arr5[88][89]=5;
	Arr5[88][93]=10;
	Arr5[89][90]=35;
	
	Arr5[90][92]=10;
	Arr5[90][113]=100;
	Arr5[91][109]=25;
	Arr5[92][109]=35;
	Arr5[92][111]=150;
	Arr5[92][107]=5;
	Arr5[95][106]=15;
	Arr5[95][113]=35;
	Arr5[96][97]=20;
	Arr5[96][106]=15;
	Arr5[96][98]=25;
	Arr5[97][99]=25;
	Arr5[97][104]=30;
	Arr5[98][99]=25;
	Arr5[98][113]=30;
	Arr5[99][111]=50;
	Arr5[99][102]=20;
	
	Arr5[100][103]=5;
	Arr5[100][104]=5;
	Arr5[102][103]=5;
	Arr5[102][104]=10;
	Arr5[105][108]=30;
	Arr5[105][107]=20;
	Arr5[108][110]=40;
	Arr5[109][110]=50;
	Arr5[109][112]=200;
	
	Arr5[114][116]=20;
	Arr5[116][117]=20;
	Arr5[118][119]=130;
	Arr5[119][120]=30;

/*北区权值*/
	Arr6[0][1] = 60;
	Arr6[1][2] = 50;
	Arr6[1][7] = 10;
	Arr6[2][3] = 5;
	Arr6[2][4] = 8;
	Arr6[4][5] = 35;
	Arr6[5][6] = 20;
	Arr6[7][8] = 100;
	Arr6[7][10] = 50;
	Arr6[8][9] = 10;
	Arr6[10][11] = 130;
	Arr6[10][15] = 130;
	Arr6[11][12] = 80;
	Arr6[12][13] = 30;
	Arr6[12][14] = 30;
	Arr6[15][16] = 20;
	Arr6[15][17] = 20;
	Arr6[15][48] = 60;
	Arr6[17][18] = 20;
	Arr6[18][19] = 10;
	Arr6[19][20] = 80;
	Arr6[20][39] = 30;
	Arr6[20][21] = 30;
	Arr6[21][22] = 30;
	Arr6[21][36] = 30;
	Arr6[22][23] = 30;
	Arr6[22][33] = 100;
	Arr6[23][24] = 15;
	Arr6[23][25] = 40; 
	Arr6[23][26] = 30;
	Arr6[26][27] = 40;
	Arr6[27][28] = 20;
	Arr6[28][30] = 20;
	Arr6[28][32] = 20;
	Arr6[27][30] = 38; 
	Arr6[30][31] = 20;
	Arr6[30][49] = 50;
	Arr6[31][32] = 20;
	Arr6[31][33] = 80;
	Arr6[31][44] = 60;
	Arr6[33][34] = 15;
	Arr6[33][47] = 70;
	Arr6[34][35] = 20;
	Arr6[34][37] = 30;
	Arr6[35][36] = 70;
	Arr6[37][38] = 30;
	Arr6[37][40] = 10;
	Arr6[38][39] = 30;
	Arr6[40][41] = 25;
	Arr6[40][48] = 60;
	Arr6[41][42] = 10;
	Arr6[41][43] = 20;
	Arr6[43][48] = 30;
	Arr6[44][49] = 30;
	Arr6[44][45] = 30;
	Arr6[45][47] = 30;
for(i=0;i<47;i++){
	for(j=i;j<47;j++){
		Arr2[i+97][j+97] = Arr3[i][j];
	}
}
	
for(i=0;i<74;i++){
	for(j=i;j<74;j++){
		Arr2[i+144][j+144] = Arr4[i][j];
	}
}

for(i=0;i<124;i++){
	for(j=i;j<124;j++){
		Arr2[i+218][j+218] = Arr5[i][j];
	}
}

for(i=0;i<50;i++){
	for(j=i;j<50;j++){
		Arr2[i+343][j+343] = Arr6[i][j];
	}
}
/*
 * 以下是为了区域之间的联系
 * */	
	/*
	 */
	Arr2[130][145] = 10;	
	Arr2[61][330] = 30;
	Arr2[23][265] = 30;
	Arr2[265][392] = 30;
	Arr2[84][238] = 50;
	Arr2[80][221] = 50;
	Arr2[92][219] = 1;
	Arr2[89][218] = 1;
	Arr2[212][233] =60;
	Arr2[98][285] = 40; 
	Arr2[121][291] = 1;
	Arr2[100][332] = 1;
	Arr2[102][336] = 1;
	Arr2[91][342]  = 150;
	Arr2[212][342] = 250;
	Arr2[274][275] = 50;
	Arr2[104][354] = 40;
	Arr2[286][390] = 60;
	Arr2[23][392] = 10;
	Arr2[20][373] = 12;
	Arr2[16][369] = 2;
	Arr2[356][393] = 30;
	Arr2[17][394] = 15;
	Arr2[299][300] = 60;
	Arr2[287][296] = 60;
	Arr2[387][392] = 25;
	Arr2[336][337] = 130;	
	Arr2[298][300] = 60;
	Arr2[274][275] = 65535;
	Arr2[270][271] = 40;
	Arr2[270][273] = 40;
	Arr2[100][131] = 50;
	
for(i = 0;i<numVertexes;i++){
	for(j = i + 1;j<numVertexes;j++){
		Arr2[j][i] = Arr2[i][j];
	}
}////对角矩阵的赋值//即只需要上三角矩阵赋值即可