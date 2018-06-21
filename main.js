window.onload = function() {
	[].forEach.call(document.getElementsByClassName('menu'),function(e){
		e.onclick = function() {
			let nexts = [];
			let cur = e.nextElementSibling;
			for(;cur.nodeName === "P";cur = cur.nextElementSibling){
				nexts.push(cur);
			}
			flg = false;
			nexts.forEach(v => {
				if(v.nodeName === "P"){
					if(v.style.visibility === 'visible'){
						v.style.visibility = 'hidden';
						v.style.width = '0';
						v.style.paddingLeft = '0';
					}
					else{
						if(!flg){flg = true;}
						v.style.visibility = 'visible';v.style.width = '85%';v.style.paddingLeft = '15%';}
				}
			});
			if(flg) {e.style.fontWeight = 'bold';}
			else    {e.style.fontWeight = 'normal';}
		};
	});
	[].forEach.call(document.getElementsByClassName('menu-item'),e => {
		e.onclick = () => {
			let elems = document.getElementsByClassName('menu-item');
			let idx = [].indexOf.call(elems,e);
			for(let i=0;i<elems.length;i++){
				if(i === idx){continue;}
				elems[i].style.textDecoration = 'none';
			}
			e.style.textDecoration = 'underline';
			[].forEach.call(document.getElementsByClassName('content'),v => v.style.visibility = 'hidden');
			document.getElementById(e.id + '-content').style.visibility = 'visible';
		};
	});
};
