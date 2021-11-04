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

$q = "SELECT uo.id, uo.name, uo.phone, uo.address, uo.products, DATE_FORMAT(uo.indate, '%Y-%m-%d %h:%i %p') 'indate',
u.email
FROM user_orders uo
LEFT JOIN users u ON u.id = uo.user_id
$where
ORDER BY id DESC";
$orders = sq_array($q);

ret_json(['res' => 1, 'orders' => $orders]);
