<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Prueba</title>
    <h1>Prueba</h1>
</head>
<body>
    <div class="columna">
        <div class="columnas columnaIz">
            <h3>Arreglos de Numeros</h3>
            <?php
            include("php/arreglos.php");
            ?>
        </div>

        <div class="columnas columnaDer" id="impresionNumeros">
            <h3>Impresion de Numeros</h3>
        </div>
    </div>
    <script src="js/impresionNumero.js"></script>
</body>
<footer>
    <p>Navarro Reval José Manuel</p>
    <p>23/01/2024</p>
</footer>
</html>