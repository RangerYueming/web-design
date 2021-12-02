//make changes to the css using JS

function changeCSS(){
	var x = document.getElementById("menu");
	x.className = "showList";
	document.getElementById("menu").style.color = "blue";
	x.style.fontFamily = "Arial";
	x.style.fontSize = "larger";
}
function hide(){
	document.getElementById("demu").className = "hideList";
}
function swap(){
	//1-the attribute I am changing is the src attribute on the img tag
	//2-changing it to the other image
	document.getElementById("img-swap").setAttribute("src", "proble,-solving.png");
}