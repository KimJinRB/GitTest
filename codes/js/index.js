
//AJAX内容加载(主体内容/产品)

function ajaxGoods(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += "<dl id = '" + data[i].id + "'><dt><a href='http://10.9.160.130/codes/html/detail.html'><img src='" + 
				data[i].img + "'/></a></dt><dd><a href='#'><strong>" + 
				data[i].title + "</strong></a><div class = 'lis_1'>Q币价<span class = 't2'>&nbsp;&nbsp;&nbsp;" + 
				data[i].Qbi + "</span><span class = 't2_fwd'>Q币</span></div><div class = 'lis_1'>财付通价<span class = 't2_fwd'>&nbsp;&nbsp;￥</span><span class = 't2'>" + 
				data[i].mony + "</span></div><div class = 'lis_2'><a href='#'>立即购买</a></div></dd></dl>"			
			}
			obj.eq(eq).html(html);
			$(".content .con_main .con dl").mouseenter(function(){
				$(this).css("background", "red");
				$(this).find("dd").find("strong").css("color", "white");
				$(this).find("dd").find("div").css("color", "white");
				$(this).find("dd").find("span").css("color", "yellow");
				$(this).find("dd").find(".lis_2").find("a").css("color", "black");
				$(this).find("dd").find(".lis_2").find("a").css("background", "yellow");
			})
			$(".content .con_main dl").mouseleave(function(){
				$(this).css("background", "white");
				$(this).find("dd").find("strong").css("color", "black");
				$(this).find("dd").find("div").css("color", "black");
				$(this).find("dd").find("span").css("color", "red");
				$(this).find("dd").find(".lis_2").find("a").css("color", "white");
				$(this).find("dd").find(".lis_2").find("a").css("background", "red");
			})
		}		
	});	
}

//加载热门排行产品

function ajaxHot(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			//alert(data);
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += "<li class = 'small'><dl><dt><a href = 'http://10.9.160.130/codes/html/detail.html'><img src = '" + 
				data[i].img + "'/></a></dt><dd><span class = '" + 
				data[i].class + "'>" +
				data[i].num + "</span><p><a href = '#'>" + 
				data[i].name + "</a></p></dd><p class = 'big_1'>Q币价：" + 
				data[i].Qb + "   Q币</p></dl><p class = 'big_2'><span>财付通：<strong>￥" + 
				data[i].many + "</strong></span></p></li>"
			}
			obj.eq(eq).html(html);
			
			//热门排行运动
			var bNow = 0;
			var bigs = $(".content").find(".con_hot").find("ul").find("li");
			bigs.eq(0).attr("class", "big");
			bigs.mouseenter(function(){ 
				bNow = $(this).index(); 
				bigs.attr("class", "small");
				$(this).attr("class", "big");				
			});	
			
		}
	});
}

//限时抢购加载
//<li><div class = 'time'>剩余<span>2</span>天<span>12</span>时<span>12</span>分<span>02</span>秒</div><div class = 'sub1'><a href='#'><img src='#'></a><p class = "many">直降<span>36.23元</span></p><p class = 'name'><a href='#'>猩红之月 锤石</a></p></div><div class = 'sub2'><p>财付通<span><em>32.77</em>元</span></p><p class = 'old'>原价：69Q币</p><a href='#' class = 'btn_buy'></a></div></li>

function ajaxBuy(obj, eq, path){
	var d = new Date;
	
	$.ajax({		
		type: "get",
		url: path,
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				//timer();
				html += "<li><div class = 'time'>剩余<span></span>天<span></span>时<span></span>分<span></span>秒</div><div class = 'sub1'><a href='http://10.9.160.130/codes/html/detail.html'><img src='" + 
				data[i].img + "'></a><p class = 'many'>直降<span>" + 
				data[i].down + "元</span></p><p class = 'name'><a href='#'>" + 
				data[i].name + "</a></p></div><div class = 'sub2'><p>财付通<span><em>" + 
				data[i].now + "</em>元</span></p><p class = 'old'>原价：" + 
				data[i].old + "Q币</p><a href='#' class = 'btn_buy'></a></div></li>"
				
			}
			obj.eq(eq).html(html);
			timer();
		}
	});	
}

function timer(){
	var d = new Date(2016,10,11);
	timer = setInterval(function(){
		var t = new Date;
		if(t == d){
			clearInterval(timer);
			t = d;
		}
		var i = (d - t)/1000;
		var day = parseInt(i/3600/24);
		var hour = parseInt(i/3600%24);
		var min = parseInt(i%3600/60);
		var scend = parseInt((i%3600)%60);		
		var t = $(".content .con_main .buy .time");
				//var span = $(".content .con_main .buy .time span");					
		for(var j = 0; j < 4; j++){
			t.eq(j).find("span").eq(0).empty();
			t.eq(j).find("span").eq(1).empty();
			t.eq(j).find("span").eq(2).empty();
			t.eq(j).find("span").eq(3).empty();				
			t.eq(j).find("span").eq(0).append(day);
			t.eq(j).find("span").eq(1).append(hour);
			t.eq(j).find("span").eq(2).append(min);
			t.eq(j).find("span").eq(3).append(scend);
		}
		
	},1000);	
}

