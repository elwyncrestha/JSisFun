var i=0;
function changeImage()
{
	var slideshow = document.getElementById("slideshow");
	var images = ["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg"];
	slideshow.src = images[i++];
	if(i>3)
		i=0;
}

function changeJumbotron()
{
	var jn = document.getElementsByClassName("jumbotron");
	var colors = ["green","yellow","purple","violet","blue"];
	
	jn[0].style.backgroundColor = colors[parseInt(Math.random() * 6)];
}

setInterval(changeJumbotron,5000);
setInterval(changeImage,3000);