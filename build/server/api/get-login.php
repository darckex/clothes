<?php
include './settings/connect.php';

$email = get_post('email');
$password = get_password('password');

$q = "SELECT id, name, email, phone
FROM users
WHERE email = '$email' AND password = '$password'";
$user = sq_array($q);
if (empty($user)) {
	ret_json(['res' => 0, 'message' => 'wrong email or password']);
} else {
	$user = $user[0];

	$jwt = generate_jwt($user['id']);

	ret_json(['res' => 1, 'user' => $user, 'jwt' => $jwt]);
}
