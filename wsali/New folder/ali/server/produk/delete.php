<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

$con=mysqli_connect("localhost","root","","lat_crud_ci");

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$id = $_GET['id'];
 
$sql = "delete from datateman where id= '$id'";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record added";

mysqli_close($conn);
 
?>