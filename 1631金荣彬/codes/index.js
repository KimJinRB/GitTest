//产品加载
function ajaxGoods(obj, eq, path) {
	$.ajax({
				type: "get",
				url: path,
				success: function(data) {
						var html = "";
						for(var i = 0; i < data.length; i++) {
							html += "<dl><dt><a href='html/detail.html'><img src='" +
								data[i].img + "'/></a></dt><dd><a href='#'><strong>" +
								data[i].title + "</strong></a><div class = 'lis_1'>Q币价<span class = 't2'>&nbsp;&nbsp;&nbsp;" +
								data[i].Qbi + "</span><span class = 't2_fwd'>Q币</span></div><div class = 'lis_1'>财付通价<span class = 't2_fwd'>&nbsp;&nbsp;￥</span><span class = 't2'>" +
								data[i].mony + "</span></div><div class = 'lis_2'><a class = 'addcarbtn' id = '" + data[i].id + "'>立即购买</a></div></dd></dl>"
						}
						obj.eq(eq).html(html);
						$(".content .con_main .con dl").mouseenter(function() {
							$(this).css("background", "red");
							$(this).find("dd").find("strong").css("color", "white");
							$(this).find("dd").find("div").css("color", "white");
							$(this).find("dd").find("span").css("color", "yellow");
							$(this).find("dd").find(".lis_2").find("a").css("color", "black");
							$(this).find("dd").find(".lis_2").find("a").css("background", "yellow");
						});
						$(".content .con_main dl").mouseleave(function() {
							$(this).css("background", "white");
							$(this).find("dd").find("strong").css("color", "black");
							$(this).find("dd").find("div").css("color", "black");
							$(this).find("dd").find("span").css("color", "red");
							$(this).find("dd").find(".lis_2").find("a").css("color", "white");
							$(this).find("dd").find(".lis_2").find("a").css("background", "red");
						});
				}			
		});
}





