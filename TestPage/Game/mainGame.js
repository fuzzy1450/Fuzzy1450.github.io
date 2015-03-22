//User variables
userVars ={
	clickIncrement:1, // Currency gained on click
	autoIncrement:0, // Currency gained per tick
	tickTime:2000, // Milliseconds it takes to add AutoIncrement
	Kaching:0, // Currency
	maxKaching:0, // The highest amount of money held by the player at once
	
	
	//Holy Bought Upgrades, Batman!
	ClickUp1: false,
	TicTime1: false
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
	document.cookie=("maxKaching=" + userVars.maxKaching + ";");
	document.cookie=("ClickUp1=" + userVars.ClickUp1 + ";");
	document.cookie=("TicTime1=" + userVars.TicTime1 + ";");
	document.cookie=("DoNotChange=true;"); //User has been on before
	
}
setInterval(saveGame, 30000); //Interval to save game to cookies, every 30 seconds
saveGame(); //save game on page load

function checkCookies(){ //check if cookies exist
	if(getCookie("DoNotChange")==="true"){
		loadGame();
	}
}

function getCookie(cname) { //look for Cookie with given name
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return false;
}

function loadGame(){
	userVars.Kaching = parseInt(getCookie("Kaching"));
	userVars.tickTime = parseInt(getCookie("tickTime"));
	userVars.autoIncrement = parseInt(getCookie("autoIncrement"));
	userVars.clickIncrement = parseInt(getCookie("clickIncrement"));
	userVars.maxKaching = parseInt(getCookie("maxKaching"));
	userVars.ClickUp1 = getCookie("ClickUp1");
	userVars.TicTime1 = getCookie("TicTime1");
}
window.onload = checkCookies;

function checkForMax(){ // Check if you should increase the MaxKaching 
	if(userVars.Kaching>userVars.maxKaching){
		userVars.maxKaching=userVars.Kaching;
	}
}
setInterval(checkForMax, 750); // Run checkForMax every 0.75 seconds(too quick?)