<?php
include './settings/connect.php';

$filter = get_json('filter');
$seasons = get_post('seasons');
$categories = get_post('categories');
$gender = get_post('gender');
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

if (!empty($gender)) {
	if (!empty($where)) $where = "$where AND ";

	$where .= "category_id IN (SELECT id FROM categories WHERE parent_id = '$gender')";
}

if (!empty($search)) {
	if (!empty($where)) $where = "$where AND ";

	$where .= "name LIKE '%$search%'";
}

if ($where != '') {
	$where = "WHERE $where";
}

$q = "SELECT *, (SELECT parent_id FROM categories WHERE id = category_id) 'gender_id'
FROM products
$where";
$products = sq_array($q);

ret_json(['products' => $products]);
