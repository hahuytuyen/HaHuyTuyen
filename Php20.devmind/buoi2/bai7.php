<?php 
	date_default_timezone_get('Asia/Ho_Chi_Minh');
	echo time();
	echo "<br>";
	$time = 1563976166;
	echo date('d/m/Y H:i:s',time());

	echo "<br>";
	echo date('d/m/Y H:i:s',$time);

	echo "<br>";
	$dateint = mktime(0, 0, 0, 7, 24+200, 2019);

	echo date('d/m/Y', $dateint);
 ?>