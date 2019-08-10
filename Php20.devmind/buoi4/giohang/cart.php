<?php 
    require_once('data.php');
    session_start();
    $products = $_SESSION['cart'];
?>




<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Index</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <h1 align="center">-- Giỏ hàng --</h1>
        <a href="index.php" class="btn btn-danger">Home</a>
        <table class="table">
            <thead>
                <th>code</th>
                <th>name</th>
                <th>price</th>
                <th style="text-align: center;">quantity</th>
                <th>image</th>
                <th>money</th>
                <th>#</th>
            </thead>
            <?php 
                $tong_tien = 0;
            foreach ($products as $code => $product) {
               $tong_tien += $product['price']*$product['quantity'];
             ?>
            <tr>
                <td><?= $code ?></td>
                <td><?= $product['name'] ?></td>
                <td><?= number_format($product['price'] )?> VNĐ</td>
                <td align="center"> 
                    <a href="remove2.php?code=<?= $code ?>" class="btn btn-success">-</a>
                        <?= $product['quantity'] ?>
                    <a href="add2cart.php?code=<?= $code ?>" class="btn btn-success">+</a>
                </td>
                <td><img src="img/<?= $product['image'] ?>"></td>
                <td><?= number_format($product['price']*$product['quantity'])?> VNĐ</td>
                <td>
                    <a href="remove.php?code=<?= $code ?>" class="btn btn-primary">Remove</a>
                </td>
                
            </tr>
            <?php } ?>
            <td colspan="5" style="font-weight: bold;color: red" align="right">All:</td>
            <td style="font-weight: bold; color: red" ><?= number_format($tong_tien) ?> VNĐ</td>
            <td></td>

        </table>   
    </div>
</body>
</html>