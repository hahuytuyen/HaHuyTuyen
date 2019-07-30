<?php 
	session_start();
	if (isset($_POST['user'])) {
		if ($_POST['user'] == "admin" && $_POST["pwd"] == "123"){
			$_SESSION['isLogin'] = true;
			header('location: admin.php');
		}else{
			$_SESSION['isLogin'] = false;
			echo "False";
			header('location:index.php');
			setcookie('msg', 'false', time() + 1);
		}
		echo "<br>";
		print_r($_SESSION);
	}else{
		$_SESSION['isLogin'] = false;
	}
 ?>