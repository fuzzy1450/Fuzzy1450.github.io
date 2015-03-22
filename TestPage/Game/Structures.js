//File Containing Structures, looks a lot like Upgrades.js

Structures=[]; //Declaring array

//Structure Objects

Pointer={
	name:"Pointer",
	description:"+1 $/t",
	cost:15,
	onBuy:"Pointer",
	require:0,
	icon:"StrucImgs/Pointer.svg",
	bought:false,
	owned:0
}


//Push Upgrades Into Array
Structures.push(Pointer);


//Added objects to document


function addStructures(){ //needs to be a function so it can be run through multiple times
	i=0;
	while(i!=Structures.length){
		
		if((userVars.maxKaching>=Structures[i].require)&&(Structures[i].shown!=true)){ //if the user has had enough money to display Structure
			var newDiv=document.createElement('div');
			newDiv.className="Structure";
			newDiv.id=Structures[i].onBuy;
			newDiv.title=("Cost: $" + Structures[i].cost);
			document.getElementById('Structures').appendChild(newDiv); //add in Structure div

			newDiv.innerHTML=("<div id='StructureOverlay' onclick=buyStructure('" + Structures[i].onBuy + "');><img src='" + Structures[i].icon + "' id='StructureImg'><p id='StructureTitle'>" + Structures[i].name + "</p><p id='StructureDescription'>" + Structures[i].description + "<br> Owned: " + Pointer.owned + "</p></div>"); //all the magic code. What does any of it mean? I don't know anymore.
			Structures[i].shown=true;
		}
	
		i++; //increment i
	};
};
setInterval(addStructures, refreshRate); //refresh the structures every 2 seconds


function buyStructure(name){ //buy a structure
	switch(name){ //the switch is real. I know there is a better way to do this. There must be.
		case "Pointer":
			if(userVars.Kaching>=Pointer.cost){
				userVars.autoIncrement++;
				userVars.Pointer=true;
				userVars.PointerOwned++;
				Pointer.bought=true;
				Pointer.owned++;
				userVars.Kaching-=Pointer.cost;
				Pointer.cost=Math.round(Pointer.cost * 1.15);
				userVars.PointerCost=Pointer.cost;
				document.getElementById('Pointer').title=("Cost: $" + Pointer.cost);
				document.getElementById("Pointer").childNodes[0].children[2].innerHTML=(Pointer.description + "<br> Owned: " + Pointer.owned);

				
			}
			break;
			
		default:
			break;
	}
}