<?php
function get_property_price($id, $date)
{
	if (empty($date)) {
		return 0;
	}

	$q = "SELECT SUM(pp.price * ( DATEDIFF(IF(pp.to_date > '{$date['to']}', '{$date['to']}', pp.to_date), IF(pp.from_date < '{$date['from']}', '{$date['from']}', pp.from_date)) + 1 )) 'price'
	FROM property_prices pp
	WHERE pp.property_id = '{$id}' AND ('{$date['from']}' BETWEEN pp.from_date AND pp.to_date OR '{$date['to']}' BETWEEN pp.from_date AND pp.to_date)";
	$price = sq_array($q);
	$price = !empty($price) ? $price[0]['price'] : 0;
	return floatval($price);
}

function get_property_booked($id, $date)
{
	$q = "SELECT id
	FROM user_booking_properties
	WHERE property_id = '$id' AND ((from_date >= '{$date['from']}' AND to_date <= '{$date['to']}')
	OR (from_date >= '{$date['from']}' AND from_date <= '{$date['to']}')
	OR (to_date >= '{$date['from']}' AND to_date <= '{$date['to']}')
	OR (from_date <= '{$date['from']}' AND to_date >= '{$date['to']}'))";
	$booked = sq_array($q);
	$booked = !empty($booked) ? $booked[0]['id'] : 0;
	return $booked;
}

function check_project_owner($user_id, $id)
{
	$q = "SELECT id FROM projects WHERE user_id = '$user_id' AND id = '$id'";
	$project = sq_array($q);
	return !empty($project);
}

function check_property_owner($user_id, $id)
{
	$q = "SELECT id FROM projects WHERE user_id = '$user_id' AND id = (SELECT project_id FROM properties WHERE id = '$id')";
	$project = sq_array($q);
	return !empty($project);
}

function get_user_rate($user_id)
{
	$q = "SELECT rate
	FROM users_dollar_rate
	WHERE user_id = '$user_id' OR user_id = 0
	ORDER BY user_id DESC
	LIMIT 0, 1";
	$rate = sq_array($q)[0]['rate'];

	return $rate;
}

function get_notification_tokens($ids = [])
{
	if (empty($ids)) return [];

	if (is_array($ids)) {
		$ids = implode(',', $ids);
	}

	$tokens = [];
	$q = "SELECT token FROM user_notification_tokens WHERE user_id in ($ids)";
	$tokens = sq_array($q, ['k' => 'token']);
	$tokens = array_keys($tokens);

	return $tokens;
}
