<?php
    $servername = "localhost";
    $username = "ianbeley_owner";
    $password = "Pasw*750243*";
    $dbname = "ianbeley_library";

    try {
        $query = $_GET['query'];
        
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare($query);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
?>