<?php

header("Access-Control-Allow-Origin: *");
require_once("mysql_credentials.php");

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

$userID = $request_data['id'];

$query = "UPDATE student_data SET status = 0 WHERE id = $userID";

$output = [
    'success'=> false,
    'tasks'=> [],
    'user'=> [],
    'errors'=> []
];

if (mysqli_query($conn, $query)) {
    $output['success'] = true;
    echo "Student Deleted Successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>