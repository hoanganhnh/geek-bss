<?php
    namespace Controller;
    use Model\User;
    use Database\DBConnection;

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With, 
    Content-Type, Origin, Cache-Control, Pragma, Authorization, 
    Accept, Accept-Encoding");
    header("Content-Type: application/json;");
    


    $database = new DBConnection();
    $db = $database->getConnection();

    $item = new User($db);

    $item->id = isset($_GET['id']) ? $_GET['id'] : die();
  
    $item->getUser();

    if($item != null){
        $user_Arr = array(
            "id" =>  $item->id,
            "username" => $item->username,
        );
      
        http_response_code(200);
        echo json_encode($user_Arr);
    }
      
    else{
        http_response_code(404);
        echo json_encode("User record not found.");
    }
