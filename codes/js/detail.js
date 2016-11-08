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
			 var oS_box=document.getElementById('s_box');
		var oS_position=oS_box.children[2];
		var oS_mark=oS_box.children[0];
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all')
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';

		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}

		oS_mark.onmousemove=function(event){
			var evt=event||window.event;

			var left=evt.offsetX-oS_position.offsetWidth/2;
			//console.log(left)
			
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			//console.log(left)
			oS_position.style.left=left+'px';


			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top=oS_box.offsetHeight-oS_position.offsetHeight
			}
			//console.log(top)
			oS_position.style.top=top+'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX=left/(oS_box.offsetWidth-oS_position.offsetWidth);
			var proportionY=top/(oS_box.offsetHeight-oS_position.offsetHeight);

			console.log(proportionX+':'+proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';

			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';

		}


		
		 }
 












