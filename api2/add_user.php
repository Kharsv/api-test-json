<?php

include('../db.php'); // Подключение к базе данных

// $login = $_GET['login'];
// $pass = $_POST['pass'];
$pass = '12345';
// $date_created = '2018-10-07';

// $postData = file_get_contents('php://input');
// $postData = json_decode($postData, true);

$postData = file_get_contents('php://input');
var_dump($postData);
$postData = json_decode($postData, true);



$login = $postData['login'];
var_dump($login);
var_dump($postData['login']);
// $img_path = 'default.jpg';
// if (strlen($pass) < 3 || strlen($login) < 3) {
if ( strlen($login) < 3) {
    header('Location: ../index.php');
} else {
    $query = "INSERT INTO users (login, pass, date_created )
              VALUES ( '{$postData['login']}', '$pass', NOW())
              ";

    $result = mysqli_query($link, $query);

    var_dump(mysqli_error($link));

    echo true;


    if( $result ){
        echo "Успешно";
    }else{
        echo "Произошла ошибка";
    }




    // if ($result) {
    //     header('Location: ../index.php');
    // } else {
    //     header('Location: ../index.php');
    // }
}