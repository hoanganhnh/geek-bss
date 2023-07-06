<?php

class UserController
{

    static private function validateInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    static function login()
    {
        // define variables and set to empty values
        $nameErr = $passwordErr = "";
        session_start();

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST["name"])) {
                $nameErr = "Enter username !";
            } else {
                $_SESSION["name"] = UserController::validateInput($_POST["name"]);
            }

            if (empty($_POST["password"])) {
                $passwordErr = "Enter password !";
            } else {
                $_SESSION["password"] = $_POST["password"];
            }
        }

        if (empty($_SESSION["name"])) {
            echo $nameErr;
            session_destroy();
        } else if (empty($_SESSION["password"])) {
            echo $passwordErr;
            session_destroy();
        } else if ($_SESSION['name'] == 'john' && $_SESSION['password'] == '1234') {
            header('location: ./View/dashboard.php');
            // session_destroy();
        } else {
            echo "Invalid username or password!";
            session_destroy();
        };
    }
}
