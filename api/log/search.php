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

if (Request::check("GET")) {
    if (!isset($_GET["search"])) {
        Response::json(0, 400, "Oops! empty search params.", "", false);
    } else {
        $res = array();
        $res['data'] = array();
        $logStmt = $log->searchLog($_GET["search"]);
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
}
