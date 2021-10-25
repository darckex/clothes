<?php
include '../settings/connect.php';

check_login(true, true);

$filter = get_post('filter');

$where = "";
if (!empty($filter)) {
	$array = [];
	foreach ($filter as $k => $v) {
		$array[] = "$k = '$v'";
	}
	$where .= implode(' AND ', $array);
}

if ($where != '') {
	$where = "WHERE $where";
}

$q = "SELECT id, name, phone, address, products, DATE_FORMAT(indate, '%Y-%m-%d') 'indate'
FROM user_orders
$where";
$orders = sq_array($q);

ret_json(['res' => 1, 'orders' => $orders]);
