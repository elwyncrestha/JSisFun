var container = document.getElementById("container");
var box = document.getElementById("box");
var pos = 0;

var move;

function start()
{
	var btn = document.getElementById("btn");
	btn.parentNode.removeChild(btn);
	var h1 = document.createElement("h1");
	var node = document.createTextNode("My first JS animation");
	h1.appendChild(node);
	document.body.appendChild(h1);
	move = setInterval(moveRight,1);
}

function moveRight()
{
	if(pos >= container.offsetWidth - box.offsetWidth)
	{
		clearInterval(move);
		pos = 0;
		move = setInterval(moveDown,1);
	}
	else
		box.style.left = ++pos + "px";
}

function moveDown()
{
	if(pos >= container.offsetHeight - box.offsetHeight)
	{
		clearInterval(move);
		pos = container.offsetWidth - box.offsetWidth;
		move = setInterval(moveLeft,1);
	}
	else
		box.style.top = ++pos + "px";
}

function moveLeft()
{
	if(pos <= 0)
	{
		clearInterval(move);
		pos = container.offsetHeight - box.offsetHeight;
		move = setInterval(moveUp,1);
	}
	else
		box.style.left = --pos + "px";
}

function moveUp()
{
	if(pos <= 0)
	{
		clearInterval(move);
		// pos reset to 0 here, no assignment required
		move = setInterval(moveRight,1);
	}
	else
		box.style.top = --pos + "px";
}