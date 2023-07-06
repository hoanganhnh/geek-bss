<?php
unset($_COOKIE['name']);
setcookie('name', '', -1, '/');
unset($_COOKIE['password']);
setcookie('password', '', -1, '/');

echo 'You have logout successful!';
header('Refresh: 2; URL = /');
