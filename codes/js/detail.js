function ajaxList(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){								
				html += "<li pos='51' itemid='1376'><a target='_blank' href='#'><img class='" + 
				data[i].class + "' src='" + 
				data[i].img + "' width='60' height='60' alt='诺克萨斯之手 德莱厄斯 铁血将军礼包'></a><p><a target='_blank' href='#'><em class='fwb'>" + 
				data[i].name + "</em></a><br>Q币：<span class='font_red'>" + 
				data[i].Qbi + "</span><span class='font_red'>Q币</span><br>财付通：<span class='font_red'>¥</span><span class='font_red'>" + 
				data[i].many + "</span></p></li>"
			}
			obj.eq(eq).html(html);
		}
	});
}

 $(function(){
 	$(".btn_goods_zoom").click(function(){
 		$("#orgin").css("display", "block")
 	})
 	$("#img_btn").click(function(){
 		$("#orgin").css("display", "none")
 	})
 });

 window.onload=function(){
			 var small=document.getElementById("small");
			 var big= document.getElementById("big");
			 var smallpic=document.getElementById("smallpic");
			 var bigpic= document.getElementById("bigpic");
			 var mask= document.getElementById("mask");
			 
			 var scale; //缩放比例
			 
			 small.onmouseover=function(){
				  mask.style.display="block";
				  big.style.display="block";
					
					scale= bigpic.offsetWidth/ small.offsetWidth ;
					//console.log(scale);
					//console.log(bigpic.offsetWidth);
					//console.log(small.offsetWidth);
					
					mask.style.width= big.offsetWidth/scale +"px";
					mask.style.height= big.offsetHeigth/scale+"px";
					mask.style.cursor="pointer";
			 }
			 small.onmouseout=function(){
				 mask.style.display="none";
				 big.style.display="none";
			 }
			 small.onmousemove=function(evt){
				  evt= evt||window.event;
				  // mask.style.left= evt.x- mask.offsetWidth/2 +"px";
					// mask.style.top= evt.y- mask.offsetHeight/2 +"px";
					var left= evt.x- mask.offsetWidth/2;
					var top= evt.y- mask.offsetHeight/2;
					if(left<0){
						left=0;
					}
					if(top<0){
						top=0;
					}
					if(left>= small.offsetWidth- mask.offsetWidth){
						left= small.offsetWidth- mask.offsetWidth;
					}
					if(top>=small.offsetHeight-mask.offsetHeight){
						top=small.offsetHeight-mask.offsetHeight
					}

					mask.style.left= left+"px";
					mask.style.top= top+"px";
					
					bigpic.style.left= -mask.offsetLeft* scale +"px";
					bigpic.style.top= -mask.offsetTop *scale +"px";
			 }
		 }
 window.onload=function(){
			 var small=document.getElementById("small");
			 var big= document.getElementById("big");
			 var smallpic=document.getElementById("smallpic");
			 var bigpic= document.getElementById("bigpic");
			 var mask= document.getElementById("mask");
			 
			 var scale; //缩放比例
			 
			 small.onmouseover=function(){
				  mask.style.display="block";
				  big.style.display="block";
					
					scale= bigpic.offsetWidth/ small.offsetWidth ;
					//console.log(scale);
					//console.log(bigpic.offsetWidth);
					//console.log(small.offsetWidth);
					
					mask.style.width= big.offsetWidth/scale +"px";
					mask.style.height= big.offsetHeigth/scale+"px";
					mask.style.cursor="pointer";
			 }
			 small.onmouseout=function(){
				 mask.style.display="none";
				 big.style.display="none";
			 }
			 small.onmousemove=function(evt){
				  evt= evt||window.event;
				  // mask.style.left= evt.x- mask.offsetWidth/2 +"px";
					// mask.style.top= evt.y- mask.offsetHeight/2 +"px";
					var left= evt.x- mask.offsetWidth/2;
					var top= evt.y- mask.offsetHeight/2;
					if(left<0){
						left=0;
					}
					if(top<0){
						top=0;
					}
					if(left>= small.offsetWidth- mask.offsetWidth){
						left= small.offsetWidth- mask.offsetWidth;
					}
					if(top>=small.offsetHeight-mask.offsetHeight){
						top=small.offsetHeight-mask.offsetHeight
					}

					mask.style.left= left+"px";
					mask.style.top= top+"px";
					
					bigpic.style.left= -mask.offsetLeft* scale +"px";
					bigpic.style.top= -mask.offsetTop *scale +"px";
			 }
		 }













