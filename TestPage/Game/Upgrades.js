//File Containing Upgrades

Upgrades=[]; //Declaring array

//Upgrade Objects
ClickUp1={
	name:"Clicker Upgrade",
	description:"Upgrades the money gained per click by 1",
	cost:50,
	onBuy:"ClickUp1",
	require:false,
	icon:"UpgImgs/ClickUp1.svg"
}

TicTime1={
	name:"Lower Tick Time",
	description:"Reduces the time it takes to receive money from structures",
	cost:100,
	onBuy:"TicTime1",
	require:50,
	icon:"UpgImgs/TicTime1.svg"
}



//Push Upgrades Into Array
Upgrades.push(ClickUp1);
Upgrades.push(TicTime1);

//Added objects to document
i=0;

while(i!=Upgrades.length){
	
	var newDiv=document.createElement('div');
	newDiv.id="Upgrade";
	newDiv.title=("Cost: $" + Upgrades[i].cost);
	document.getElementById('Upgrades').appendChild(newDiv); //add in Upgrade div

	newDiv.innerHTML="<div id='UpgradeOverlay'><img src='" + Upgrades[i].icon + "' id='UpgradeImg'><p id='UpgradeTitle'>" + Upgrades[i].name + "</p><p id='UpgradeDescription'>" + Upgrades[i].description + "</p></div>" //all the magic code. What does any of it mean? I don't know anymore.
	//TODO add in buy function
	
	i++; //increment i
}