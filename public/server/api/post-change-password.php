<?php
include './settings/connect.php';

$email = get_post('email');
$token = get_post('token');
$password = get_password('password');

$q = "UPDATE users
SET password = '$password', token = NULL
WHERE email = '$email' AND token = '$token' AND token IS NOT NULL";
sq($q);
if ($db->affected_rows == 0) {
	ret_json(['res' => 0, 'message' => 'no cheating please!']);
}

ret_json(['res' => 1, 'message' => 'Password reset']);
