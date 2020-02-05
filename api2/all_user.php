<?php

include('../db.php'); // Подключение к базе данных

// $postData = file_get_contents('php://input');
// var_dump($postData);
// $postData = json_decode($postData, true);

$query = "SELECT * FROM users";
$result = mysqli_query($link, $query);


$users = [];
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

$data = ['users' => $users];
$data = json_encode($data);

echo $data;