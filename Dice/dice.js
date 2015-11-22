var weight = 2;
var sides = 6;
var rollStats = [];
var totsRolls=0;
var rollStatsInit = 0;
while (rollStatsInit!=sides){
	rollStats[rollStatsInit]=0;
	rollStatsInit++;
}

function weightedRandom(){
	var average = 0;
	var totalRolls = [];
	var currentRoll=0;
	var toReturn=0;
	var Rolls=0;
	var toAverage = 0;
	var x=0;
	var y=0;
	var z=0;
	while(x!=sides){
		totalRolls[x]=0;
		x++;
	}
	x=0;
	var keepSampling=true;
	
	while(keepSampling)
	{
		currentRoll=((Math.floor(Math.random() * 10000) + 1)%sides); 
		Rolls++;
		
		toAverage+=currentRoll;
		
		average = (toAverage/Rolls);
		
		totalRolls[currentRoll]++;
		
		
		
		if (y>10|| ( average<(weight+(0.1*(sides-weight))) && average>(weight-(0.1*(sides-weight))) )  ){
			keepSampling=false;
			toReturn=totalRolls[0];
			while (z!=totalRolls.length){
				if(totalRolls[z]>totalRolls[toReturn]){
					
					toReturn=z;
					
					if (toReturn<(weight*.5)&&((Math.floor(Math.random() * 1000) + 1)<900)){
						toReturn=weight-(toReturn*((Math.floor(Math.random() * 35) + 1)/10))
					}
					if (toReturn>(weight*1.75)&&((Math.floor(Math.random() * 1000) + 1)<900)){
						toReturn=(weight+(toReturn*((Math.floor(Math.random() * 35) + 1)/10)))
					}
					if(toReturn < 1){
						toReturn = (weight+(toReturn*0.1));
					}
					if(toReturn < 1){
						toReturn = weight+(Math.floor(Math.random() * (weight*1.1)) - weight*1.1);
					}
					
					if(toReturn<weight && toReturn>weight*.9 && (Math.floor(Math.random() * 10) +1)<7){
						toReturn=toReturn+((weight*.9)/toReturn);
					}
					if(toReturn==sides && (Math.floor(Math.random() * 10) +1)<2  && toReturn!=weight){
						toReturn=weight;
					}
					if(toReturn>sides || toReturn<0){
						toReturn=weight;
					}
					if(toReturn==0){
						toReturn=Math.floor(Math.random() * sides) +1
					}
					
				}
				z++;
			}
			
			totsRolls++;
			return Math.round(toReturn);
		}
		
		if(y > 100000){
			toReturn=totalRolls[0];
			while (z!=totalRolls.length){
				if(totalRolls[z]>totalRolls[toReturn]){
					toReturn=z;
				}
				z++;
			}
			
			totsRolls++;
			return Math.round(toReturn);
		}
		
		y++;
		
	}
	y=0;
	
}
var resultant=0;

function diceRoll(){
	resultant=weightedRandom();
	if (resultant<7){
		document.getElementById("DiceImage").setAttribute("src", ("img/"+resultant+".jpg"));
		document.getElementById("DiceImage").style.display="block";
	} 
	if (resultant>6){
		document.getElementById("diceImageDiv").innerHTML = ("<img src='' id='DiceImage'><p id='DiceText'>"+resultant+"</p>");
		document.getElementById("DiceImage").style.display="none"
	}
	switch (resultant.toString().length){
			case 1:
				document.getElementById("DiceText").style.fontSize="350px";
				break;
			case 2:
				document.getElementById("DiceText").style.fontSize="350px";
				break;
			case 3:
				document.getElementById("DiceText").style.fontSize="225px";
				break;
			case 4:
				document.getElementById("DiceText").style.fontSize="150px";
				break;
			case 5:
				document.getElementById("DiceText").style.fontSize="125px";
				break;
			default:
				document.getElementById("DiceText").style.fontSize="60px";
				break;
		}
	rollStats[resultant-1]++;
	logRoll(resultant);
	
	
}

