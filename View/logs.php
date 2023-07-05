<?php
require '../Model/db_connection.php';
require '../Model/logs.php';
$sql_array = new logs();
$conn = new db_connection();
$sql_array = $sql_array->getDb($conn);

$sql_array->execute();
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" text="text/css" href="logs.css">
	<title>Logs</title>
</head>

<body>
	<div id="menu">
		<div class="title" style="padding-top: 8%;"><i class="fas fa-laptop-house"></i> Device Management</div>
		<div class="title"><i class="fas fa-table"></i><a href="dashboard.php"> Dashboard</a></div>
		<div class="title" style="color: #09afff;"><i class='fas fa-clock'></i>
			Logs</div>
		<div class="title"><i class="fas fa-cog"></i> Settings</div>
	</div>
	<div id="header">
		<div class="img-ava-user">
			<i class="fas fa-user-circle" style="float: right; padding-right: 1%; font-size: 20px;"></i>
		</div>
		<div class="info-user">Welcome John</div>
	</div>
	<div id="content-main">
		<div class="title-logs">Action Logs</div>
		<div class="custom-page">
			<form action="" method="get">
				<select name="limit">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
				</select>
			</form>
		</div>
		<div class="div-search">
			<div class="box-search">
				<input type="text" id="input-search" placeholder="Name">
			</div>
			<div class="div-btn-search">
				<input type="submit" id="search" value="Search" class="btn-search">
			</div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
		<div class="table-logs">
			<table id="table">
				<thead>
					<tr>
						<th style="text-align:left;">Device ID#</th>
						<th>Name</th>
						<th>Action</th>
						<th>Date</th>
					</tr>
				</thead>
			</table>
		</div>
		<div id="container-pagination">
		</div>
	</div>
	<script>
		var logsArray = '<?php $arr = array();
							while ($row = $sql_array->fetch()) {
								$arr[] = $row;
							}
							echo JSON_encode($arr); ?>';
	</script>
	<script src="https://kit.fontawesome.com/3f1e871f13.js"></script>
	<script src="../jquery-3.6.0.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script src="../index_logs.js"></script>
</body>

</html>