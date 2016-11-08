
$(function(){
		
	$(".cart_other_box").find(".title_box").find("a").mouseenter(function(){
		$(".cart_other_box").find(".title_box").find("a").attr("class","");
		$(this).attr("class","focus").css("color","black");
		if($(this).parent().index() == 0){
			$("#cart_other_tab_0").css("display", "block");
			$("#cart_other_tab_1").css("display", "none");
		}
		if($(this).parent().index() == 1){
			$("#cart_other_tab_1").css("display", "block");
			$("#cart_other_tab_0").css("display", "none");
		}
	});
});




