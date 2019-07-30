<?php

     session_start();

     session_destroy(); // Xóa toàn bộ session đã lưu.
     header('location: index.php')
?>