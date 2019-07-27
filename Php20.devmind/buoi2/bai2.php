<?php 

	$info = array();
	$info["name"] = "Ha Huy Tuyen";
	$info["id"] = "123";
	$info["mobile"] = "0352712421";
	$info["email"] = "1@gmail.com";
	$info["code"] = "0101";

	echo "<pre>";
		print_r($info);
	echo "</pre>";

	echo "Xin chao" . $info["name"];
	echo "<br>";

	foreach ($info as $key => $value) {
		echo "<br> Key: " .$key . " - Value: ".$value;
	}
	echo "<br>";
	foreach ($info as $key) {
		echo "<br> Key: " .$key;
	}
 ?>