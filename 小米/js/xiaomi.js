/*
* @Author: lenovo
* @Date:   2017-09-20 11:49:57
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-23 00:38:41
*/
window.onload=function(){
	let aside=$('.cedaohang')[0];
	let lis=aside.getElementsByTagName('li');
	let banner=$('.banner')[0];
	let left=$('.pref',banner)[0];
	let right=$('.next',banner)[0];
	let list=$('.img-list',banner)[0];
    let img=list.getElementsByTagName('li');
    let yuan=$('.yuan')[0];
    let lis1=yuan.getElementsByTagName('li');
    let now=0;
    let next=0;
    let t=setInterval(move,5000);
    let imgw=parseInt(getComputedStyle(list,null).width);
    let flag=true;


    for (let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let items=this.getElementsByClassName('items')[0];
            items.className='items block';
		}
		lis[i].onmouseout=function(){
			let items=this.getElementsByClassName('items')[0];
			items.className='items';
		}
	}

    for (let i=0;i<lis1.length;i++){
    	lis1[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		lis1[i].style.background='#7c7c81';
    		lis1[now].style.background='#16161c';
    		img[i].style.left=`${imgw}px`;
		    animate(img[now],{left:-imgw});
		    animate(img[i],{left:0});
		    now=next=i;
    	}
    }

	function move(){
		next++;
		if (next==img.length){
            next=0;
		}
		img[next].style.left=`${imgw}px`;
		animate(img[now],{left:-imgw});
		animate(img[next],{left:0},function(){
			flag=true;
		});
		lis1[next].style.background='#7c7c81';
    	lis1[now].style.background='#16161c';
		now=next;
		// console.log(next);
	}
	function move1(){
		next--;
		if (next<0){
            next=img.length-1;
		}
		img[next].style.left=`${-imgw}px`;
		animate(img[now],{left:imgw});
		animate(img[next],{left:0},function(){
			flag=true;
		});
		lis1[next].style.background='#7c7c81';
    	lis1[now].style.background='#16161c';
		now=next;
		// console.log(next);
	}
    left.onclick=function(){
    	if (!flag){
    		return;
    	}
    	move1();
    	flag=false;
    }
    right.onclick=function(){
    	if (!flag){
    		return;
    	}
    	move();
    	flag=false;
    }
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(move,5000);
    }
    
    let bottom =document.getElementsByClassName('bottom')[0];
    let tuijian=bottom.getElementsByClassName('tuijian')[0];
    let zuojiantou=document.getElementsByClassName('zuojiantou')[0];
    let youjiantou=document.getElementsByClassName('youjiantou')[0];
    let bottomw=parseInt(getComputedStyle(bottom,null).width);
    let t1=setInterval(movetuijian,3000);
    zuojiantou.onclick=function(){
        // tuijian.style.left=bottomw+'px';
        animate(tuijian,{left:0});
        zuojiantou.style.color='#ff6700';
        // youjiantou.style.color='#e0e0e0';
    }
    youjiantou.onclick=function(){
        // tuijian.style.left=bottomw+'px';
        animate(tuijian,{left:-bottomw});
        youjiantou.style.color='#ff6700';
        // zuojiantou.style.color='#e0e0e0';
    }
    zuojiantou.onmouseover=function(){
        clearInterval(t1);
    }
    zuojiantou.onmouseout=function(){
        t1=setInterval(movetuijian,5000);
    }
    function movetuijian(){
        animate(tuijian,{left:-bottomw});
        if (tuijian.style.left== -bottomw+'px'){
            animate(tuijian,{left:0});
            zuojiantou.style.color='#e0e0e0';
            youjiantou.style.color='#b0b0b0';
            youjiantou.style.cursor='pointer';
        }    
        if (tuijian.style.left== 0){
            animate(tuijian,{left:-bottomw});
            youjiantou.style.color='#e0e0e0';
            zuojiantou.style.color='#b0b0b0';
            zuojiantou.style.cursor='pointer';
        }
       
    }
}