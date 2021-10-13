<?php
function search_columns($cols = [], $search = '', $cond = '')
{
	$where = '';
	$search1 = explode(' ', $search);
	if (!empty($search)) {
		$where = [];
		foreach ($cols as $v) {
			foreach ($search1 as $v1) {
				if (!empty($v1)) {
					$where[] = "`$v` LIKE '%$v1%'";
				}
			}
		}
		$where = "(" . implode(' OR ', $where) . ")";
	}
	$cond = !empty($cond) ? "$cond" : '';

	if (!empty($where) and !empty($cond)) {
		$cond .= " AND";
	}

	if (!empty($where) or !empty($cond)) {
		$where = "HAVING $cond $where";
	}
	return $where;
}
