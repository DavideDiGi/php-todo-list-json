<?php

$toDoesString = file_get_contents('database.json');
$toDoes = json_decode($toDoesString, true);

$response = [
    'success' => true,
    'message' => 'Alright',
    'toDoes' => $toDoes
];

$jsonResponse = json_encode($response);

header('Content-Type: application/json');

echo $jsonResponse;
