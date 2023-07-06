<?php

require '../Database/Database.php';
require '../Model/Log.php';
require 'AuthController.php';

class LogController extends AuthController
{

    private Log $log;

    function __construct()
    {
        parent::__construct();
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
