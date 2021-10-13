<?php
// Insert into table array
function insert_array($table, $arr = [])
{
	$cols = array();
	$vals = array();

	foreach ($arr as $k => $v) {
		$cols[] = "`$k`";
		$vals[] = "'$v'";
	}

	$cols = implode(',', $cols);
	$vals = implode(',', $vals);

	$q = "INSERT INTO $table ($cols) VALUES ($vals)";
	$res = sq($q);
	return $res;
}

// update set arr to table where condition
function update_array($table, $arr = [], $condition = '')
{
	$values = [];

	foreach ($arr as $k => $v) {
		$values[] = " `$k`= '$v' ";
	}

	$values = implode(',', $values);

	if (!empty($condition)) {
		$condition = "WHERE $condition";
	}

	$q = "UPDATE $table SET $values $condition";
	$res = sq($q);

	return $res;
}

function select_array($table, $select = [], $cond = [], $extra = "")
{
	$where = [];
	foreach ($cond as $k => $v) {
		if (gettype($k) !== 'integer') {
			$where[] = "$k='$v'";
		} else {
			$where[] = "$v";
		}
	}

	$where = implode(' AND ', $where);
	$select = implode(', ', $select);

	if (!empty($where)) {
		$where = "WHERE $where";
	}

	$q = "SELECT $select
	FROM $table
	$where
	$extra";
	$res = sq_array($q);

	return $res;
}

// delete from where table where condition
function delete_query($table = '', $cond = "")
{
	$q = "DELETE FROM $table WHERE $cond";
	$res = sq($q);
	return $res;
}

// delete id
function delete_id($table, $id)
{
	delete_query($table, "id = '$id'");
}
