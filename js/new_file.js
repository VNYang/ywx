window.onload = function(){//当页面加载完毕再执行
	var h1 = document.getElementsByTagName("h1")[0];
	
	h1.onclick = function(){
		this.style.color = "blue"
	}
}
