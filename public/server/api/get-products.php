<?php
include './settings/connect.php';

$filter = get_json('filter');
$seasons = get_post('seasons');
$categories = get_post('categories');
$search = get_post('search');

$where = "";
if (!empty($filter)) {
	$array = [];
	foreach ($filter as $k => $v) {
		$array[] = "$k = '$v'";
	}
	$where .= implode(' AND ', $array);
}

if (!empty($seasons)) {
	if (!empty($where)) $where = "$where AND ";

	$seasons = implode(',', $seasons);

	$where .= "season_id IN ($seasons)";
}

if (!empty($categories)) {
	if (!empty($where)) $where = "$where AND ";

	$categories = implode(',', $categories);

	$where .= "category_id IN ($categories)";
}

if (!empty($search)) {
	if (!empty($where)) $where = "$where AND ";

	$where .= "name LIKE '%$search%'";
}

if ($where != '') {
	$where = "WHERE $where";
}

$q = "SELECT *
FROM products
$where";
$products = sq_array($q);

ret_json(['products' => $products]);
