<?php
    header('Access-Control-Allow-Origin:*');
    $arr=array("Id"=>"10", "Name"=>"user", "state"=>"1");
    echo json_encode($arr);
?>