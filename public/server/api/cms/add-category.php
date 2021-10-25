<?php
include '../settings/connect.php';

check_login(true, true);

$name = get_post('name');
$id = get_post('id');

$message = "Category updated";
if (empty($id)) {
	insert_array('categories', []);
	$id = sq_id();
	$message = "Category add";
}

update_array('categories', ['name' => $name], "id = '$id'");

ret_json(['res' => 1, 'message' => $message]);
