<?php 
	$info = array();
	$info["name"] = "Ha Huy Tuyen";
	$info["id"] = "123";
	$info["mobile"] = "0352712421";
	$info["email"] = "1@gmail.com";
	$info["code"] = "0101";
	$info["subject"] = array('Toan','Ly','Hoa');

	echo "<pre>";
		print_r($info);
	echo "</pre>";
	echo "Xin chao " . $info["name"];
	echo "<br>";
	echo "Mon hoc so 1: " . $info['subject'][0];
	echo "<br>Mon hoc so 2: " . $info['subject'][1];
 ?>