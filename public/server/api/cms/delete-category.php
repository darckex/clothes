<?php
include '../settings/connect.php';
check_login(true, true);

$id = get_post('id');

delete_id('categories', $id);

ret_json(['res' => 1, 'message' => "Category deleted"]);
