<?php
$report_error = true;

// send a query
function sq($q)
{
	global $db, $report_error;
	$res = $db->query($q);
	if ($res === false and $report_error === true) {
		die(report_error());
	}
	return $res;
}

// send a query and return an array of data from db *can select k option*
function sq_array($q, $x = [])
{
	$y = [
		'k' => '',
	];
	$y = array_replace($y, $x);
	$res = sq($q);
	$arr = [];
	while ($row = mysqli_fetch_assoc($res)) {
		if (!empty($y['k'])) {
			$arr[$row[$y['k']]] = $row;
		} else {
			$arr[] = $row;
		}
	}
	return $arr;
}

// for insert, delete or update queries (do not use for select)
function sq_multi($qArr)
{
	global $db;
	if ($db->multi_query(implode(';', $qArr))) {
		$i = 0;
		do {
			$i++;
		} while ($db->more_results() && $db->next_result());
	}
	if ($db->errno) {
		echo "Batch execution prematurely ended on statement $i.\n";
		var_dump($qArr[$i], $db->error);
	}
}

// checks if request is array and returns the value with escaped string
function get_post_arr($xname, $type = '')
{
	global $db;
	if (is_array($xname)) {
		$arr = [];
		foreach ($xname as $k => $v) {
			$arr[$k] = get_post_arr($v);
		}
		$ret = $arr;
	} else {
		$ret =  $db->real_escape_string($xname);
	}
	switch ($type) {
		case 'int': {
				$ret = intval($ret);
				break;
			}
	}
	return $ret;
}

// use on all requests to escape string
function get_post($xname = '', $type = '')
{
	$val = !empty($xname) ? @$_REQUEST[$xname] : $_REQUEST;
	return get_post_arr($val, $type);
}

// return password hash from form request
function get_password($xname = '')
{
	global $db;

	return hash('sha256', $db->real_escape_string($_REQUEST[$xname]));
}

// return 0 or 1 if request exists
function get_on($xname = '')
{
	return !empty($_REQUEST[$xname]) ? 1 : 0;
}

// gets insert id from an insert query;
function sq_id()
{
	global $db;
	return $db->insert_id;
}

function report_error()
{
	global $db;

	$backtrace = debug_backtrace();
	$backtrace['mysql'] = mysqli_error($db);
	var_dump($backtrace);
}

function generate_jwt($payload = [])
{
	global $jwt_secret;
	$header = json_encode(['type' => 'JWT', 'alg', 'HS256']);
	$payload = json_encode($payload);
	$base64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
	$base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
	$signature = hash_hmac('sha256', $base64Header . "." . $base64Payload, $jwt_secret, true);
	$base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

	$jwt = $base64Header . "." . $base64Payload . "." . $base64Signature;

	return $jwt;
}

function check_jwt($jwt)
{
	global $jwt_secret;

	$arr = explode('.', $jwt);
	$base64Header = $arr[0];
	$base64Payload = $arr[1];
	$signature = hash_hmac('sha256', $base64Header . "." . $base64Payload, $jwt_secret, true);
	$base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
	$jwt1 = $base64Header . "." . $base64Payload . "." . $base64Signature;

	return $jwt1 === $jwt;
}

function check_login($die = true)
{
	if (gettype(get_post('user')) === 'array') {
		$user = get_post('user');
	} else {
		$user = get_json('user');
	}

	if (empty($user)) {
		if ($die) {
			die();
		} else {
			return false;
		}
	}

	$jwt = get_post('jwt');
	$jwt1 = generate_jwt($user['id']);

	if ($jwt1 !== $jwt) {
		if ($die) {
			die();
		} else {
			return false;
		}
	}

	return $user['id'];
}

// print json string from array and die()
function ret_json($array = [], $flag = 0)
{
	echo json_encode($array, $flag);
	die();
}

// LIMIT with offset and count from page , per_page
function limit_page($page, $per_page)
{
	return "LIMIT ($per_page * ($page - 1)), $per_page";
}

// build where conditions and appends on AND keyword key = column name and v is value
function build_where($array)
{
	$where = [];
	foreach ($array as $k => $v) {
		if (!empty($v)) $where[] = "$k = '$v'";
	}

	if (!empty($where)) {
		$where = implode(" AND ", $where);
		$where = "WHERE $where";
	}

	return $where;
}

