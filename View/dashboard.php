<?php
require '../Controller/DeviceController.php';

$device = new DeviceController();

// if (!isset($_COOKIE["name"]) || !isset($_COOKIE["password"])) {
// 	header('location:Refresh: 1;  URL = /');
// }
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" text="text/css" href="./styles/dashboard.css">
	<script src="https://kit.fontawesome.com/3f1e871f13.js"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
	<title>Dashboard</title>
</head>

<body>
	<div class="container-view">
		<div class="row w-100 h-100 m-0">
			<div class="col-3 p-0">
				<div id="menu">
					<div class="title p-0" style="padding-top: 8%;">
						<i class="fas fa-laptop-house"></i>
						Device Management
					</div>
					<div class="title"><i class="fas fa-table"></i> <a href="dashboard.php">Dashboard</a></div>
					<div class="title" style="color: #09afff;"><i class='fas fa-clock'></i>
						<a href="logs.php">Logs</a>
					</div>
					<div class="title"><i class="fas fa-cog"></i> Settings</div>
					<div class="title">
						<i class="fa fa-sign-out"></i>
						<a href="./logout.php">Log out</a>
					</div>
				</div>
			</div>
			<div class="col-9 p-0">
				<div id="header">
					<div class="avatar-container">
						<div class="img-ava-user">
							<i class="fas fa-user-circle" style="float: right; padding-right: 1%; font-size: 20px;"></i>
						</div>
						<div class="info-user">Welcome John</div>
					</div>
				</div>
				<div id="content-main">
					<div class="table-device mt-4">
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
								$device->renderTableDevice();
								?>
							</thead>
						</table>
					</div>
					<div class="">
						<div class="power-chart">
							<canvas id="myChart" style="height: 458.4px; width: 460px; margin-left: 4%;">
								<script>
									var chartArray = '<?php $data = $device->renderDataChart();
														echo JSON_encode($data); ?>';
								</script>
							</canvas>
						</div>
						<div class="add-device">
							<form method="post" action="" style="height:100%;">
								<div class="add-alert">
									<?php $device->validateDevice() ?></div>
								<div class="input-device"><input type="text" name="name" placeholder="Name" class="input-device-box"></div>
								<div class="input-device"><input type="text" name="MAC" placeholder="MAC" class="input-device-box"></div>
								<div class="input-device"><input type="text" name="IP" placeholder="IP" class="input-device-box"></div>
								<div class="input-device"><input type="number" name="consumption" placeholder="Consumption" class="input-device-box"></div>
								<div class="input-device">
									<button type="submit" class="btn btn-warning">
										Add device
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="./scripts/libs/jquery-3.6.0.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		<script type="text/javascript" src="./scripts/dashboard.js"></script>
</body>

</html>