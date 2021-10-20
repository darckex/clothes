<?php
include './settings/connect.php';

$filter = get_json('filter');
$seasons = get_post('seasons');

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

if (!empty($where)) {
	$where = "WHERE $where";
}

$q = "SELECT * FROM categories $where";
$categories = sq_array($q);

foreach ($categories as $k => $v) {
	$q = "SELECT COUNT(id) 'count'
	FROM products
	WHERE category_id = '{$v['id']}' $where_seasons ";
	$count = sq_array($q)[0]['count'];

	$categories[$k]['count'] = $count;
}

ret_json(['categories' => $categories]);
