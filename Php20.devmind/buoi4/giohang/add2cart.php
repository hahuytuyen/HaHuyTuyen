<?php 
	session_start();
	require_once('data.php');

	$code = $_GET['code'];
	echo $code;
	// kiểm tra
	if(isset($_SESSION['cart'][$code])){
		$_SESSION['cart'][$code]['quantity']++;
	}else{
		$product = $products[$code];
		echo "<pre>";
			print_r($product);
		echo"</pre>";

		$product['quantity'] = 1;

		$_SESSION['cart'][$code] = $product;

	}

		echo "Sản phẩm trong giỏ hàng bao gồm: ";
		echo "<pre>";
		print_r($_SESSION);
		echo "</pre>";
		// session_destroy();
	

	 header('Location: cart.php');
?>