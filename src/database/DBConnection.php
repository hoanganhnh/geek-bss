<?php

namespace Database;

use PDO;
use PDOException;

class DBConnection
{
    private $host = "localhost";
    private $db = "geek";
    private $username = "geek";
    private $password = "geek";

    public $conn;

    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host .
                ";dbname=" . $this->db, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Database not connected: " . $exception->getMessage();
        }
        return $this->conn;
    }
}

?>