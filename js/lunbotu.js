var nowImg=1;//定义变量表示当前要播放的是第几幅图，初始化为一，即从第一幅图开始
	function show(d)
	{
		if(d)
		{//如果传递的有参数
		nowImg=d;
		window.clearTimeout(tid);//清除计时器
		}
	for(var i=1;i<=4;i++)
	{
		if(nowImg==i)
		{
			document.getElementById("img"+i).style.display="block";
			document.getElementById("link"+i).className="a2";
		}
		else
		{
			document.getElementById("img"+i).style.display="none";
			document.getElementById("link"+i).className="a1";
		}
	}
	if(nowImg==4)
		nowImg=1;
	else
		nowImg++;
	tid=window.setTimeout('show()',2000);
	}
	//此处必须定义成全局变量来存放设置计时器返回的id号；