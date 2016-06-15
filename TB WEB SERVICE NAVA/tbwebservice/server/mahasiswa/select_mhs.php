<?php
header('Access-Control-Allow-Origin: *');
    // koneksi ke database
       include "../koneksi.php";
     
    // query untuk menampilkan data
        $sql = 'SELECT * FROM mahasiswa INNER JOIN kelas ON kelas.kelas_id = mahasiswa.kelas_id ORDER BY mahasiswa_id';
        $stmt = $dbh->prepare($sql);
    // execute the query
        $stmt->execute();
     
    // pecah hasilnya ke dalam bentuk array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
     
    // konversi ke JSON
        $json = json_encode( $result );
        echo $json;
?> 