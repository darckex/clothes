<?php
include '../settings/connect.php';

$post = [
	'username' => get_post('username'),
	'password' => get_post('password')
];

$q = "SELECT id, username
FROM cms_users
WHERE username = '{$post['username']}' AND password = '{$post['password']}'";
$user = sq_array($q);
if (empty($user)) {
	ret_json(['res' => 0, 'message' => "Wrong Username or Password"]);
}

$user = $user[0];

$jwt = generate_jwt($user['id'], true);

ret_json(['res' => 1, 'user' => $user, 'jwt' => $jwt, 'message' => "Welcome to Favori CMS"]);
