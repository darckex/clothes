<?php
include './settings/connect.php';

$post = [
	'email' => get_post('email'),
	'password' => get_password('password'),
	'name' => get_post('name'),
	'phone' => get_post('phone'),
	'address' => get_post('address'),
];

$q = "SELECT id FROM users WHERE email = '{$post['email']}'";
$user = sq_array($q);
if (!empty($user)) {
	ret_json(['res' => 0, 'message' => 'email already registered']);
}

insert_array('users', $post);

$id = sq_id();
$q = "SELECT id, name, email, phone, address
FROM users
WHERE id = '$id'";
$user = sq_array($q)[0];
$jwt = generate_jwt($user['id']);

ret_json(['res' => 1, 'message' => 'account created', 'user' => $user, 'jwt' => $jwt]);
