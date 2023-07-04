<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../database.php';
include_once '../../class/device.php';
$database = new Database();
$db = $database->getConnection();
$items = new Device($db);

$stmt = $items->getDevices();
$itemCount = $stmt->rowCount();

$employeeArr = array();
$employeeArr["data"] = array();
$employeeArr["counts"] = $itemCount;
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($row);
    $e = array(
        "id" => $id,
        "name" => $name,
        "ip" => $ip,
        "created" => $created
    );
    array_push($employeeArr["data"], $e);
}
echo json_encode($employeeArr);
