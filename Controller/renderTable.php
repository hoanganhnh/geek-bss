<?php
$conn = new Database();
$sql_render = new Device($conn);
$sql_render = $sql_render->getDb($conn);
$sql_render->execute();


$sql_sum = $conn->connect()->prepare("SELECT SUM(consumption)FROM device");
$sql_sum->execute();

function render($sql_render, $sql_sum)
{
    foreach ($sql_render as $row) {
        echo '<tr><td style="text-align: left">' . $row['name'] . '</td>
            <td>'  . $row['MAC'] . '</td>
            <td>'  . $row['IP'] . '</td>
            <td>'  . $row['created'] . '</td>
            <td>'  . $row['consumption'] . '</td></tr>';
    };
    foreach ($sql_sum as $key) {
        echo '<tfoot><tr style="background: #0d01013d"><td style="text-align:left">Total</td><td></td><td></td><td></td><td>' . $key['SUM(consumption)'] . '</td></tr></tfoot>';
    };
}
