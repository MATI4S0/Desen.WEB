<?php

    

    function somatorio(int $n)
    {

        $somatorio = 0;

        for ($i=1; $i < $n; $i++) { 
           $somatorio += $i;
        }

        return $somatorio;
    }

    function somaAno(int $numero)
    {
        $soma = 0;

        while($numero > 0){
            $digito = $numero % 10;
            $soma += $digito;
            $numero = $numero / 10;

        }

        return $soma;
    }

    function safadometro(int $dia, int $mes, int $ano)
    {
        $safadeza = somatorio($mes) + (somaAno($ano) * (50 - $dia) ) / 10;

        $angeza = 100 - $safadeza;

        print "Você é $safadeza% safadinho😈<br>";
        print "E $angeza% anginho😇<br>";

    }

    $dia = $_REQUEST['campo_dia'];
    $mes = $_REQUEST['campo_mes'];
    $ano = $_REQUEST['campo_ano'];

    safadometro($dia, $mes, $ano);

    