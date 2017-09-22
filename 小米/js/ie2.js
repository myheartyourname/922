/*
* @Author: lenovo
* @Date:   2017-09-19 16:30:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 22:08:28
*/
function getClass(classname){   //getClass是类
	
	if (false){  //判断兼容性    无IE,写(false)
		return document.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=ranger.getElementsByTagName('*');
		for (var i=0;i<all.length;i++){
			if (checkClass(all[i].className,classname)){  //check用于判断className中是否包含classname
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');  //将className分解
	for (var i=0;i<arr.length;i++){
		if (arr[i]==classname){  //判断arr中是否有classname
			return true;
		}
		return false;
	}
}
function $(select,ranger){
	ranger=ranger||document;
	var first=select.charAt(0);
	if (first=='#'){
        return document.getElementById(select.substring(1));
	}else if (first=='.'){
        return document.getElementsByClassName(select.substring(1));
	}else if (/^[a-z][a-z1-6]{0,7}$/.test(select)){  //正则
		return document.getElementsByTagName(select);
	}
}