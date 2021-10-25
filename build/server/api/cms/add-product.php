<?php
include '../settings/connect.php';

check_login(true, true);

$id = get_post('id');
$post = get_json('json');
$old_image = get_post('old_image');
$image = upload_file('image', true);


if (!empty($image)) {
	$post['image'] = $image['save_name'];
} else if (!empty($old_image)) {
	$post['image'] = $old_image;
}

$message = "Product update";
if (empty($id)) {
	$message = "Product added";
	insert_array('products');
	$id = sq_id();
}

update_array('products', $post, "id = '$id'");

ret_json(['res' => 1, 'message' => $message]);
