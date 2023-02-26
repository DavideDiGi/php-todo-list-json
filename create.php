<?php

var_dump($_POST);

$toDosString = file_get_contents('./database.json');
$toDosDecoded = json_decode($toDosString, true);

$newToDo = [
    'text' => $_POST['toDo']['text'],
    'done' => $_POST['toDo']['done'] == 'true' ? true : false
];

$toDosDecoded[] = $newToDo;

$toDosEncoded = json_encode($toDosDecoded);

file_put_contents('./database.json', $toDosEncoded);

header('Content-Type: application/json');

echo $toDosEncoded;
