function getInput() {

    var InputNum = document.getElementById("inputBox").value;
	var Range = document.getElementById("rangeInput").value;

	var i=0; //create loop number
	var k=1; //second loop number
	
	var x = parseFloat(InputNum); //turn x into a float
	var y = parseFloat(Range); //turn y into a float
	
	var num = "0";
	var test;
	
	
	if (y==undefined) { //if the range is undefined
		while(i!=101) { //do this 100 times, default number
		
			while(k!=11) {
			
				test = num + k.toString(); //make a new number
				
				if ((x-(parseFloat(test)*parseFloat(test)))<(x-(parseFloat(num)*parseFloat(num)))) { //is the new number closer?
					
					num = test;
					
				} else if ((k===10)&&((x-(parseFloat(num+".1")*parseFloat(num+".1")))>(x-(parseFloat(num)*parseFloat(num))))) { 
					num = num + "0";		//if all are bad, add a zero
				} else {
					num = num + ".";
				}
				
				k++;
				console.log(num);
			}
			
			
			i++; //increment 1st loop number
		}
	} else {
		while(i<y) { //do this y times
			
			while(k!=11) {

				test = num + k.toString(); //make a new number
				console.log(k.toString());
				if ((x-(parseFloat(test)*parseFloat(test)))<(x-(parseFloat(num)*parseFloat(num)))) { //is the new number closer?
					
					num = test;
					
				} else if ((k===10)&&((x-(parseFloat(num+".1")*parseFloat(num+".1")))>(x-(parseFloat(num)*parseFloat(num))))) { 
					num = num + "0";		//if all are bad, add a zero
				} else {
					num = num + ".";
				}
				
				k++;
				console.log(num);
			}
			
			
			i++; //increment 1st loop number
		}
	}
	var Output = parseFloat(num);
	document.getElementById("Output").innerHTML = Output;
}