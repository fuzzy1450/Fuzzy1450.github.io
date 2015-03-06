Days=["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
Months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

d = new Date();
y=d.toString();
x=y.split(" ");
z=0;
a=0;

switch(x[0]) {
	case "Fri":
		z=0;
		break;
		
	case "Sat":
		z=1;
		break;
	
	case "Sun":
		z=2;
		break;
		
	case "Mon":
		z=3;
		break;
		
	case "Tue":
		z=4;
		break;
		
	case "Wed":
		z=5;
		break;
		
	case "Thu":
		z=6;
		break;
}

switch(x[1]) {
	case "Dec":
		a=11;
		break;
		
	case "Jan":
		a=0;
		break;
	
	case "Feb":
		a=1;
		break;
		
	case "Mar":
		a=2;
		break;
		
	case "Apr":
		a=3;
		break;
		
	case "May":
		a=4;
		break;
		
	case "Jun":
		a=5;
		break;
		
	case "Jul":
		a=6;
		break;
		
	case "Aug":
		a=7;
		break;
		
	case "Sep":
		a=8;
		break;
		
	case "Oct":
		a=9;
		break;
		
	case "Nov":
		a=10;
		break;
}

b=parseInt(x[2])+1;
d=(x[2]).toString();
c=d.split("")
if(b.toString().length!=1){
	if(c[1]===1){
		ending="st";
	} else if(c[1]===2){
		ending="nd";
	} else if(c[1]===3) {
		ending="rd";
	} else{
		ending="th";
	}
} else{
	if(b===1){
		ending="st";
	} else if(b===2){
		ending="nd";
	} else if(b===3){
		ending="rd";
	} else{
		ending="th";
	}
}

tomorrow= Days[z] + ", " + Months[a] + " " + b + ending;
bigTomorrow= Days[z] + " " + Months[a] + " " + b + ending;

document.getElementById("bigDate").innerHTML = "NO CLASSES ON " + bigTomorrow.toUpperCase();
document.getElementById("dateHere").innerHTML = "Due to the pure speculation of snow, ice, fog, rain, leafs, and other hazardous obstacles, SJHS will not have classes on " + tomorrow;