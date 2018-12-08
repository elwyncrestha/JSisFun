alert("Works in 24 hour clock");
var name = prompt("Enter your name:","Elvin Shrestha");

function greetBaby()
{
	var date = new Date();
	var hrs = date.getHours();
	if(hrs >= 4 && hrs <= 11)
		return "Good Morning";
	else if(hrs >= 12 && hrs <= 17)
		return "Good Afternoon";
	else if(hrs >= 18 && hrs <= 20)
		return "Good Evening";
	else if(hrs >= 21 || hrs <= 3)
		return "Good Night";
}

function syncTime()
{
	var date = new Date();
	var hrs = date.getHours();
	var mins = date.getMinutes();
	var secs = date.getSeconds();
	
	var time = document.getElementById("time");
	time.innerHTML = "It's " + hrs + ":" + mins + ":" + secs + " right now."
}

var greet = document.getElementById("greet");
greet.innerHTML = greetBaby();
document.getElementById("name").innerHTML = name;
setInterval(syncTime,1000);