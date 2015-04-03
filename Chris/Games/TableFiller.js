function GetColor(){ //Get a random color function
	y=Math.floor((Math.random() * 10) + 1);
	
	if(y<4){
		return "yellow";
	} else if(y>3 && y<7){
		return "red";
	} else if(y>6 && y<10){
		return "white";
	} else {
		return "greyish";
	}
	
	
}


Games=[] //Table Declare

WizardGaem={
	name:"Wizard Game",
	description:"Move a wizard around a tiny black window. This is an industry changer.",
	img:"WizardGame.png",
	game:"WizardGame/WasirdGaem.zip",
	source:"WizardGame/WasirdSource.zip"
}


Games.push(WizardGaem);


var theTable = document.getElementById("gameList");

i=Games.length;
a=0;

while(a!=i){

	aRow=theTable.insertRow(a);
	aRow.className=("Row" + a);
	aRow.id="GenericRow";
	aCollum=aRow.insertCell(a);
	aCollum.className=("Cell" + a);
	aCollum.id=("GenericCell");
	aCollum.className=(GetColor() +"Cell");
	
	aCollum.innerHTML=("<h2 id='gameTitle'>" + Games[a].name + "<br></h2> <p id='gameDesc'>" + Games[a].description + "</p><div id='downloads'><a href='games/" + Games[a].game + "'>Download</a><p>\<\></p><a href='games/" + Games[a].source + "'>Source</a></div><img src='images/" + Games[a].img + "' id='img'> ")
	

	a++;
}
