<?php

   // print_r($_REQUEST);

   $nome = $_REQUEST['campo_nome'];
   $sobrenome = $_REQUEST['campo_sobrenome'];
   $senha = $_REQUEST['campo_senha'];

    print "Seu nome completo é $nome $sobrenome <br>";

    if (strlen($senha) < 6) {
        print "Sua senha é fraca!<br>";
    }