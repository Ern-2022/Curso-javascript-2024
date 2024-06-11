
<?php
    $servidor="localhost";
    $user="root";
    $senha="";
    $db="contato";
    $con=new mysqli($servidor,$user,$senha,$db);

    $dados=array();

    $dados[]=array(
        "id"=>"1",
        "nome"=>"CLARK"
    );

    echo json_encode($dados)


?>