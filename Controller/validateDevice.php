<?php

function validate()
{
    $nameErr = $MACErr = $consumpErr = "";
    $name = $MAC = $IP =  $consump = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Hãy nhập tên thiết bị !";
        } else {
            $name = $_POST["name"];
        }
        if (empty($_POST["MAC"])) {
            $MACErr = "Hãy nhập địa chỉ MAC !";
        } else {
            $MAC = $_POST["MAC"];
        }
        if (empty($_POST["IP"])) {
            $IPErr = "Hãy nhập IP !";
        } else {
            $IP = $_POST["IP"];
        }
        if (empty($_POST["consumption"])) {
            $consumpErr = "Hãy nhập mức tiêu thụ !";
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
            $sql = "INSERT INTO device (name, MAC, IP, crdate, consumption) VALUES ('$name', '$MAC', '$IP', '$date', $consump)";
            $conn = new db_connection();
            $conn = $conn->connect();
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            var_dump($stmt);
        } catch (PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }
    }
}
