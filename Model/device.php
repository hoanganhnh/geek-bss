<?php
class Device
{
    private $name;
    private $mac;
    private $ip;
    private $date;
    private $consumption;
    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getName()
    {
        return $this->name;
    }
    function getMac()
    {
        return $this->mac;
    }
    function getIP()
    {
        return $this->ip;
    }
    function getDate()
    {
        return $this->date;
    }
    function getConsuption()
    {
        return $this->consumption;
    }
    function setName($name)
    {
        $this->name = $name;
    }
    function setMac($mac)
    {
        $this->mac = $mac;
    }
    function setIP($ip)
    {
        $this->ip = $ip;
    }
    function setDate($date)
    {
        $this->date = $date;
    }

    function getDb($conn)
    {
        $sql_render = $conn->connect();
        $sql_render = $sql_render->prepare("SELECT * FROM device");
        return $sql_render;
    }

    function getDbChart()
    {
        $sql_render = $this->conn->connect();
        $sql_render = $sql_render->prepare("SELECT name, consumption FROM device");
        $sql_render->setFetchMode(PDO::FETCH_ASSOC);
        return $sql_render;
    }
}
