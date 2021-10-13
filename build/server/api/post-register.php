<?php
include './settings/connect.php';

$post = [
	'email' => get_post('email'),
	'password' => get_password('password'),
	'name' => get_post('name'),
	'phone' => get_post('phone'),
];

$q = "SELECT id FROM users WHERE email = '{$post['email']}'";
$user = sq_array($q);
if (!empty($user)) {
	ret_json(['res' => 0, 'message' => 'email already registered']);
}

insert_array('users', $post);

$jwt = generate_jwt(sq_id());
unset($post['password']);

$post['id'] = sq_id();

ret_json(['res' => 1, 'message' => 'account created', 'user' => $post, 'jwt' => $jwt]);
