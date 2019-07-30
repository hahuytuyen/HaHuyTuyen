<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

  <script src="js/bootstrap.min.js"></script>

</head>
<body>
    <form style="margin-left: 50px" method="POST" action="post.php" >
        <div class="form-group">
          <label for="exampleInputName1">Name</label>
          <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Name" style="width: 500px" name="name">
        </div>
        <div class="form-group">
          <label for="exampleInputAge1">Age</label>
          <input type="age" class="form-control" id="exampleInputage1" placeholder="Age" style="width: 500px" name="age">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="width: 500px" name="password">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 500px" name="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputAddress1">Address</label>
          <input type="address" class="form-control" id="exampleInputAddress1" placeholder="Address" style="width: 500px" name="address">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</body>
</html>