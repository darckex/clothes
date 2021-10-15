<?php
include './settings/connect.php';

$user_id = check_login();

$post = [
	'name' => get_post('name'),
	'phone' => get_post('phone'),
	'address' => get_post('address')
];

update_array('users', $post, "id = '$user_id'");

ret_json(['res' => 1, 'message' => "Profile information updated", 'user' => $post]);
