var timesPressed = 0;
var text = "You've pressed this button " + timesPressed + " times.";
var clickLevel = 1;		
var much = "Upgrade clicker for " + cost + "?";
var cost = clickLevel * clickLevel;
var cost2 = autoclickers * 50 + 500;
var cost3 = (ultraclickers * 100000000) + 1000000;
var autoclickers = 0;
var ultraclickers = 0;
var pressSequence = 0;

document.getElementById("current").innerHTML = "your current click level is " + clickLevel;
document.getElementById("autos").innerHTML = "your currently have " + autoclickers + " superclickers, and will get " + 5000 * autoclickers + " clicks every 10 manual clicks.";
document.getElementById("stuff").innerHTML = text;
	document.getElementById("costs").innerHTML = cost + " clicks?";
	document.getElementById("cost2").innerHTML = cost2 + " clicks?";
	document.getElementById("cost3").innerHTML = cost3 + " clicks?";
	document.getElementById("ultras").innerHTML = "your currently have " + ultraclickers + " ultraclickers and will get " + ultraclickers * (autoclickers * 100000) + " clicks every 10 manual clicks.";
function pressed(){
	timesPressed = timesPressed + clickLevel;
	pressSequence = pressSequence + 1;
	if(pressSequence > 10){
		pressSequence = 1;
	}

	if(timesPressed < 20){
		text = "You've pressed this button "+ timesPressed + " times.";
	} else if(timesPressed >= 20 && timesPressed < 40){
		text = "Ahh, doing good. " + timesPressed + " times already.";
	} else if(timesPressed >=40 && timesPressed < 300){
		text = "Wow. " + timesPressed + " clicks already?";
	
	} else if(timesPressed >=300 && timesPressed < 1000){
		text = "LOL. " + timesPressed + " clicks. TOO MANY.";
	
	} else if(timesPressed >=1000 && timesPressed <= 9000){
		text = "Hah, " + timesPressed + " clicks. Still under 9000.";
	
	}else if(timesPressed > 9000 && timesPressed < 50000){
		text = "What's your click count? " + timesPressed + "? IT'S OVER 9000! That's impossible!";
	
	}else if(timesPressed >= 50000 && timesPressed < 1000000){
	text = "I'm glad you made it all the way. " + timesPressed + " clicks.";
	}else if(timesPressed >= 100000 && timesPressed < 299792458){ 
		text = "You're at " + timesPressed + " how high can you go?";
	}else if(timesPressed >= 299792458 && timesPressed < 31415926535){
		text = timesPressed + "! You're FTL!"
	}else if(timesPressed >= 31415926535){
		text = "Hey, " + timesPressed + "? that's past 11 digits of pi!";
	}
	if(autoclickers > 0 && pressSequence == 5){
		timesPressed = timesPressed + (autoclickers * 5000)
		
	}
	if(ultraclickers > 0 && pressSequence == 10){
		timesPressed = timesPressed + (autoclickers * 100000)
		
	}


	document.getElementById("current").innerHTML = "your current click level is " + clickLevel;
	document.getElementById("autos").innerHTML = "your currently have " + autoclickers + " superclickers, and will get " + 5000 * autoclickers + " clicks every 10 manual clicks.";
	document.getElementById("stuff").innerHTML = text;
	document.getElementById("costs").innerHTML = cost + " clicks?";
	document.getElementById("cost2").innerHTML = cost2 + " clicks?";
	document.getElementById("cost3").innerHTML = cost3 + " clicks?";
	document.getElementById("ultras").innerHTML = "your currently have " + ultraclickers + " ultraclickers and will get " + ultraclickers * (autoclickers * 100000) + " clicks every 10 manual clicks.";
	cost = clickLevel * clickLevel;
	cost2 = autoclickers * 10000 + 50000;
	cost3 = (ultraclickers * 100000000) + 1000000;
}
function upgrade(){
	document.getElementById("stuff").innerHTML = text;
	if(timesPressed - cost >= 0){
	clickLevel = clickLevel * 2;
	timesPressed = timesPressed - cost;
	cost = clickLevel * clickLevel;
	text = "Bought upgrade!"
	document.getElementById("costs").innerHTML = cost + " clicks?";
	document.getElementById("stuff").innerHTML = text;
	document.getElementById("current").innerHTML = "your current click level is " + clickLevel;
}else{
	document.getElementById("costs").innerHTML = "You cannot afford this.";
}

}

function buyAuto(){
	document.getElementById("stuff").innerHTML = text;
	if(timesPressed - cost2 >= 0){
		timesPressed = timesPressed - cost2;
		autoclickers++
		text = "Bought superclicker"
		document.getElementById("costs").innerHTML = cost + " clicks?";
		document.getElementById("stuff").innerHTML = text;
		document.getElementById("current").innerHTML = "your current click level is " + clickLevel;
		
	}else{
		document.getElementById("cost2").innerHTML = "You cannot afford this.";
	}
	
}
	
function buyUltra(){
	document.getElementById("stuff").innerHTML = text;
	if(timesPressed - cost3 >= 0){
		timesPressed = timesPressed - cost3;
		autoclickers++
		text = "Bought superclicker"
		document.getElementById("cost3").innerHTML = cost + " clicks?";
		document.getElementById("stuff").innerHTML = text;
		document.getElementById("ultras").innerHTML = "your currently have " + ultraclickers + " ultraclickers and will get " + ultraclickers * (autoclickers * 100000);
		
	}else{
		document.getElementById("cost3").innerHTML = "You cannot afford this.";
	}
}
var changes = "	1.4.9: added the ability to buy levels and superclickers. BUGS: click level and autoclickers do not update until the turn after you buy them.";
var changelogToggled = false
function changelog(){
	if(changelogToggled == false){
		document.getElementById("log").innerHTML = changes;
		changelogToggled = true;
	}else{
		changelogToggled = false;
		document.getElementById("log").innerHTML = "";
		
	}	
}

var help = 'click the "pressy pressy!" button to get a click. Your click level is how many clicks you get per press. Superclickers give you 5000 clicks every 10 manual clicks. Each ultraclicker gives you 100000 times the number of how many superclickers you have.  Coockie clicker. Nuff said.';
var helpToggled = false;

function toggleHelp(){
	if(helpToggled == false){
		document.getElementById("help1").innerHTML = help;
		helpToggled = true;
	}else{
		helpToggled = false;
		document.getElementById("help1").innerHTML = "";
	}
	
}
