<?php
header('Access-Control-Allow-Origin: *');
    // koneksi database
       include "../koneksi.php";
        $id = $_GET['mahasiswa_id']; 
    // query untuk menampilkan data
        $sql = 'SELECT * FROM mahasiswa JOIN kelas ON mahasiswa.kelas_id=kelas.kelas_id Where mahasiswa.mahasiswa_id = "' . $id. '"';
        $stmt = $dbh->prepare($sql);
    // execute the query
        $stmt->execute();
     
    // pecah hasilnya ke dalam bentuk array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
     
    // konversi ke JSON
        $json = json_encode( $result );
        echo $json;
?>