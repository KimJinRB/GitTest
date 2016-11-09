$(function() {
	//页面刷新时获取购物车数量;
	sc_car()

	$('.goods_box ul').on('click', '.addcarbtn', function() {

			//购物车数量增加;
			var id = this.id
			var first = $.cookie('goods') == null ? true : false; //判断是否有cookie进行添加
			var same = false; //判断时候已经追加
			//是否是第一次添加
			if(first) {
				//第一次添加,建立json结构。
				$.cookie('goods', '[{id:' + id + ',num:1}]');
				$.cookie('first', 'false');
			} else {
				var str = $.cookie('goods');
				var arr = eval(str);
				//遍历所有对象。如果id相同，让该商品数量递增 ;
				for(var attr in arr) {
					if(arr[attr].id == id) {
						alert("该商品只能购买一件");
						//arr[attr].num = arr[attr].num + 1; //让json结构中num自增。
						var cookieStr = JSON.stringify(arr); //将json对象转换成字符串.
						$.cookie('goods', cookieStr);
						same = true;
					}
				}
				//如果id不同，重新建立商品对象;

				if(!same) {
					var obj = {
						id: id,
						num: 1
					};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr);
				}
			}
			sc_car()
		})
		//购物车;
	function sc_car() {
		var sc_str = $.cookie('goods');
		if(sc_str) { //如果购物车cookie不为空。
			var sc_obj = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_obj) {
				sc_num = Number(sc_obj[i].num) + sc_num;
			}
			$('.sc_num').html(sc_num);
		}
	}

	function sc_msg() {
		$.ajax({
			url: 'data.json',
			type: 'GET',
			success: function(res) {
				var sc_str = $.cookie('goods');
				if(sc_str) {
					var sc_obj = eval(sc_str);
					var sc_num = 0;
					var html = '';
					for(var i in sc_obj) {
						html += '<li><div class="sc_goodsPic"><img src="' + res[sc_obj[i].id].img + '" alt=""></div><div class="sc_goodsTitle"><p>这是商品曲奇饼干</p></div><div class="sc_goodsBtn" id="' + sc_obj[i].id + '">购买</div><div class="sc_goodsNum">商品数量:' + sc_obj[i].num + '</div></li>'
					}
					$('.sc_right ul').html(html);
				}
			}
		})
	}
});
