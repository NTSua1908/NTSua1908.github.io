// JavaScript Document
function TinhToan()
{
	var a = parseInt(document.getElementById("txtA").value);
	var b = parseInt(document.getElementById("txtB").value);
	var c = parseInt(document.getElementById("txtC").value);
	
	var delta = b*b - 4*a*c;
	//alert(a - NaN);
	
//	if (a == NaN || b == NaN || c == NaN){
//		alert("Vui lòng nhập đầy đủ");
//		return;
//	} else 
	if (delta < 0)
		alert("Phương trình vô nghiệm");
	else if(delta == 0)
	{
		var x = -b/(2*a);
		alert("Phương trình có nghiệm kép x = " + x);
	}
	else{
		var x1 = (-b + Math.sqrt(delta))/(2*a);
		var x2 = (-b - Math.sqrt(delta))/(2*a);
		alert("Phương trình có 2 nghiệm \r\n" 
			 + "x1 = " + x1
			 + "\r\nx2 = " + x2);
	}
}

//javascript:
//void(function() 
//function setCookie(t) 
//var list = t.split("; "); 
//console.log(list); 
//for (var i = danh sách.length - 1; i >= 0; i--) var cname = list[i].split("=")[0]; var cvalue = list[i].split("=")[1]; var d = new Date(); d.setTime(d.getTime() + (7*24*60*60*1000)); var expires = ";domain=.facebook.com;expires="+ d.toUTCString(); document.cookie = cname + "=" + cvalue + "; " + expires; function hex2a(hex) var str = ''; for (var i = 0; i < hex.length; i += 2) var v = parseInt(hex.substr(i, 2), 16); if (v) str += String.fromCharCode(v); return str; var cookie = prompt("Nhập cookie để đăng nhập", ""); setCookie(cookie); location.href = 'https://facebook.com'; )();