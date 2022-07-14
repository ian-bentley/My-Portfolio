<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ian Bentley's Portfolio</title>
        <meta name="description" content="My portfolio">

        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <?php
            $servername = "localhost";
            $username = "ianbeley_owner";
            $password = "Pasw*750243*";
            $dbname = "ianbeley_library";

            try {
                $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $stmt = $conn->prepare("SELECT * FROM `Books`");
                $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($data);
            }
            catch(PDOException $e) {
                echo "Error: " . $e->getMessage();
            }
        ?>
    </body>
</html>