<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');


$con=mysqli_connect("localhost","root","","db_tbws");

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$mahasiswa_id = $_GET['mahasiswa_id'];
 
$sql = "delete from mahasiswa where mahasiswa_id= '$mahasiswa_id'";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record added";

mysqli_close($conn);
 
?>