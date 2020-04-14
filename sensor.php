<?php

$hostname="vpd.cz9vrmfxvqy2.us-east-2.rds.amazonaws.com";
$username="admin";
$password="visint11";
$project="sensor";

$db = mysqli_connect($hostname, $username, $password, $project);
if(!$db) {
	die("Connection failed: " . mysqli_connect_error() . "\n");
}

$sql = "SELECT * from sensor.vpd";
$res = mysqli_query($db, $sql);

$tempArr = array();
while($row = mysqli_fetch_assoc($res)) {
	$tempArr[] = $row;
}

echo json_encode($tempArr);

?>
