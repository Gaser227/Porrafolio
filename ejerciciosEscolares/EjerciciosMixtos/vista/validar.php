<?php
    if(isset($_POST['figura']) && isset($_POST['base'])
    && isset($_POST['altura'])){
        $figura = htmlspecialchars($_POST['figura']);
        $base = htmlspecialchars($_POST['base']);
        $altura = htmlspecialchars($_POST['altura']);

        /*Condiciones*/

        if($figura == 'Circulo'){
            /*Calcular*/
            $area = $base*$base*3.1416;
            echo "El área de su circulo es: ".$area;
        }

        elseif($figura == 'Cuadrado'){
            $area = $base*$altura;
            echo "El área de su cuadrado es: ".$area;
        }

        elseif($figura == 'Triangulo'){
            $area = $base*$altura/2;
            echo "El área de su triángulo es: ".$area;
        }

    }
?>