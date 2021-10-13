<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 1000');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	die();
}

ob_start();

include 'settings.php';
$jwt_secret = "cms_jwt_secret";

$db = new mysqli($dbHost, $dbusername, $dbpassword, $dbName);
mysqli_set_charset($db, "utf8mb4");

date_default_timezone_set('Asia/Beirut');

$tz = (new DateTime('now', new DateTimeZone('Asia/Beirut')))->format('P');
mysqli_query($db, "SET time_zone='$tz';");

include 'dbfunc.php';
include 'queries.php';
include 'appfunc.php';
include 'cmsfunc.php';
