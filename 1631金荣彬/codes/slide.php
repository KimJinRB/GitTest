<?php
header('Content-type:text/html; charset="utf-8"');

/*
API:
	getPics.php

		参数
		cpage : 获取数据的页数
*/
//1.将宽高定死,顺序添加每一条信息
//2.给所有的商品,添加购买商品,和加入购物车按钮,添加购物车功能.
$url = 'http://course.jaxus.cn/api/category/53e19aea81cc22417c36c1f0/advs?channel=appstore&freeCourse=0&platform=2';

$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>