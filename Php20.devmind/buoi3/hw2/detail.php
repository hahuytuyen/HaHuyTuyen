<?php
   session_start();
   
   echo 'Mã sinh viên: '.$_POST['id'].'<br>';
   echo 'Họ và tên: '.$_POST['age'].'<br>';
   echo 'Tuổi: '.$_POST['age'].'<br>';
   echo 'Số điện thoại: '.$_POST['tel'].'<br>';
   echo 'Email: '.$_POST['email'].'<br>';

?>