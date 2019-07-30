<?php 
    session_start();

   if(!empty($_GET['id']))
	{
    $data_arr = getStudent($_GET['id']);
    $is_update_action  = true;
	}

?>