<?php 
    session_start();

    if(isset($_SESSION['info'])){
        $data_arr = $_SESSION['info'];
    }else{
        $data_arr = array();
    }
 ?>

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

  <script src="js/bootstrap.min.js"></script>

</head>
<body>
    <div class="container">
        <h1 align="center">Danh sách người dùng</h1>
        <a href="add.php" class="btn btn-primary"> Thêm mới</a>
        <?php
        if(isset($_COOKIE['msg'])){
        ?>
        <div class="alert alert-success">
            <strong>Thông báo: </strong> <?php echo $_COOKIE['msg'];?>
        </div>
        <?php{?>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Họ và tên</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $i=0;
                    foreach ($data_arr as $value) {
                        $i++;
                    }
                ?>
                <tr>
                    <td><?php echo $i; ?></td>
                    <td><?php echo $value['code']; ?></td>
                    <td><?php echo $value['name']; ?></td>
                    <td>
                        <a href="detail.php?code=<?php echo $value['code'];?>" class="btn btn-succes">Detail</a>
                        <a href="del.php?code=<?php echo $value['code'];?>" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
                <?php}?>
            </tbody>
        </table>

    </div>

</body>
</html>