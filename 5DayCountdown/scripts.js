var currentDate;
var deadline = new Date("January 19, 2019 00:00:00");

window.onload = showDeadline();
setInterval(changeBodyColor,3000);
setInterval(changeCurrentDate,1000);
setInterval(remaining,1000);

function changeBodyColor()
{
	let body = document.getElementsByTagName("body");
	let colors = ["green","yellow","purple","violet","blue"];
	
	body[0].style.backgroundColor = colors[parseInt(Math.random() * colors.length-1)];
}

function changeCurrentDate()
{
	currentDate = new Date();
	let today = document.getElementById("today");
	today.innerHTML = completeDate(currentDate);
}

function showDeadline()
{
	let d = document.getElementById("deadline");
	d.innerHTML = completeDate(this.deadline);
}

function changeDeadline()
{
	let changeDate = document.getElementById("changeDate");
	deadline = new Date(changeDate.value);
	deadline.setHours(0);
	deadline.setMinutes(0);
	deadline.setSeconds(0);
	showDeadline();
}

function remaining()
{
	let remain = Math.floor((deadline - currentDate) / (1000*60*60*24));
	let countdown = document.getElementById("countdown");
	countdown.innerHTML = remain + " days";
}

function completeDate(date)
{
	let yrs = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	let hrs = date.getHours();
	let mins = date.getMinutes();
	let secs = date.getSeconds();
	let dow = date.getDay();	// day of week
	let completeDate = yrs + "/" + (month+1) + "/" + day + " (" + dayOfWeek(dow) + ") " + hrs + ":" + mins + ":" + secs;
	return completeDate;
}

function dayOfWeek(day)
{
	let dayOfWeek;
	switch(day)
	{
		case 0:
			dayOfWeek = "Sunday";
			break;
		case 1:
			dayOfWeek = "Monday";
			break;
		case 2:
			dayOfWeek = "Tuesday";
			break;
		case 3:
			dayOfWeek = "Wednesday";
			break;
		case 4:
			dayOfWeek = "Thursday";
			break;
		case 5:
			dayOfWeek = "Friday";
			break;
		case 6:
			dayOfWeek = "Saturday";
			break;
	}
	return dayOfWeek;
}

