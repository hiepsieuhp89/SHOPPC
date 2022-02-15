<?php
	$HOST = "localhost";
	$USER = "root";
	$PASS = "";
	$DB = "shop";
	$ERROR1 = "Loi mysqli";
	$ERROR2 = "Loi DB";
@mysqli_connect($HOST, $USER, $PASS) or die($ERROR1);
@mysqli_select_db($DB) or die($ERROR2);
mysqli_query("SET NAMES 'utf8'");

?>