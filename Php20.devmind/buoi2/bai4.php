<?php 
	function tinh_tong($a,$b){
		echo "Tong = " . ($a+$b);
	}
	echo tinh_tong(10,20);

	function tinh_tong2($a,$b){
		return ($a+$b);
	}

	echo "<br>Tong = " . (tinh_tong2(20,20)+30);
 ?>