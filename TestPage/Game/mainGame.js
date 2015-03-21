//User variables
userVars ={
	clickIncrement:1, // Currency gained on click
	autoIncrement:0, // Currency gained per tick
	tickTime:2000, // Milliseconds it takes to add AutoIncrement
	Kaching:0 // Currency
}

//Permanent Variables
refreshRate=1000; // milliseconds for html to increment. Set to 1 seconds. Change this if you are daring



function bigButton(){ //The Big Button that is clicked
	userVars.Kaching=userVars.Kaching+userVars.clickIncrement;
}

function refreshScreen(){ //function containing all bits that become replaced
	document.getElementById("monCount").innerHTML = "Money = " + userVars.Kaching;
}
setInterval(refreshScreen, refreshRate); //Interval to refresh screen elements

function saveGame(){ //save all stats as cookies
	document.cookie=("Kaching=" + userVars.Kaching + ";");
	document.cookie=("tickTime=" + userVars.tickTime + ";");
	document.cookie=("autoIncrement=" + userVars.autoIncrement + ";");
	document.cookie=("clickIncrement=" + userVars.clickIncrement + ";");
	document.cookie=("Played=true;"); //User has been on before
}
setInterval(saveGame, 30000); //Interval to save game to cookies, every 30 seconds