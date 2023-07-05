<?php
require '../Model/db_connection.php';
require '../Model/device.php';
require '../Controller/renderTable.php';
require '../Controller/validateDevice.php';

$conn = new db_connection();
$sql_chart = new device($conn);
$sql_chart = $sql_chart->getDbChart($conn);
$sql_chart->execute();
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" text="text/css" href="dashboard.css">
	<script src="https://kit.fontawesome.com/3f1e871f13.js"></script>
	<title>Dashboard</title>
</head>

<body>
	<div id="menu">
		<div class="title" style="padding-top: 8%; font-size:18px"><i class="fas fa-laptop-house"></i> Device Management</div>
		<div class="title" style="color: #09afff;"><i class="fas fa-table"></i> Dashboard</div>
		<div class="title">
			<i class='fas fa-clock'></i>
			<a href="logs.php">Logs </a>
		</div>
		<div class="title"><i class="fas fa-cog"></i> Settings</div>
	</div>
	<div id="header">
		<div class="img-ava-user">
			<i class="fas fa-user-circle" style="float: right; padding-right: 1%; font-size: 20px;"></i>
		</div>
		<div class="info-user">Welcome John</div>
	</div>
	<div id="content-main">
		<div class="table-device">
			<table id="data-table">
				<thead>
					<tr>
						<th style="text-align: left; padding-left: 3%">Devices</th>
						<th>MAC Address</th>
						<th>IP</th>
						<th>Create Date</th>
						<th style="text-align: right; padding-right: 3%">Power Consumption(Kw/H)</th>
					</tr>
					<?php
					render($sql_render, $sql_sum);
					?>
				</thead>
			</table>
		</div>
		<div class="power-chart">
			<canvas id="myChart" style="height: 458.4px; width: 460px; margin-left: 4%;">
				<script>
					var chartArray = '<?php $arr = array();
										while ($row = $sql_chart->fetch()) {
											$arr[] = $row;
										}
										echo JSON_encode($arr); ?>';
				</script>
			</canvas>
		</div>
		<div class="add-device">
			<form method="post" action="" style="height:100%;">
				<div class="add-noti">
					<?php validate() ?></div>
				<div class="input-device"><input type="text" name="name" placeholder="Name" class="input-device-box"></div>
				<div class="input-device"><input type="text" name="MAC" placeholder="MAC" class="input-device-box"></div>
				<div class="input-device"><input type="text" name="IP" placeholder="IP" class="input-device-box"></div>
				<div class="input-device"><input type="text" name="consumption" placeholder="Consumption" class="input-device-box"></div>
				<div class="input-device"><input type="submit" class="submit-device" value="ADD DEVICE"></div>
			</form>
		</div>
	</div>
	<script src="../jquery-3.6.0.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script type="text/javascript" src="../index.js"></script>
</body>

</html>