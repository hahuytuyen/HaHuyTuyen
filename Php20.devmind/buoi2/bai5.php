<?php 
	$name = array('Hau', 'Nam' , 'Son');
	var_dump(in_array('Hau' , $name));
	//ket qua trả về là true

	var_dump(in_array('Zent', $name));
	//ket quả trả về là False

	array_push($arr, "new 1","new 2", "abc");

	$del = array_pop($arr); //Tra về phần tử đã xóa

	echo "Phần tử bị xóa là: " . $del;

	echo "<pre>";
		print_r($arr);
	echo "</pre>"; 
 ?>