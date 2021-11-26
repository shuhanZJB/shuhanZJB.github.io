/* 倒计时函数 */
function Countdown(con,int,divid){
	var online=new Date(int);
	var now=new Date();
	var lea=online.getTime()-now.getTime();
	var day=Math.floor(lea/(1000*60*60*24));		//距离的天数（计算还有多少天）
	var today = day + 1;							//判断依据
	var ms=(lea%(1000*60*60*24));					//今天的毫秒数
	var s = Math.floor(ms / 1000)+1;				//今天的秒数  剩下的毫秒数：(ms % 1000)
	var second = (s % 60);							//输出的秒数
	var m = Math.floor(s / 60)+1;					//今天的分钟数
	var minute = (m % 60);							//输出的分钟数
	var h = Math.floor(m / 60);						//今天的小时数
	var hour = (h % 60);							//输出的小时数
	if(today>1){
		divid.innerHTML="<b>距离"+con+"还有 "+day+" 天 "+'<br>'+h+':'+minute+':'+second+' 秒!'+"</b>";
	}else if(today==1){
		divid.innerHTML="<b>明天就是"+con+"，还有 "+'<br>'+h+':'+minute+':'+second+' 秒!'+"</b>";
	}else if(today==0){
		divid.innerHTML="<b>今天就是"+con+"</b>";
	}else{
	 	divid.innerHTML="<b>哎呀！"+con+"已经过了</b>";
    }
	// console.log(m);
	
};

// window.onload= setInterval(Countdown,1000);