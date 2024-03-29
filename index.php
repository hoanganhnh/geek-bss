<?php include './Controller/UserController.php';

$userController = new UserController();
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" text="text/css" href="./View/styles/login.css">
	<title>Log in</title>
</head>

<body>
	<div id="box-log-in">
		<div class="row-content">
			<b>BSS SYSTEM</b>
		</div>
		<form method="post" action="<?php $userController->login(); ?>" class="form">
			<div class="div-alert">
				<?php $userController->login(); ?>
			</div>
			<div class="row-account">
				<input type="text" class="input-box" name="name" placeholder="User name">
			</div>
			<div class="row-account">
				<input type="password" class="input-box" name="password" placeholder="Password">
			</div>
			<div class="row-log-in">
				<div class="div-log-in">
					<input type="submit" class="btn-log-in" value="LOGIN">
				</div>
				<div class="div-create-account">
					or create a new account
				</div>
			</div>
		</form>
	</div>
	<script src="./View/scripts/libs/jquery-3.6.0.js"></script>
</body>

</html>