/*
 * 校园各主要路线在以下时间段将会比较拥挤,以及拥挤路段;
 * 这必然会影响此时的行进速度(行车速度降低30%,步行速度下降10%);
 * 主要路段(益新食堂,西门,东区红绿灯处,南区红绿灯处,水秀食堂,图书馆正门);
 * 拥挤时间(7:40-8:00,11:40-12:00;13:50-14:10;17:40-18:00;20:30-20:45);
 */
var h_now,m_now,s_now;
var iscrowded;
var iscrowded_flag;
	function ChangeClock(){
		var time=new Date();
	 	h_now=time.getHours();
	  	m_now=time.getMinutes();
	  	s_now=time.getSeconds();
	  	Judgehour();
	  	document.getElementById("clock").innerHTML=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
	};
	function Judgehour(){
	if((h_now==7)&&(40<=m_now)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else if((h_now==20)&&(30<=m_now)&&(m_now<=45)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else if((h_now==13)&&(50<=m_now)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else if((h_now==11)&&(40<=m_now)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else if((h_now==17)&&(40<=m_now)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else if((h_now==14)&&(m_now<=10)){
		iscrowded_flag = 1;
		iscrowded = "是";
	}else{
		iscrowded_flag = 0;
		iscrowded = "不是"
	}
	document.getElementById("iscrowded").innerHTML= iscrowded;
};
　　window.setInterval(ChangeClock,1000);