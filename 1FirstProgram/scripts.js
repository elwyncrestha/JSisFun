var colors = ["red","green","blue","yellow","black","purple","brown","pink"];

function randomColor()
{
	var colorCode = colors[parseInt(Math.random()*9)];
	document.body.style.backgroundColor = colorCode;
	
	var boom = document.getElementById("boom");
	boom.style.fontSize = Math.random()*100+"px";
}

setInterval(randomColor,1);