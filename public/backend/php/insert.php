<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With');


$servername = "db4free.net:3306";
$username   = "react_db4free";
$password   = "db4free@321";
$dbname     = "react_db4free";
$id     = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

 $data = json_decode(file_get_contents("php://input"), true);

//  $fname = $data['fname'];
//  $email = $data["email"];
//  $phone = $data["phone"];
//  $password = $data["password"];

// echo '<pre>';
// print_r($_POST);
// print_r($_FILES);
// die;


// start file upload and post code method  
 $response = array();
$fname = $_POST['fname'];
$email = $_POST["email"];
$phone = $_POST["phone"];
$password = $_POST["password"];
$img_name = $_POST["img_name"];

if($_FILES["image"]) {

$response = array();
$upload_dir = 'upload/';
$server_url = 'http://192.168.1.4/ReactJS/The_Rainbow_Print/public/backend/php/upload/';

$avatar_name = $_FILES["image"]["name"];
$avatar_tmp_name = $_FILES["image"]["tmp_name"];
$error = $_FILES["image"]["error"];
$random_name = rand(1000,1000000)."-".$avatar_name;
$upload_name = $upload_dir.strtolower($random_name);
$upload_name = preg_replace('/\s+/', '-', $upload_name);

if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
  $response = array(
      "status" => "success",
      "error" => false,
      "message" => "File uploaded successfully",
      "url" => $server_url."/".$upload_name
    );

    $img_name = $upload_name;

}else
{
  $response = array(
      "status" => "error",
      "error" => true,
      "message" => "Error uploading the file!"
  );
}
// end file upload

 $sql = "insert into register (fname, email, phone, password, img_name) values ('$fname', '$email', '$phone', '$password', '$img_name' );"; 

// run SQL statement
$result = mysqli_query($conn,$sql);
 

// Check connection
if ($result) {
  $response['data'] = array(
    'status'=> 'Connected successfully'
  );
  echo json_encode($response); 
}

else {
  $response['data'] = array(
    'status'=> 'Connection failed'
  );
  echo json_encode($response);
}

}

  
?>