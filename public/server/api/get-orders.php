<?php
include './settings/connect.php';

$user_id = check_login();

$q = "SELECT * FROM user_orders WHERE user_id = '$user_id' ORDER BY id DESC";
$orders = sq_array($q);

ret_json(['res' => 1, 'orders' => $orders]);
