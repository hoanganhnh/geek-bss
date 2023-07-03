<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../database.php';
include_once '../../class/user.php';
include_once '../../Main.php';

use Main as Request;
use Main as Response;

$database = new Database();
$db = $database->getConnection();
$user = new User($db);


if (Request::check("POST")) {
    $data = json_decode(file_get_contents("php://input"));
    if (
        !isset($data->username) ||
        !isset($data->password)
    ) :
        $fields = [
            "username" => "username",
            "password" => "password",
        ];
        Response::json(0, 400, "Please fill all the required fields", "fields", $fields);

    elseif (
        empty(trim($data->username)) ||
        empty(trim($data->password))
    ) :
        $fields = [];
        foreach ($data as $key => $val) {
            if (empty(trim($val))) array_push($fields, $key);
        }

        Response::json(0, 400, "Oops! empty field detected.", "empty_fields", $fields);

    else :

        $stmt = $user->login($data->username, $data->password);
        $row = $stmt->fetch();
        $res = array("id" => $row['id'], "username" => $row['username']);

        Response::json(1, 200, null, "user", $res);

    endif;
}
