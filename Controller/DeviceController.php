<?php

require '../Model/database.php';
require '../Model/device.php';

class DeviceController
{
    private Device $device;

    function __construct()
    {
        $conn = new Database();
        $this->device = new Device($conn);
    }

    function renderTableDevice()
    {
        $sql_chart = $this->device->getDbChart();
        $sql_chart->execute();

        $sql_sum = $this->device->getSumConsumption();
        $sql_sum->execute();

        foreach ($sql_chart as $row) {
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

    function renderDataChart()
    {
        $sql_chart = $this->device->getDbChart();
        $sql_chart->execute();
        $arr = array();
        while ($row = $sql_chart->fetch()) {
            $arr[] = $row;
        }
        return $arr;
    }

    function validateDevice()
    {
        $nameErr = $MACErr  = $consumpErr = "";
        $name = $MAC = $IP =  $consump = "";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST["name"])) {
                $nameErr = "Enter name device !";
            } else {
                $name = $_POST["name"];
            }
            if (empty($_POST["MAC"])) {
                $MACErr = "Enter MAC !";
            } else {
                $MAC = $_POST["MAC"];
            }
            if (empty($_POST["IP"])) {
                $IPErr = "Enter IP !";
            } else {
                $IP = $_POST["IP"];
            }
            if (empty($_POST["consumption"])) {
                $consumpErr = "Enter consumption !";
            } else {
                $consump = $_POST["consumption"];
            }
        }


        if (empty($_POST["name"]))
            echo $nameErr;
        else if (empty($_POST["MAC"]))
            echo $MACErr;
        else if (empty($_POST["IP"]))
            echo $IPErr;
        else if (empty($_POST["consumption"]))
            echo $consumpErr;
        else {
            $date = date("Y-m-d");
            try {
                $sql = "INSERT INTO device (name, MAC, IP, created, consumption) VALUES ('$name', '$MAC', '$IP', '$date', $consump)";
                $conn = new Database();
                $stmt = $conn->connect()->prepare($sql);
                if ($stmt->execute()) {
                    header('location: ./dashboard.php');
                }
            } catch (PDOException $e) {
                echo $sql . "<br>" . $e->getMessage();
            }
        }
    }
}
