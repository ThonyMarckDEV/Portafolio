<?php
// Datos de la base de datos
$servername = "localhost"; // o la dirección IP del servidor
$username = "app"; // tu usuario de MySQL
$password = "123456"; // tu contraseña de MySQL
$dbname = "testdb"; // el nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión exitosa a la base de datos";

// Cerrar la conexión cuando hayas terminado
$conn->close();
?>
