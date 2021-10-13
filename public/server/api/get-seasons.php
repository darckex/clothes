<?php
include './settings/connect.php';

$filter = get_json('filter');

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

$q = "SELECT * FROM seasons $where";
$seasons = sq_array($q);

ret_json(['seasons' => $seasons]);
