<?php
include './settings/connect.php';

$email = get_post('email');
$token = get_token();

$q = "SELECT id FROM users WHERE email = '$email'";
$user = sq_array($q);
if (empty($user)) {
	ret_json(['res' => 0, 'message' => "email $email not found"]);
}

update_array('users', ['token' => $token], "email = '$email'");

send_message([
	'email' => $email,
	'token' => $token
], [
	'from' => 'forgot@favorilb.com',
	'to' => $email,
	'subject' => 'Password reset token'
]);

ret_json(['res' => 1, 'message' => "Reset token sent to $email"]);
