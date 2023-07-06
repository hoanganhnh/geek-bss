<?php
class AuthController
{
    function __construct()
    {
        if ($_COOKIE['name'] == 'john' && $_COOKIE['password'] == '1234') {
            header('Location: ./View/dashboard.php');
        } else {
            header('Location: /');
        }
    }
}
