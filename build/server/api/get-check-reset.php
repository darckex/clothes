<?php
include './settings/connect.php';

$token = get_post('token');
$email = get_post('email');

$q = "SELECT id FROM users WHERE email = '$email' AND token = '$token' AND token IS NOT NULL";
$user = sq_array($q);
if (empty($user)) {
	ret_json(['res' => 0, 'message' => 'Reset token is invalid']);
}

ret_json(['res' => 1, 'message' => 'Enter new password']);
