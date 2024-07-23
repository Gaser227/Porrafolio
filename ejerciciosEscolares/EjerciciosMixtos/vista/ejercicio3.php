<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio3</title>
    <link rel="stylesheet" href="css/ejercicios.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<div class="titulo">
        <h1>Ejercicio 3</h1>
    </div>
    <center>
    <label for = "">Ingresa texto: </label>
    <input type = "text" name = "caja" id = "caja">
    <input type = "submit" value = "Agregar" onclick = "agregar()">
    <br>
    <br>
    <ul id = "lista" style="list-style-type:none;"> 
    </ul>
    <script>
        function agregar(){
            var text = document.getElementById('caja').value;
            var lista = document.getElementById('lista');
            var item = document.createElement('li');
            var item_text = document.createTextNode(text);
            item.appendChild(item_text);
            lista.appendChild(item);
            document.getElementById('caja').value = "";

        }
    </script>
    </center>
    <div class="regreso">
            <a href="index.html"><button>Regresar</button></a>
        </div>
</body>
</html>