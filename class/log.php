<?php

class Log
{
    // Connection
    private $conn;
    // Table
    private $db_table = "Log";
    // Columns
    public $id;
    public $name;
    public $action;
    public $created;
    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getLogs($start_from, $limit)
    {
        $sqlAll = "SELECT * FROM " . $this->db_table . " LIMIT $start_from, $limit";
        $stmt = $this->conn->prepare($sqlAll);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt;
    }

    public function getTotal()
    {
        $sqlAll = "SELECT * FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlAll);
        $stmt->execute();
        return $stmt;
    }


    public function searchLog($text)
    {
        $sqlAll = "SELECT * FROM " . $this->db_table . " WHERE MATCH(action, name) AGAINST ('$text' IN BOOLEAN MODE)";
        $stmt = $this->conn->prepare($sqlAll);
        $stmt->execute();
        return $stmt;
    }
}
