<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../database.php';
include_once '../../class/log.php';
include_once '../../Main.php';

use Main as Request;
use Main as Response;

$database = new Database();
$db = $database->getConnection();
$log = new Log($db);

$limit = 5;
if (isset($_GET["page"])) {
    $page  = $_GET["page"];
} else {
    $page = 1;
};

$start_from = ($page - 1) * $limit;

if (Request::check("GET")) {
    $totalRes = $log->getTotal();
    $total = 0;
    while ($row = $totalRes->fetch(PDO::FETCH_ASSOC)) {
        $total++;
    }
    $totalPage = ceil($total / $limit);

    $res = array();
    $res['data'] = array();
    $res['totalPage'] = $totalPage;
    $logStmt = $log->getLogs($start_from, $limit);
    while ($row = $logStmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = array(
            "id" => $id,
            "name" => $name,
            "action" => $action,
            "created" => $created
        );
        array_push($res["data"], $e);
    }

    echo json_encode($res);
}
