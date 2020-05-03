<?php

$hostname="vpd.cz9vrmfxvqy2.us-east-2.rds.amazonaws.com";
$username="admin";
$password="visint11";
$project="sensor";

$db = mysqli_connect($hostname, $username, $password, $project);
if(!$db) {
	die("Connection failed: " . mysqli_connect_error() . "\n");
}

$sql1= "Select * from sensor.vpd Where UID = (Select UID from sensor.UserUID where User = 'Vise') Order by sensor.vpd.time DESC Limit 20;";

$res = mysqli_query($db, $sql1);

$tempArr = array();
while($row = mysqli_fetch_assoc($res)) {
	$tempArr[] = $row;
}

echo json_encode($tempArr);

?>
