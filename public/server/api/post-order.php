<?php
include './settings/connect.php';

$user_id = check_login(false);

if (empty($user_id)) {
	ret_json(['res' => 0, 'message' => "Please login first"]);
}

$cart = get_post('cart');
$post_order = [
	'name' => get_post('name'),
	'phone' => get_post('phone'),
	'address' => get_post('address'),
	'user_id' => $user_id,
	'products' => count($cart)
];

insert_array('user_orders', $post_order);
$order_id = sq_id();

foreach ($cart as $k => $v) {
	$post = [
		'order_id' => $order_id,
		'product_id' => $v['id'],
		'quantity' => $v['quantity'],
		'size' => $v['size'],
		'color' => $v['color'],
	];
	insert_array('order_products', $post);
}

ret_json(['res' => 1, 'message' => 'Order Added']);
