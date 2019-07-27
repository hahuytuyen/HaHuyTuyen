<?php 
	echo md5('123456')."<br>";
	echo sha1('123456');

	$name = "Code your life";

	echo "<br>" . substr($name, 2,7);
	echo "<br>" . strstr($name, 'your');
	echo "<br>" . strpos($name, 'our');
 ?>