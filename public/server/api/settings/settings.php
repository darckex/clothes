<?php
$dbHost = 'localhost';
$dbName = 'favori';
$dbusername = 'root';
$dbpassword = '';

$jwt_secret = 'secret_key';

$upload_directory = '../media/';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($_REQUEST)) {
	$_REQUEST = json_decode(file_get_contents('php://input'), true);
}