function logRoll(toLog){
	var textLog = document.getElementById("lastRolls");
	var statLog = document.getElementById("totalStats");
	var averageDiv = document.getElementById("totalAverage");
	var o = 0;
	var preAverage = 0;
	var Average=0;
	var statText="";
	
	if(textLog.childNodes.length==50){
		textLog.removeChild(textLog.childNodes[49]);
	}
	textLog.innerHTML="<p id='logText'>"+totsRolls+":"+'\t'+" You rolled a " + toLog+"</p>" + textLog.innerHTML;
	
	while(o!=sides){
		statText+="<p id=Stat>#"+(o+1)+":"+'\t' + (rollStats[o])+" times</p>";
		preAverage+=o*rollStats[o];
		o++;	
	}
	statLog.innerHTML=statText;
	statText="";
	o=0;
	Average=(preAverage/totsRolls)+1;
	
	averageDiv.innerHTML="<p>Average: "+Average+"</p>";
	
}

function showSettings(){
	document.getElementById("settingsContainer").style.display="block";
}

function changeSettings(){
	var newWeight=document.getElementById("weightText").value
	var newSides=document.getElementById("sideText").value
	var Error = document.getElementById("errorText");
	if(isNaN(newSides)){
		Error.innerHTML="Error: "+newSides+" is not a valid number.";
	} else if(isNaN(newWeight)){
		Error.innerHTML="Error: "+newWeight+" is not a valid number.";
	} else{
		Error.innerHTML="";
		if(newWeight>10000||newSides>10000)
		{
			Error.innerHTML="Error: One of the numbers you have entered is very large. <br> This will cause rolling the dice to be very slow.<br>The browser may crash.<br>Continue?"
			requestOverride();
		} else if (newWeight==0||newSides==0){
			Error.innerHTML="Error: One of the numbers you entered is 0.<br>This is an invalid entry.";
		} else if(newWeight<0||newSides<0){
			Error.innerHTML = "Error: You cannot enter negative numbers.";
		}else if(parseInt(newWeight)>parseInt(newSides)) {
			Error.innerHTML = "Error: The side you want to weight does not exist.";
		} else {
			sides = newSides;
			weight=newWeight;
			Error.innerHTML="";
			document.getElementById("settingsContainer").style.display="none";
			document.getElementById("sideText").value="0";
			document.getElementById("weightText").value="0"
			document.getElementById("lastRolls").innerHTML="";
			document.getElementById("totalStats").innerHTML="";
		}
	}
}

function requestOverride(){
	document.getElementById("overrideButton").style.display="block";
}

function Override(){
	var newWeight=document.getElementById("weightText").value
	var newSides=document.getElementById("sideText").value
	var Error = document.getElementById("errorText");;
	if(isNaN(newSides)){
		Error.innerHTML="Failed to Override: "+newSides+" is not a valid number.";
	} else if(isNaN(newWeight)){
		Error.innerHTML="Failed to Override: "+newWeight+" is not a valid number.";
	} else if (newWeight==0||newSides==0){
			Error.innerHTML="Error: One of the numbers you entered is 0.<br>This is an invalid entry.";
	} else if(newWeight<0||newSides<0){
			Error.innerHTML = "Error: You cannot enter negative numbers.";
	} else if(newWeight>newSides) {
		Error.innerHTML = "Error: The side you want to weight does not exist.";
	} else {
			sides = newSides;
			weight=newWeight;
			Error.innerHTML="";
			document.getElementById("settingsContainer").style.display="none";
			document.getElementById("sideText").value="0";
			document.getElementById("weightText").value="0"
			textLog.innerHTML="";
			statLog.innerHTML="";
	}
	document.getElementById("overrideButton").style.display="none";
}

function closeSettings(){
	document.getElementById("settingsContainer").style.display="none";
}