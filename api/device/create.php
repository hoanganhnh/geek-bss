<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../database.php';
include_once '../../class/device.php';
include_once '../../Main.php';

use Main as Request;
use Main as Response;

$database = new Database();
$db = $database->getConnection();
$item = new Device($db);

$data = json_decode(file_get_contents("php://input"));
$item->name = $data->name;
$item->ip = $data->ip;

if (Request::check("POST")) {
    $data = json_decode(file_get_contents("php://input"));
    if (
        !isset($data->name) ||
        !isset($data->ip)
    ) :
        $fields = [
            "name" => "name",
            "ip" => "ip",
        ];
        Response::json(0, 400, "Please fill all the required fields", "fields", $fields);

    elseif (
        empty(trim($data->name)) ||
        empty(trim($data->ip))
    ) :
        $fields = [];
        foreach ($data as $key => $val) {
            if (empty(trim($val))) array_push($fields, $key);
        }

        Response::json(0, 400, "Oops! empty field detected.", "empty_fields", $fields);

    else :



        Response::json(1, 200, null, "ok", null);

    endif;
}

if ($item->createDevice()) {
    echo 'Device created successfully!';
} else {
    echo 'Error create!';
}
