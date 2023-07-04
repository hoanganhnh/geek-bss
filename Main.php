<?php
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');

// Exit early so the page isn't fully loaded for options requests
if (strtolower($_SERVER['REQUEST_METHOD']) == 'options') {
    exit();
}
header("Content-Type: application/json; charset=UTF-8");

class Main
{
    // Checking the Request Method
    static function check($req)
    {
        if ($_SERVER["REQUEST_METHOD"] === $req) {
            return true;
        }
        static::json(0, 405, "Invalid Request Method. HTTP method should be $req");
    }

    // Returns the response in JSON format
    static function json(int $ok, $status, $msg, $key = false, $value = false)
    {
        $res = ["ok" => $ok];
        if ($status !== null) {
            http_response_code($status);
            $res["status"] = $status;
        }
        if ($msg !== null) $res["message"] = $msg;
        if ($value) {
            if ($key) {
                $res[$key] = $value;
            } else {
                $res["data"] = $value;
            }
        }
        echo json_encode($res);
        exit;
    }

    // Returns the 404 Not found
    static function _404()
    {
        static::json(0, 404, "Not Found!");
    }
}
