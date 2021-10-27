<?php
include './settings/connect.php';

$filter = get_json('filter');
$seasons = get_post('seasons');
$gender = get_post('gender');

$where = "";
if (!empty($filter)) {
	$array = [];
	foreach ($filter as $k => $v) {
		$array[] = "$k = '$v'";
	}
	$where .= implode(' AND ', $array);
}

$where_seasons = "";
if (!empty($seasons)) {

	$seasons = implode(',', $seasons);
	$where_seasons = "AND season_id IN ($seasons)";
}

$where_gender = "";
if (!empty($gender)) {
	$where_gender = "AND gender = '$gender'";
}

if (!empty($where)) {
	$where = "WHERE $where";
}

$q = "SELECT *
FROM categories
$where
ORDER BY name";
$categories = sq_array($q);

foreach ($categories as $k => $v) {
	$q = "SELECT COUNT(id) 'count'
	FROM products
	WHERE category_id = '{$v['id']}' $where_seasons $where_gender";
	$count = sq_array($q)[0]['count'];

	$categories[$k]['count'] = $count;
}

ret_json(['res' => 1, 'categories' => $categories]);
