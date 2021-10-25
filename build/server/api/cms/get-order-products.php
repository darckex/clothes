<?php
include '../settings/connect.php';

check_login(true, true);
$id = get_post('id');

$q = "SELECT quantity, size, color, p.id, image, name
FROM order_products o
LEFT JOIN products p ON p.id = o.product_id
WHERE order_id = '$id'";

$products = sq_array($q);

ret_json(['res' => 1, 'products' => $products]);
