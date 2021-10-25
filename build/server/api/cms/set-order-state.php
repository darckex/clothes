<?php
include '../settings/connect.php';

check_login(true, true);

$id = get_post('id');
$state = get_post('state', 'int');

update_array('user_orders', [
	'state' => $state
], "id = '$id'");

switch ($state) {
	case 1:
		$message = "Order completed";
		break;
	case 2:
		$message = "Order canceled";
		break;
}

ret_json(['res' => 1, 'message' => $message]);
