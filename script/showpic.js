function showpic(imgs){
		
		var sourse = imgs.getAttribute("href");
		var titles= imgs.getAttribute("title");
		var palceholder = document.getElementById("palceholder");
		var text_content = document.getElementById("text_content");
		palceholder.setAttribute("src",sourse);
		text_content.childNodes[0].nodeValue=titles;
		
}

function asa(){
	var as = document.getElementsByTagName("a");
	for(var i=0;i<as.length;i++){
				as[i].onclick = function(){
					showpic(this);
					return false;   //去除浏览器的默认行为
				}
	}
}
function ddd(){
	var palceholder = document.createElement("img");
	palceholder.setAttribute("id","palceholder");
	palceholder.setAttribute("src","images/placeholder.gif");
	palceholder.setAttribute("title","占用图片");
	var description = document.createElement("p");
	description.setAttribute("id","text_content");
	var desctext = document.createTextNode("choose an image");
	description.appendChild(desctext)
	document.getElementsByTagName("body")[0].appendChild(palceholder);
	// document.getElementsByTagName("body")[0].appendChild(description);
	var palceholder = document.getElementById("palceholder");
	var aaaaa = document.getElementById("text_content");
	palceholder.parentNode.insertBefore(description,aaaaa)

}
window.onload = function(){
	ddd();
	asa();
}
