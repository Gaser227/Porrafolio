<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
    <link rel="stylesheet" href="css/ejercicios.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="titulo">
        <h1>Ejercicio 1</h1>
    </div>
    <form action = "validar.php" method = "POST" class = "formulario" accept-charset = "utf-8">
        <label>Figura:</label>
        <select name = "figura"id = "figura">
            <option value = "Circulo" id = "Circulo">Círculo</option>
            <option value = "Cuadrado"id = "Cuadrado">Cuadrado</option>
            <option value = "Triangulo"id = "Triangulo">Triángulo</option>
        </select>
        <br>
        <label>Ingresa la base:</label>
        <input type = "text" name = "base" id = "base">
        <br>
        <label>Ingresa la altura:</label>
        <input type = "text" name = "altura" id = "altura">
        <input type = "submit" value = "Enviar">
    </form>
    <div class="regreso">
            <a href="index.html"><button>Regresar</button></a>
        </div>
</body>
</html>