<?php
function test_input($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

function validate()
{
	// define variables and set to empty values
	$nameErr = $passwordErr = "";
	session_start();

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["name"])) {
			$nameErr = "Hãy nhập tên !";
		} else {
			$_SESSION["name"] = test_input($_POST["name"]);
		}
		if (empty($_POST["password"])) {
			$passwordErr = "Hãy nhập mật khẩu !";
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
		session_destroy();
	} else {
		echo "Sai tên đăng nhập hoặc mật khẩu";
		session_destroy();
	};
}
