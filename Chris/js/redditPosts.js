var pop;
var pop2;
var pop3;
var pop4;

function restOfScript(){
	
pop=pop.concat(pop2);
pop=pop.concat(pop3);
pop=pop.concat(pop4);





rand=Math.floor(Math.random() * 100);
var LinkNumb=0;
var LinkList=document.getElementsByTagName("a");
var InLoopDone=false;
while(LinkNumb!=LinkList.length){
	
	while(!InLoopDone){
		
		rand=Math.floor(Math.random() * 100);
		if(eval("typeof(num"+rand+")==\"undefined\"")){
			if(LinkList[LinkNumb].id!="no-change"){
				if(pop[rand].data.url[27]!="m"){
					
					if(pop[rand].data.url[26]!="."){
						LinkList[LinkNumb].setAttribute('href', (pop[rand].data.url+".gif"));
					} else {
						LinkList[LinkNumb].setAttribute('href', pop[rand].data.url);
					}
				
				
				} else {
					LinkNumb--;
				}
				eval("num"+rand+"=true;");
			}
			
			InLoopDone=true;
		} else{
			InLoopDone=true;
			LinkNumb--;
		}
	}
	
	InLoopDone=false;
	LinkNumb++;
}

}

$.getJSON("http://www.reddit.com/r/me_irl.json", function(result, status){
	
	if(status=="success"){
	
		$.each(result, function(i, field){
			pop=(field.children)
		});
	}
});
$.getJSON("https://www.reddit.com/r/me_irl.json?count=25", function(result, status){
	
	if(status=="success"){
	
		$.each(result, function(i, field){
			pop2=(field.children)
		});
	}
});
$.getJSON("https://www.reddit.com/r/me_irl.json?count=50", function(result, status){
	
	if(status=="success"){
	
		$.each(result, function(i, field){
			pop3=(field.children)
		});
	}
});

$.getJSON("https://www.reddit.com/r/me_irl.json?count=75", function(result, status){
	
	if(status=="success"){
	
		$.each(result, function(i, field){
			pop4=(field.children)
		});
	}
});
window.setTimeout(restOfScript,1000);