//腾讯游戏数据加载
function ajaxGame(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){								
				html += "<a class='lnk spr' target='_blank' href='" + 
				data[i].href + "'>" + 
				data[i].name + "</a>"								
			}
			obj.eq(eq).html(html);
		}
	});
}





$().extend("size", function(){
	return this.elements.length;
});

$(function(){

	//轮播图
	var aBtn = $(".banner_right").find(".btn").find("li");
	var oUl = $(".banner_right").find(".div_move");
	var aLi = oUl.find("li");
	var btna = $(".banner_right").find(".btn").find(".btna");
	var iNow = 0; //记录当前被选中的按钮
	var timer = 0; //记录定时器
	//aBtn.click(function(){
		//iNow = $(this).index();
		//tab();
	//});

	//鼠标移入事件
	aBtn.mouseenter(function(event) {
		/* Act on the event */
		clearInterval(timer);
		iNow = $(this).index();
		$(this).siblings().stop().tab();
		//tab();
	});
	aBtn.mouseleave(function(event) {
		/* Act on the event */
		timer = setInterval(timerInner, 2000);
	});	
	btna.mouseenter(function(event) {
		/* Act on the event */
		clearInterval(timer);
	});
	btna.mouseleave(function(event) {
		/* Act on the event */
		timer = setInterval(timerInner, 2000);
	});	

	function timerInner(){		
		iNow++;		
		tab();
	}

	timer = setInterval(timerInner, 2000);

	//上一张
	$(".banner_right").find(".btn").find("#pre").click(function(){
		clearInterval(timer);
		iNow -= 1
		tab();
	});

	//下一张
	$(".banner_right").find(".btn").find("#next").click(function(){
		clearInterval(timer);
		iNow += 1;
		tab();
	});
	
	//鼠标移入停止事件
	$(".div_img").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	});

	function tab(){
		aBtn.attr("class", "");
		aBtn.eq(iNow).attr("class", "active");
	
		if(iNow >= 4){
			aBtn.eq(0).attr("class", "active");
		}
		if(iNow <= -1){
			aBtn.eq(3).attr("class", "active");
			iNow = 3;
		}

		oUl.animate({top: -245 * iNow}, function(){
			if(iNow >= 4){
				iNow = 0;
				oUl.css("top", 0);
			}			
		});
	}

		
	
	//二维码隐藏于显示
	$(".top").find(".top_login").find(".top_link").find(".c").find(".lost").hover(function(){
		$(".top").find(".top_login").find(".top_link").find("#code").css("display", "block")}, 
		function(){$(".top").find(".top_login").find(".top_link").find("#code").css("display", "none")
		});
	
	//全部菜单的隐藏于显示
	$(".banner .banner_nav .box1").hover(function(){
		$("#sider").removeClass("actives")},
		function(){$("#sider").addClass("actives")
		});
	
	//导航栏背景变色
	var cNow = 0;
	var cigs = $(".banner").find(".banner_nav").find(".box2").find("ul").find("li");
	cigs.mouseenter(function(){ 
		cNow = $(this).index(); 		
		$(this).attr("class", "change");
	});
	cigs.mouseleave(function(){
		cigs.attr("class", "");
	});	
		
	//主体内容鼠标划入的变色
	var aNow = 0;
	var aigs = $(".content").find(".con_main").find(".title").find("ul").find("li");
	aigs.mouseenter(function(){ 
		aNow = $(this).index(); 
		aigs.attr("class", "");
		$(this).attr("class", "style");				
	});	
	
	//产品列表加载
	var ajaxLi = $(".content .con_main .prod .title li");
 	ajaxLi.eq(0).mouseenter(function(){
 		ajaxGoods($(".con"), 0, "../codes/json/data.json");
 	});
 	ajaxLi.eq(1).mouseenter(function(){
 		ajaxGoods($(".con"), 0, "../codes/json/prod1.json");
 	});
 	ajaxLi.eq(2).mouseenter(function(){
 		ajaxGoods($(".con"), 0, "../codes/json/prod2.json");
 	});
	
	//腾讯游戏菜单隐藏与显示
	$(".top .top_game .tx_game").hover(function(){$(".top .top_game .box").css("display", "block")},function(){$(".top .top_game .box").css("display", "none")});
	$(".top .top_game .box").hover(function(){$(this).css("display", "block")},function(){$(this).css("display", "none")});

	//全部菜单的隐藏与显示              
	$(".banner .banner_nav .box1 #sider ul li").hover(function(){
		$(this).find(".i_list").css("display", "block").css("left","207")},function(){
		$(this).find(".i_list").css("display", "none");
		});
	$(".banner .banner_nav .box1 #sider ul li .i_list").hover(function(){
		$(this).css("display", "block").css("left","207")},function(){
		$(this).css("display", "none");
		});
		
		
		
});

 








