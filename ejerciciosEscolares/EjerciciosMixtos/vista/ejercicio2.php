<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
	<link rel="stylesheet" href="css/ejercicios.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<center>
    <h1>Tabla de multiplicar</h1>
    <form action = "ejercicio2.php" method = "GET">
        <label>Ingresa un número:</label>
        <input type = "number" min = "1" name = "cajanumero">
        <input type = "submit" value = "Crear tabla">
    </form>

<?php
	if(isset($_GET['cajanumero'])){
		$numeroingresado = $_GET['cajanumero'];
		echo "<table border = '1'><br>";
		echo "<h3>Tabla del $numeroingresado</h3>";
		for($i = 1; $i <= 12; $i++){
			$valor = $i*$numeroingresado;
			echo "<tr>";
			echo "<td>$i X $numeroingresado </td>";
			echo "<td>$valor</td>";
			echo "</tr>";
		}
		echo "</table>";
	}
?>

</center>
<div class="regreso">
            <a href="index.html"><button>Regresar</button></a>
        </div>
</body>
</html>