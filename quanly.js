//*******************************************************************************
function isEmpty(ten)
{
	if (ten=="")
		return false;
	return true;
}
//*******************************************************************************
function isEmail(string) {
	if (string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}

//*******************************************************************************
function checklengthuser(user)
{
	p=document.formthanhvien.user.value;
	if(p.length<6)
		return false;
	else
		return true;
}

//*******************************************************************************
function checklengthpass(pass)
{
	p=document.formthanhvien.pass.value;
	if(p.length<6)
		return false;
	else
		return true;
}

//*******************************************************************************
function checklengthpass2(pass)
{
	p=document.changepw.pass.value;
	if(p.length<6)
		return false;
	else
		return true;
}

//*******************************************************************************
function checkquyen(quyen)
{
	if(quyen==""||quyen=="chonquyen")
		return false;
	return true;
}

//*******************************************************************************
function checkuser(user)
{
	if(user=="administrator"||user=="admin"||user=="quantrivien")
		return false;
	return true;
}

//*******************************************************************************
function checkloaisp(loaisp)
{
	if(loaisp=="chonlsp")
		return false;
	return true;
}

//*******************************************************************************
function checkmenu(menu)
{
	if(menu=="chonmenu")
		return false;
	return true;
}

//*******************************************************************************
function valid(o,w){
o.value = o.value.replace(valid.r[w],'');
}
valid.r={
'numbers':/[^\d]/g
}

//*******************************************************************************
function Checkimage(hinhanh)
{
	var filename = hinhanh;	
	var dotpos;
	filename = filename.substring(filename.lastIndexOf("\\")+1,filename.length);
	dotpos=filename.lastIndexOf('.');
	ext=filename.substr(dotpos+1,3);
	ext=ext.toLowerCase();
	fname=filename.substr(0,dotpos);	
	if(dotpos==-1||dotpos==0){
		alert("???????ng d???n kh??ng t???n t???i");
		return false;
	}	
	if (ext!="")
		if ((ext!="gif") && (ext!="jpg") && (ext!="png") && (ext!="jpeg") ){
			alert("File h??nh kh??ng h???p l??? - Ch??? upload ???????c c??c ki???u h??nh .jpg - .jpeg - .gif - .png");
			return false;
		}
	
	return true;
}

//*********************************************************************************
function Checkimage2(hinhanh)
{
	var filename = hinhanh;	
	var dotpos;
	filename = filename.substring(filename.lastIndexOf("\\")+1,filename.length);
	dotpos=filename.lastIndexOf('.');
	ext=filename.substr(dotpos+1,3);
	ext=ext.toLowerCase();
	fname=filename.substr(0,dotpos);	
	if (ext!="")
		if ((ext!="gif") && (ext!="jpg") && (ext!="png") && (ext!="jpeg") ){
			alert("File h??nh kh??ng h???p l??? - Ch??? upload ???????c c??c ki???u h??nh .jpg - .jpeg - .gif - .png");
			return false;
		}
	
	return true;
}

//**********************************************************************************
function lienhe(hoten,email,noidung)
{
	if(isEmpty(hoten)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p h??? t??n");
		return false;
	}
	if(isEmail(email)==false)
	{
		alert("Email kh??ng h???p l???!");
		return false;
		
	}	
	if(isEmpty(noidung)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p n???i dung");
		return false;
	}	
}

//**********************************************************************************
function gopy(tieude,hoten,email,noidung)
{
	if(isEmpty(tieude)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p ti??u ?????");
		return false;
	}	
	if(isEmpty(hoten)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p h??? t??n");
		return false;
	}
	if(isEmail(email)==false)
	{
		alert("Email kh??ng h???p l???!");
		return false;
		
	}	
	if(isEmpty(noidung)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p n???i dung");
		return false;
	}	
		
}

//**********************************************************************************
function onlyNumbers(e)
{
	var keynum;
	var keychar;
	var numcheck;
	
	if(window.event) // IE
	keynum = e.keyCode;
	else if(e.which) // Netscape/Firefox/Opera
	keynum = e.which;
	keychar = String.fromCharCode(keynum);
	numcheck = /\d/;
	return numcheck.test(keychar);
	onkeydown="return onlyNumbers(event)"
}

//**********************************************************************************
function thanhvien_insert(user,pass,apass,hoten,email,diachi,dienthoai)
{
	if (isEmpty(user)==false)
    {
		alert("T??n ????ng nh???p kh??ng ???????c r???ng!");
		return false;
	}
	
	if(checkuser(user)==false)
	{
		alert("Qu?? kh??ch kh??ng th??? ????ng k?? t??n ????ng nh???p n??y!");
		return false;	
	}
	
	if(checklengthuser(user)==false)
	{
		alert("Chi???u d??i c???a t??n ????ng nh???p ph???i l???n h??n 6 k?? t???!");
		return false;		
	}
	
	if(isNaN(user)==false)
	{
		alert("T??n ????ng nh???p ph???i l?? ch???! kh??ng ???????c l?? s???!");
		return false;
	}
	
	if (isEmpty(pass)==false)
   	 {
  	   alert("M???t kh???u kh??ng ???????c r???ng!");	
		 return false;
		}
	else 
		if (isEmpty(apass)==false)
    	{
	  	   alert("M???t kh???u kh??ng ???????c r???ng!");	
			 return false;
		}
		else
			if (pass!=apass)
    		{
	  		   alert("M???t kh???u kh??ng gi???ng nhau! Nh???p l???i!");	
				 return false;
			}
	
	if(checklengthpass(pass)==false)
	{
		alert("Chi???u d??i m???t kh???u ph???i l???n h??n 6!");
		return false;
	}
	
	if (isEmpty(hoten)==false)
    {
		alert("H??? t??n kh??ng ???????c r???ng!");
		return false;
	}	
	
	if (isEmail(email)==false)
    {
		alert("Email kh??ng h???p l???!");
		return false;
	}

	if (isEmpty(diachi)==false)
    {
		alert("?????a ch??? kh??ng ???????c r???ng!");
		return false;
	}
	
	if (isEmpty(dienthoai)==false)
    {
		alert("??i???n tho???i kh??ng ???????c r???ng!");
		return false;
	}	

return true;
}

//**********************************************************************************
function thanhvien_change(hoten,email,diachi,anti)
{	
	if (isEmpty(hoten)==false)
    {
		alert("H??? t??n kh??ng ???????c r???ng!");
		return false;
	}	
	
	if (isEmail(email)==false)
    {
		alert("Email kh??ng h???p l???!");
		return false;
	}

	if (isEmpty(diachi)==false)
    {
		alert("?????a ch??? kh??ng ???????c r???ng!");
		return false;
	}		
	
	if (isEmpty(anti)==false)
    {
		alert("M?? an to??n kh??ng ???????c r???ng!");
		return false;
	}
return true;
}

//********************************************************************************
function thanhvien_changepw(pw_old,pw,cpw)
{
	if (isEmpty(pw_old)==false)
    {
		alert("M???t kh???u c?? kh??ng ???????c r???ng");
		return false;
	}
	
	if (isEmpty(pw)==false)
   	 {
  	   alert("M???t kh???u m???i kh??ng ???????c r???ng");	
		 return false;
		}
	else 
	{
		if (isEmpty(cpw)==false)
    	{
	  	   alert("Vi???t l???i M???t kh???u kh??ng ???????c r???ng");	
			 return false;
		}
		else
		{
			if (pw!=cpw)
    		{
	  		   alert("Vi???t l???i M???t kh???u b??? sai");	
				 return false;
			}
		}
	}	
	
	if(checklengthpass(pw)==false)
	{
		alert("Chi???u d??i m???t kh???u ph???i l???n h??n 6!");
		return false;
	}
return true;
}

//*******************************************************************************
function thanhvien_resetpw(users,email)
{
	if (isEmpty(users)==false)
    {
		alert("T??n ????ng nh???p kh??ng ???????c ph??p r???ng");
		return false;
	}
	if(checkuser(users)==false)
	{
		alert("Qu?? kh??ch kh??ng ???????c quy???n l???y l???i m???t kh???u c???a t??i kho???n qu???n tr???");
		return false;
	}
	if (isEmail(email)==false)
   	 {
  	   alert("Email kh??ng h???p l???");	
		 return false;
	}
	

return true;
}

//*******************************************************************************
function thanhtoan(hoten,diachi,email,dt)
{
	if (isEmpty(hoten)==false)
    {
		alert("Qu?? kh??ch ph???i nh???p H??? t??n");
		return false;
	}
	
	if (isEmpty(diachi)==false)
    {
		alert("Qu?? kh??ch ph???i nh???p ?????a ch??? !");
		return false;
	}
	
	if (isEmail(email)==false)
   	 {
  	   alert("Email kh??ng h???p l???");	
		 return false;
	}
	
	if(isEmpty(dt)==false)
	{
		alert("Qu?? kh??ch ch??a nh???p ??i???n tho???i!");
		return false;
	}
	
return true;
}

//*******************************************************************************
function sp_insert(loaisp,tensp,hinh,ghichu)
{
	if(checkloaisp(loaisp)==false)
	{
		alert("Ch??a ch???n lo???i s???n ph???m!");
		return false;
	}
	
	if (isEmpty(tensp)==false)
   	 {
  	   alert("Ch??a nh???p t??n s???n ph???m");	
		 return false;
	}
	
	if (Checkimage(hinh)==false)
    {
		return false;
	}
	if(checkmenu(ghichu)==false)
	{
  	   alert("Ch??a ch???n ghi ch??");	
		return false;			
	}
return true;
}

//*******************************************************************************
function sp_insert_m(menu,tensp,hinh,ghichu)
{
	if(checkmenu(menu)==false)
	{
		alert("Ch??a ch???n lo???i s???n ph???m!");
		return false;
	}
	
	if (isEmpty(tensp)==false)
   	 {
  	   alert("Ch??a nh???p t??n s???n ph???m");	
		 return false;
	}
	
	if (Checkimage(hinh)==false)
    {
		return false;
	}
	if(checkmenu(ghichu)==false)
	{
  	   alert("Ch??a ch???n ghi ch??");	
		return false;			
	}
return true;
}

//*******************************************************************************
function check()
{
	var thongbao=window.confirm("B???n ch???c ch???n mu???n x??a?");
  if (thongbao==true)
  		return true;
  else 
		return false;
}

//*******************************************************************************
function checklh()
{
	var thongbao=window.confirm("B???n ch???c ch???n mu???n x??a li??n h??? n??y?");
  if (thongbao==true)
  		return true;
  else 
		return false;
}

//*******************************************************************************
function checktv()
{
	var thongbao=window.confirm("B???n ch???c ch???n mu???n x??a th??nh vi??n n??y?");
  if (thongbao==true)
  		return true;
  else 
		return false;
}
//*******************************************************************************
function tk(text_content)
{
	if (isEmpty(text_content)==false)
    {
		alert("Ch??a nh???p t??? kh??a c???n t??m!");
		return false;
	}	
return true;
}

//*******************************************************************************
function admin_changepw(pw_old,pw,cpw)
{
	if (isEmpty(pw_old)==false)
    {
		alert("M???t kh???u c?? kh??ng ???????c r???ng");
		return false;
	}
	
	if (isEmpty(pw)==false)
   	 {
  	   alert("M???t kh???u m???i kh??ng ???????c r???ng");	
		 return false;
		}
	else 
	{
		if (isEmpty(cpw)==false)
    	{
	  	   alert("Vi???t l???i M???t kh???u kh??ng ???????c r???ng");	
			 return false;
		}
		else
		{
			if (pw!=cpw)
    		{
	  		   alert("Vi???t l???i M???t kh???u b??? sai");	
				 return false;
			}
		}
	}	
return true;
}

//*******************************************************************************
function tintuc_insert(noidung,ghichu)
{
	if(isEmpty(noidung)==false)
	{
		alert("Ch??a nh???p n???i dung!");	
		return false;
	}
	
	if (checkmenu(ghichu)==false)
    {
		alert("Ch??a ch???n tr???ng th??i!");
		return false;
	}
			
return true;
}

//*******************************************************************************
function mdkd_insert(loai,ten,hinh)
{
	if (checkmenu(loai)==false)
    {
		alert("Ch??a ch???n lo???i!");
		return false;
	}	
	if(isEmpty(ten)==false)
	{
		alert("Ch??a nh???p t??n");	
		return false;
	}
	if (Checkimage(hinh)==false)
    {
		return false;
	}
return true;
}

//*******************************************************************************
function nhomsp_insert(ten)
{
	if (isEmpty(ten)==false)
    {
		alert("Ch??a nh???p t??n nh??m!");
		return false;
	}	
return true;
}

//*******************************************************************************
function loaisp_insert(nhomsp,ten)
{
	if (checkmenu(nhomsp)==false)
    {
		alert("Ch??a ch???n nh??m s???n ph???m!");
		return false;
	}
	if (isEmpty(ten)==false)
    {
		alert("Ch??a nh???p t??n lo???i!");
		return false;
	}	
return true;
}