
<?php 
    require_once('data.php');
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
        <h1 align="center">------- Trang chủ -------</h1>
        <a href="cart.php" class="btn btn-info">view cart</a>
        <table class="table">
            <thead>
                <th>code</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>image</th>
                <th>#</th>
            </thead>
            <?php foreach ($products as $code => $product) {
             ?>
            <tr>
                <td><?= $code ?></td>
                <td><?= $product['name'] ?></td>
                <td><?= number_format($product['price'])?> VNĐ</td>
                <td><?= $product['quantity'] ?></td>
                <td><img src="img/<?= $product['image'] ?>"></td>
                <td>
                    <a href="add2cart.php?code=<?= $code ?>" class="btn btn-primary">Thêm vào giỏ hàng</a>
                </td>
                
            </tr>
            <?php } ?>
        </table>   
    </div>
</body>
</html>