// decodes a json request
function get_json($name)
{
	if (!empty($_REQUEST[$name])) {
		return escape_array(json_decode($_REQUEST[$name], true));
	} else {
		return [];
	}
}

// checks if key exists in array and returns the value, or boolean
function is_there($arr, $key, $is_bool = false)
{
	return (!empty($arr) and !empty($arr[$key])) ? ($is_bool ? 1 : $arr[$key]) : ($is_bool ? 0 : '');
}

// escape string
function escape_string($string)
{
	global $db;

	return $db->real_escape_string($string);
}

// recursevly escape array and all children of array
function escape_array($dirty_array = [])
{
	$clean_array = [];
	foreach ($dirty_array as $k => $v) {
		if (is_array($v)) {
			$clean_array[$k] = escape_array($v);
		} else {
			$clean_array[$k] = escape_string($v);
		}
	}
	return $clean_array;
}

// get difference of 2 dates
function date_difference($date_1, $date_2, $format = '%a')
{
	$datetime1 = date_create($date_1);
	$datetime2 = date_create($date_2);

	$interval = date_diff($datetime1, $datetime2);

	return $interval->format($format);
}


// send firebase cloud message to tokens
function send_notification($x = [], $tokens = [])
{
	global $firebase_api;

	$y = [
		'title' => '',
		'body' => '',
	];
	$y = array_replace($y, $x);

	if (empty($tokens) and empty($y['topic'])) return;

	$fields = [
		'notification'	=> [
			'title' => $y['title'],
			'body' => $y['body'],
		],
		'android' => ['priority' => 'high'],
	];

	if (!empty($y['data'])) {
		$field['data'] = $y['data'];
	}

	if (!empty($y['topic'])) {
		$fields['to'] = "/topics/{$y['topic']}";
	} else {
		$fields['registration_ids'] = $tokens;
	}

	$headers = [
		'Authorization: key=' . $firebase_api,
		'Content-Type: application/json'
	];

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
	$result = curl_exec($ch);
	curl_close($ch);


	return $result;
}

// firebase subscribe to topic
function subscribe_topic($topic, $tokens)
{
	global $firebase_api;

	if (empty($topic) or empty($tokens)) return false;

	$fields = [
		"to" => "/topics/$topic", "registration_tokens" => $tokens
	];
	$headers = ['Content-Type:application/json', "Authorization:key=$firebase_api"];

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_URL, 'https://iid.googleapis.com/iid/v1:batchAdd');
	curl_setopt($ch, CURLOPT_VERBOSE, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 60);
	curl_setopt($ch, CURLOPT_POST, True);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

	$res = curl_exec($ch);
	return $res;
}

function crypto_rand_secure($min, $max)
{
	$range = $max - $min;
	if ($range < 0) return $min; // not so random...
	$log = log($range, 2);
	$bytes = (int) ($log / 8) + 1; // length in bytes
	$bits = (int) $log + 1; // length in bits
	$filter = (int) (1 << $bits) - 1; // set all lower bits to 1
	do {
		$rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
		$rnd = $rnd & $filter; // discard irrelevant bits
	} while ($rnd >= $range);
	return $min + $rnd;
}

function get_token($length = 32)
{
	$token = "";
	$codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	$codeAlphabet .= "abcdefghijklmnopqrstuvwxyz";
	$codeAlphabet .= "0123456789";
	for ($i = 0; $i < $length; $i++) {
		$token .= $codeAlphabet[crypto_rand_secure(0, strlen($codeAlphabet))];
	}
	return $token;
}

function send_message($field, $x = [])
{
	$y = [
		'to' => 'info@favorilb.com',
		'from' => 'info@favorilb.com',
		'subject' => ''
	];

	foreach ($x as $k => $v) {
		$y[$k] = $v;
	}

	$msg =
		'<html>
	<head>
	<meta http-equiv="Content-Language" content="en-us">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	</head>

	<body>

	<div align="center">
	<table border="1" cellpadding="10" style="border-collapse: collapse">';
	foreach ($field as $k => $v) {
		$msg .= '<tr>
		<td style="color: #FFFFFF; background-color: #003366" valign="top" align="left"><font face="Tahoma">' . $k . ':</font></td>
		<td valign="top" align="left">' . $v . '</td>
		</tr>';
	}

	$msg .= '</table>
	</div>

	</body>

	</html>
	';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= "From: " . $y['from'] . "\r\n";

	return @mail($y['to'], $y['subject'], $msg, $headers);
}
