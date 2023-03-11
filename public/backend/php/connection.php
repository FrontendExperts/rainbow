<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//Please create users database inside phpmysql admin and create registerusers tabel and create  `email`, `username`, `add1`, `add2`, `city`, `state`, `zip` fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "react_api2";
// $id     = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

 
switch ($method) {
    case 'GET':
      $sql = "SELECT * from mydataform"; 
      // add new code for fetch direct view
      $mysqli = mysqli_query($conn,$sql);
	  $json_data = array();

	  while($row = mysqli_fetch_assoc($mysqli))

	{
	  $json_data[] = $row;
	}
    
      break;
      case 'POST':
      $username = $_POST["username"];
      $email = $_POST["email"];
      $phone = $_POST["phone"];
      $password = $_POST["password"];
 
      $sql = "insert into mydataform (username, email, phone, password) values ('$username', '$email', '$phone', '$password')"; 
      break;
}

 
// run SQL statement
$result = mysqli_query($conn,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}



if ($method == 'GET') {
    $maindata = array();
    while($ssd = mysqli_fetch_assoc($result)){
        $maindata[]=$ssd;

    }
    echo json_encode($maindata);
    // for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    //     echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    //   }
    // if (!$id) echo '[';  
    // for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    //   echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    // }
    // if (!$id) echo ']';
  } elseif ($method == 'POST') {
    // echo 'test';
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($conn);
  }
 
$conn->close();


