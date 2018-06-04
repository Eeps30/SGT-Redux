<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once("mysql_credentials.php");

$entityBody = file_get_contents('php://input');
$request_data = json_decode($entityBody, true);

$name = $request_data['name'];
$grade = $request_data['grade'];
$course_name = $request_data['course_name'];

$query = "INSERT INTO student_data (name, grade, course_name) VALUES ('$name', '$grade', '$course_name')";

$output = [
    'success'=> false,
    'tasks'=> [],
    'user'=> [],
    'errors'=> []
];

if (mysqli_query($conn, $query)) {
    $output['success'] = true;
    echo "Added Student Successfully";
} else {
    echo "Error adding record: " . mysqli_error($conn);
}

mysqli_close($conn);

?>