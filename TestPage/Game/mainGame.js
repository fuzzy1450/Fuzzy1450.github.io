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
	document.cookie=("DoNotChange=true;"); //User has been on before
}
setInterval(saveGame, 30000); //Interval to save game to cookies, every 30 seconds

function checkCookies(){ //check if cookies exist
	if(getCookie("DoNotChange")===true){
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
    return "";
}

function loadGame(){
	userVars.Kaching = getCookie("Kaching");
	userVars.tickTime = getCookie("tickTime");
	userVars.autoIncrement = getCookie("autoIncrement");
	userVars.clickIncrement = getCookie("clickIncrement");
}
window.onload = checkCookies;