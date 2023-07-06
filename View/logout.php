<?php
session_start();
unset($_SESSION["name"]);
unset($_SESSION["password"]);

echo 'You have logout successful!';
header('Refresh: 1; URL = /');
session_destroy();
