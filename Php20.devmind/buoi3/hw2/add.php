<?php 
    session_start();

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
    <form style="margin-left: 50px" method="POST" action="add_process.php" >
        <div class="form-group">
          <label for="exampleInputName1">Mã sinh viên</label>
          <input type="text" class="form-control" placeholder="Mãsinh viên" style="width: 500px" name="id">
        </div>
        <div class="form-group">
          <label for="exampleInputName1">Họ và tên</label>
          <input type="text" class="form-control" placeholder="Họ và tên" style="width: 500px" name="name">
        </div>
        <div class="form-group">
          <label for="exampleInputAge1">Tuổi</label>
          <input type="age" class="form-control" placeholder="Age" style="width: 500px" name="age">
        </div>
         <div class="form-group">
          <label for="exampleInputAge1">Số điện thoại</label>
          <input type="age" class="form-control" placeholder="Nhập số điện thoại" style="width: 500px" name="tel">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Địa chỉ email</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Nhập địa chỉ email" style="width: 500px" name="email">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</body>
</html>