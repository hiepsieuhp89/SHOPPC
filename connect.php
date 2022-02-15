<?php
	$HOST = "localhost";
	$USER = "root";
	$PASS = "";
	$DB = "shopmaytinh";
	$ERROR1 = "Loi mysqli";
	$ERROR2 = "Loi DB";

	$conn = mysqli_connect($HOST, $USER, $PASS, $DB, 3306);
	//var_dump($conn)
	//$conn = mysqli_connect("localhost",$USER,$PASS,$DB);
	//$mysqli = new mysqli("localhost",$USER,$PASS,$DB);

	//$conn->set_charset('utf8mb4'); // always set the charset

	return $conn;
?>