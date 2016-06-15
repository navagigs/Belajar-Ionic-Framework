<?php
header('Access-Control-Allow-Origin: *');
    // variabel koneksi
        $db_name  = 'db_tbwebservice';
        $hostname = 'localhost';
        $username = 'root';
        $password = '';
        $id = $_GET['kategori_id']; 
    // koneksi ke database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
     
    // query untuk menampilkan data
        $sql = 'SELECT * FROM produk LEFT JOIN kategori ON produk.kategori_id=kategori.kategori_id Where produk.kategori_id = "' . $id. '"';
        $stmt = $dbh->prepare($sql);
    // execute the query
        $stmt->execute();
     
    // pecah hasilnya ke dalam bentuk array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
     
    // konversi ke JSON
        $json = json_encode( $result );
        echo $json;
?>