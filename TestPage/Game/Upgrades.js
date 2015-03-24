//File Containing Upgrades, looks a lot like Structures.js

Upgrades=[]; //Declaring array

//Upgrade Objects

ClickUp1={
	name:"Clicker Upgrade",
	description:"Upgrades the Nans gained per click by 1",
	cost:50,
	onBuy:"ClickUp1",
	require:10,
	icon:"UpgImgs/ClickUp1.svg",
	bought:getCookie("ClickUp1")	
}

TicTime1={
	name:"Lower Tick Time",
	description:"Reduces the time it takes to receive Nans from structures",
	cost:100,
	onBuy:"TicTime1",
	require:50,
	icon:"UpgImgs/TicTime1.svg",
	bought:getCookie("TicTime1")
	
}

PointerUp1={
	name:"Double Pointer Power",
	description:"Doubles the Nans per tick of Pointers",
	cost:100,
	onBuy:"PointerUp1",
	require:50,
	icon:"UpgImgs/PointerUp1.svg",
	bought:getCookie("PointerUp1")
	
}



//Push Upgrades Into Array
Upgrades.push(ClickUp1);
Upgrades.push(TicTime1);
Upgrades.push(PointerUp1);

//Added objects to document


function addUpgrades(){ //needs to be a function so it can be run through multiple times
	i=0;
	while(i!=Upgrades.length){
		
		if((userVars.maxKaching>=Upgrades[i].require)&&(Upgrades[i].shown!=true)&&(Upgrades[i].bought!="true")){ //if the user has had enough money to display upgrade
			var newDiv=document.createElement('div');
			newDiv.className="Upgrade";
			newDiv.id=Upgrades[i].onBuy;
			newDiv.title=("Cost: $" + Upgrades[i].cost + " Nans");
			document.getElementById('Upgrades').appendChild(newDiv); //add in Upgrade div

			newDiv.innerHTML=("<div id='UpgradeOverlay' onclick=buyUpgrade('" + Upgrades[i].onBuy + "');><img src='" + Upgrades[i].icon + "' id='UpgradeImg'><p id='UpgradeTitle'>" + Upgrades[i].name + "</p><p id='UpgradeDescription'>" + Upgrades[i].description + "</p></div>"); //all the magic code. What does any of it mean? I don't know anymore.
			Upgrades[i].shown=true;
		}
	
		i++; //increment i
	};
};
setInterval(addUpgrades, refreshRate); //refresh the upgrades every 2 seconds

function buyUpgrade(name){ //buy an upgrade
	switch(name){ //the switch is real. I know there is a better way to do this.
		case "ClickUp1":
			if(userVars.Kaching>=ClickUp1.cost){
				userVars.clickIncrement++;
				userVars.ClickUp1=true;
				ClickUp1.bought=true;
				userVars.Kaching-=ClickUp1.cost;
				var killDiv = document.getElementById("ClickUp1");
				killDiv.parentNode.removeChild(killDiv); //Div is kill
			}
			break;
			
		case "TicTime1":
			if(userVars.Kaching>=TicTime1.cost){
				userVars.tickTime-=100;
				userVars.TicTime1=true;
				TicTime1.bought=true;
				userVars.Kaching-=TicTime1.cost;
				var killDiv = document.getElementById("TicTime1");
				killDiv.parentNode.removeChild(killDiv); //Div is kill
			}
			break;
			
		case "PointerUp1":
			if(userVars.Kaching>=PointerUp1.cost){
				userVars.autoIncrement=userVars.autoIncrement+(Pointer.power*Pointer.owned);
				Pointer.power=Pointer.power*2;
				userVars.PointerPower=Pointer.power;
				userVars.PointerUp1=true;
				PointerUp1.bought=true;
				userVars.Kaching-=PointerUp1.cost;
				var killDiv = document.getElementById("PointerUp1");
				killDiv.parentNode.removeChild(killDiv); //Div is kill
			}
			break;
		
		default:
			console.log("Upgrade Unknown");
			break;
	}
}

