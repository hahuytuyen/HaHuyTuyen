<?php 
	session_start();


	$code = $_GET['code'];

	if($_SESSION['cart'][$code]['quantity'] > 1){
		$_SESSION['cart'][$code]['quantity'] -=1;
	}else{
		unset($_SESSION['cart'][$code]);
	}

	

	header('Location: cart.php');

	
	
 ?>