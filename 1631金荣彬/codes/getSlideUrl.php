﻿<?php
header('Content-type:text/html; charset="utf-8"');

$url = 'http://course.jaxus.cn/api/category/53e19aea81cc22417c36c1f0/advs?channel=appstore&freeCourse=0&platform=2';

$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content);

echo $content;

?>