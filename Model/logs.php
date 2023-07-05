<?php
class logs
{
    private $id, $name, $action, $date, $conn;

    function _contruct()
    {
        $this->conn = new db_connection();
    }

    function getId()
    {
        return $this->id;
    }

    function getName()
    {
        return $this->name;
    }

    function getACtion()
    {
        return $this->action;
    }

    function getDate()
    {
        return $this->date;
    }

    function setId($id)
    {
        $this->id = $id;
    }
    function setName($name)
    {
        $this->name = $name;
    }
    function setAction($action)
    {
        $this->action = $action;
    }
    function setDate($date)
    {
        $this->date = $date;
    }
    function getDb($conn)
    {
        $sql_render = $conn->connect();
        $sql_render = $sql_render->prepare("SELECT * FROM logs");
        $sql_render->setFetchMode(PDO::FETCH_ASSOC);
        return $sql_render;
    }
}
