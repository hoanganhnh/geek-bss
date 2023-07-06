<?php

require 'AuthController.php';

class UserController extends AuthController
{

    function __construct()
    {
    }

    function validateInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function login()
    {

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST["name"])) {
                echo "Enter username !";
            } else {
                setcookie("name", UserController::validateInput($_POST["name"]), time() + (86400 * 30), "/");
            }

            if (empty($_POST["password"])) {
                echo "Enter password !";
            } else {
                setcookie("password", UserController::validateInput($_POST["password"]), time() + (86400 * 30), "/");
            }

            if ($_POST['name'] == 'john' && $_POST['password'] == '1234') {
                header('Location: ./View/dashboard.php');
            } else {
                echo "Invalid username or password!";
            };
        }
    }
}
