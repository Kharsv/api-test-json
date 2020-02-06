<?php

include('../db.php'); // Подключение к базе данных

$postData = file_get_contents('php://input');
// var_dump($postData);
$postData = json_decode($postData, true);


$findbylogin = $postData['findbylogin'];
$newlogin = $postData['newlogin'];
$findbyid;
$query = "SELECT * FROM users";
$result = mysqli_query($link, $query);

$users = [];
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

foreach ($users as $user) {
    if ($user['login'] == $findbylogin) {
        $findbyid = $user['id'];
        //     var_dump ($findbyid);
        // echo 
        // "<div>
        //     <h2>{$user['id']}</h2>
        //     <i>{$user['login']}</i>
        // </div>";
        $query = "UPDATE `users` 
        SET `login` = ('$newlogin')
        WHERE `id` = ('$findbyid')";

        $result = mysqli_query($link, $query);
        // var_dump ($result);
        $data['id'] = $findbyid;
        $data['newlogin'] = $newlogin;   
        $data = json_encode($data);
        }
    }   
    echo $data;

