<?php

header("Access-Control-Allow-Origin: *");
require_once("mysql_credentials.php");

$query = "SELECT * FROM student_data WHERE status = 1";

$result = mysqli_query($con, $query);
$output = [
    'success'=> false,
    'tasks'=> [],
    'user'=> [],
    'errors'=> []
];

if($result){
    //query was fine
    if(mysqli_num_rows($result)>0){
        //query returned data
        $output['success'] = true;
        while($row = mysqli_fetch_assoc($result)){
            $output['students'][] = $row;
        }
    } else {
        //there was no data in the query
        $output['errors'][] = 'no data available';
    }
} else {
    //mysql problem
    $output['errors'][] = 'error with query';
}

$json_output = json_encode($output);

print($json_output);

?>