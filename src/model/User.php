<?php

namespace Model;
use PDO;


class User
{
    // conn
    private $conn;

    // table
    private $dbTable = "user";

    // col
    public $id;
    public $username;

    // db conn
    public function __construct($db)
    {
        $this->conn = $db;
    }

     public function getUser(){
        $sqlQuery = "SELECT
                    id, 
                    username
                  FROM
                    ". $this->dbTable ."
                WHERE 
                   id = ?
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->username = $dataRow['username'];
      
    }      
}
