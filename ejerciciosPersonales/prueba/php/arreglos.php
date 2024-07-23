<?php

$numeros = [6,7,9,3,2,99,1,0,4,6];
$numMax = null;
$numMin = null;


for ($i = 0; $i < 10; $i++) {
    
    $num = $numeros[$i];

    /*if($i == 6){
        print_r($i);
        print_r($num);
    }*/

    if($numMax == null && $numMin == null){
        $numMax = $num;
        $numMin = $num;
    }

    if($num > $numMax){
        $numMax = $num;
    }else if($num < $numMin){
        $numMin = $num;
    }
}

print_r("El maximo es: " .$numMax);?>
<br>
<br>
<?php
print_r("El minimo es: " .$numMin);

?>