<?php
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


$fname = $data['fname'];
$email = $data["email"];
$phone = $data["phone"];
$password = $data["password"];

 $sql = "insert into register (fname, email, phone, password) values ('$fname', '$email', '$phone', '$password');"; 

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



  
?>

