<?php
header('Access-Control-Allow-Origin: *');
    // koneksi ke database
       include "../koneksi.php";
     
    // query untuk menampilkan data
        $sql = 'SELECT * FROM dosen';
        $stmt = $dbh->prepare($sql);
    // execute the query
        $stmt->execute();
     
    // pecah hasilnya ke dalam bentuk array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
     
    // konversi ke JSON
        $json = json_encode( $result );
        echo $json;
?>