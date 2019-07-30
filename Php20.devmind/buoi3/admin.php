<?php 
	session_start();

	$_SESSION['role'] = "admin";
	if (isset($_SESSION['isLogin']) && $_SESSION['isLogin'] == true) {
		echo "<pre>";
		echo print_r($_SESSION);
		echo "</pre>";
	}
	else {
		echo "False";
	}
 ?>
  <a href="logout.php">logout</a>