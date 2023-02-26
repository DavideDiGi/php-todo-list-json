<?php

$toDosString = file_get_contents('./database.json');
$toDosDecoded = json_decode($toDosString, true);

$response = [
    'success' => true,
    'message' => 'Alright',
    'toDos' => $toDosDecoded
];

header('Content-Type: application/json');

$toDosEncoded = json_encode($toDosDecoded);


echo $toDosEncoded;
