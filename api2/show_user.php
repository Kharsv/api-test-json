<?php

include('../db.php'); // Подключение к базе данных

$postData = file_get_contents('php://input');
// var_dump($postData);
$postData = json_decode($postData, true);


$showbyid = $postData['showbyid'];

// var_dump($showbyid);


$query = "SELECT * FROM users";
$result = mysqli_query($link, $query);

$users = [];
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

foreach ($users as $user) {
    if ($user['id'] == $showbyid) {
        // var_dump ($user['login']);    
        $data['login'] = $user['login'];
        
        // var_dump($data);
        $data = json_encode($data);
        
      
    }
    else {
        // echo 'Не найдено';
    }
}
echo $data;