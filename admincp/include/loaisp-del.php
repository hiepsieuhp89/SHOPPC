<?php
	$idl=$_GET["idl"];	
	$check=mysqli_query("select count(*) from sanpham where id_loai='$idl'");
	$r=mysqli_fetch_array($check);
	$n=$r[0];
	if($n!=0)
		echo "<script>alert('Không thể xóa!! vì có sản phẩm thuộc loại này');window.location='../admincp/?m=mn&b=loaisp-list';</script>";		
	else{
	$sql="delete from loaisanpham where id_loai='$idl'";
	$conn = include "connect.php"; $kq=mysqli_query($conn, $sql);
	if(!$kq)
		echo "<script>alert('Có lỗi trong khi xóa!!!');window.location='../admincp/?m=mn&b=loaisp-list';</script>";
	else
	{
		$n=mysqli_affected_rows();
		echo "<script>alert('Đã xóa');window.location='../admincp/?m=mn&b=loaisp-list';</script>";		
	}
	}

?>