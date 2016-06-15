<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, x-xsrf-token");

$con=mysqli_connect("localhost","root","","db_tbws");

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$data = json_decode(file_get_contents("php://input"));
$mahasiswa_npm = mysqli_real_escape_string($con, $data->mahasiswa_npm);
$mahasiswa_nama = mysqli_real_escape_string($con, $data->mahasiswa_nama);
$mahasiswa_alamat= mysqli_real_escape_string($con, $data->alamat);
$mahasiswa_email = mysqli_real_escape_string($con, $data->mahasiswa_email);
$mahasiswa_tlp = mysqli_real_escape_string($con, $data->mahasiswa_tlp);
$mahasiswa_agama = mysqli_real_escape_string($con, $data->mahasiswa_agama);
$kelas_id = mysqli_real_escape_string($con, $data->kelas_id);
 
$sql = "update mahasiswa set mahasiswa_npm='$mahasiswa_npm', mahasiswa_nama='$mahasiswa_nama',alamat='$alamat',mahasiswa_email='$mahasiswa_email',mahasiswa_tlp='$mahasiswa_tlp',mahasiswa_agama='$mahasiswa_agama',kelas_id='$kelas_id' where mahasiswa_npm ='$mahasiswa_npm'";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record update";

mysqli_close($conn);
 
?>