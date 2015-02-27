text = ["Never trust anyone","Always be prepared","Always have a backup plan","A single backup plan will never do, always have a backup backup plan","Always have the bleach ready, as you never know when you will need it","Everyone is guilty until proven innocent","Never let your guard down as everyone is a spy","There is no such thing as safe, only safer","Timing is everything","You never fail, you only learn"];
images = ["one.png","two.png","three.png","four.png","five.png","six.png","seven.png","ate.png","nine.png","ten.png"];

function addRules(){
	i=0;
	size=175;
	div = document.getElementById('content');
	while(i!=text.length){
		div.innerHTML =div.innerHTML + ("<div class='rule'><img src='images/" + images[i] + "' id='num'><p id='RuleText' style='top:" + size + "px'>" + text[i] + "</p></div>");
		i++;
		size=size+250;
		console.log("ruleAdded");
	}
}

addRules();