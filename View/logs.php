<?php
require '../Model/logs.php';
require '../Model/database.php';

$conn = new Database();
$sql_array = new Log($conn);
$sql_array = $sql_array->getDb();

$sql_array->execute();
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" text="text/css" href="logs.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
	<title>Logs</title>
</head>

<body>
	<div class="container-view">
		<div class="row w-100 h-100 m-0">
			<div class="col-xl-3 p-0">
				<div id="menu">
					<div class="title p-0" style="padding-top: 8%;">
						<i class="fas fa-laptop-house"></i>
						Device Management
					</div>
					<div class="title"><i class="fas fa-table"></i> <a href="dashboard.php">Dashboard</a></div>
					<div class="title" style="color: #09afff;"><i class='fas fa-clock'></i>
						Logs</div>
					<div class="title"><i class="fas fa-cog"></i> Settings</div>
					<div class="title">
						<i class="fa fa-sign-out"></i>
						<a href="/">Log out</a>
					</div>
				</div>
			</div>
			<div class="col-xl-9 p-0">
				<div id="header">
					<div class="avatar-container">
						<div class="img-ava-user">
							<i class="fas fa-user-circle" style="float: right; padding-right: 1%; font-size: 20px;"></i>
						</div>
						<div class="info-user">Welcome John</div>
					</div>
				</div>
				<form action="" method="get">
					<div id="content-main">
						<div class="title-logs">Action Logs</div>
						<div class="div-search">
							<div class="box-search">
								<input type="text" id="input-search" placeholder="Name">
							</div>
							<div class="mt-3">
								<button type="submit" class="btn btn-warning" id="search">
									Search
								</button>
							</div>
						</div>
						<div class="table-logs">
							<table id="table">
								<thead>
									<tr>
										<th style="text-align:left;">Device ID</th>
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
				</form>
			</div>
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