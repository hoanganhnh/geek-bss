<?php

require '../Model/Log.php';
require '../Database/Database.php';

class LogController
{

    private Log $log;

    function __construct()
    {
        $conn = new Database();
        $this->log = new Log($conn);
    }

    function renderDataLog()
    {
        $sql_array = $this->log->getDb();
        $sql_array->execute();
        $arr = array();
        while ($row = $sql_array->fetch()) {
            $arr[] = $row;
        }

        return $arr;
    }
}
