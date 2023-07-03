<?php
class Device
{
    // Connection
    private $conn;
    // Table
    private $db_table = "Device";
    // Columns
    public $id;
    public $name;
    public $ip;
    public $created;
    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }
    // GET ALL
    public function getDevices()
    {
        $sqlQuery = "SELECT id, name, ip, created FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }
    // CREATE
    public function createDevice()
    {
        $sqlQuery = "INSERT INTO
                        " . $this->db_table . "
                    SET
                        name = :name, 
                        ip = :ip, 
                        created = :created";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->ip = htmlspecialchars(strip_tags($this->ip));
        $this->created = date('Y-m-d H:i:s');

        // bind data
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":ip", $this->ip);
        $stmt->bindParam(":created", $this->created);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }


    // DELETE
    function deleteEmployee()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
        $stmt = $this->conn->prepare($sqlQuery);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
