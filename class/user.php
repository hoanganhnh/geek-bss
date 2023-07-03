<?php
class User
{
    // Connection
    private $conn;
    // Columns
    public $id;
    public $name;
    public $password;

    public function __construct($db)
    {
        $this->conn = $db;
    }


    public function login($username,  $password)
    {
        $sql = "SELECT * FROM User WHERE username = '$username' AND password = '$password'";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt;
    }
}
