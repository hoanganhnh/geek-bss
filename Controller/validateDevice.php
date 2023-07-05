<?php

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
