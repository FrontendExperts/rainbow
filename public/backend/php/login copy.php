<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With');


$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "react-auth-login";
$id     = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$password = $data["password"];


$result = mysqli_query($conn, "SELECT * from register where email='".$email."' AND password='".$password."'");


$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if ($nums>=1) {
  
   http_response_code(200);
   $outp ="";

  $outp .= '{"email":" ' .$rs["email"].'",';
    $outp .= '"fname":" ' .$rs["fname"].'",';
    $outp .= '"Status":"200"}';




   
  // $_SESSION['user_id'] = $rs["id"];
  // $_SESSION['user_email'] = $rs["email"];

   echo $outp;

} else {
  http_response_code(202);
}



  
?>

