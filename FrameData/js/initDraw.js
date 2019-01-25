boxType = "hitbox"
clickType = "makeBox"
currentFrameNumber = 1
TotalFrames = 1

function newFrame(){
	if(currentFrameNumber == TotalFrames){
		newCanvas = document.createElement("div");
		newCanvas.id="canvas"+(TotalFrames+1);
		newCanvas.className="canvas";
		newCanvas.style.display = "none";
		newCanvas.innerHTML = "<input id ='activeFrames' type='text' stype='left:0px;' placeholder='active frames'><div class='character' style='left: 300px; top: 70px; width: 250px; height: 400px;'><p class='damageValue'>character model</p></div>"
		document.getElementById("canvasCollection").appendChild(newCanvas)
		
		TotalFrames++;
		document.getElementById("nextFrame").disabled=false;
		initDraw(newCanvas);
		
		setInputFilter(document.getElementById("canvas"+(TotalFrames)).childNodes[0], function(value) {
						return /^\d*$/.test(value);
					});
	} else {
		
		newCanvas = document.createElement("div");
		for(i = TotalFrames; i>currentFrameNumber; i--){
			document.getElementById("canvas"+i).id="canvas"+(i+1)
		}
		
		newCanvas.id="canvas"+(currentFrameNumber+1);
		newCanvas.className="canvas";
		newCanvas.style.display = "none";
		newCanvas.innerHTML = "<input id ='activeFrames' type='text' stype='left:0px;' placeholder='active frames'><div class='character' style='left: 300px; top: 70px; width: 250px; height: 400px;'><p class='damageValue'>character model</p></div>"
		document.getElementById("canvasCollection").appendChild(newCanvas)
		
		TotalFrames++;
		document.getElementById("nextFrame").disabled=false;
		initDraw(newCanvas);
		
		setInputFilter(document.getElementById("canvas"+(currentFrameNumber+1)).childNodes[0], function(value) {
						return /^\d*$/.test(value);
					});
	}
}
function nextFrame(){
	document.getElementById("canvas" + currentFrameNumber).style.display = "none"
	currentFrameNumber++;
	document.getElementById("canvas" + currentFrameNumber).style.display = "block"
	
	document.getElementById("lastFrame").disabled=false;
	if(currentFrameNumber==TotalFrames){
		document.getElementById("nextFrame").disabled=true;
	}
	
	document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
}
function lastFrame(){
	document.getElementById("canvas" + currentFrameNumber).style.display = "none"
	currentFrameNumber--;
	document.getElementById("canvas" + currentFrameNumber).style.display = "block"
	
	document.getElementById("nextFrame").disabled=false;
	if(currentFrameNumber==1){
		document.getElementById("lastFrame").disabled=true;
	}
	
	document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
}

function exportMove(){
	characterCoords = [parseInt(document.getElementsByClassName("character")[0].style.left), parseInt(document.getElementsByClassName("character")[0].style.top)]
	
	
	buildString="m:"
	canvasArray=document.getElementsByClassName("canvas")
	for(i=0; i<canvasArray.length; i++){
		buildString+="f:"
		
		hitboxArray=canvasArray[i].getElementsByClassName("hitbox");
		for(j=0; j<hitboxArray.length; j++){
			buildString+="b:"
			
			buildString+=parseInt(hitboxArray[j].style.width)+","
			buildString+=parseInt(hitboxArray[j].style.height)+","
			buildString+=(parseInt(hitboxArray[j].style.left) - characterCoords[0] )+","
			buildString+=(parseInt(hitboxArray[j].style.top) - characterCoords[1] )+","
			
			buildString+="1," //type should go here
			
			buildString+="1" //hitboxes have no damage value
			
			buildString+="+1" //hitbox gets is marked by +1
		}
		
		
		hurtboxArray=canvasArray[i].getElementsByClassName("hurtbox");
		for(j=0; j<hurtboxArray.length; j++){
			buildString+="b:"
			
			buildString+=parseInt(hurtboxArray[j].style.width)+","
			buildString+=parseInt(hurtboxArray[j].style.height)+","
			buildString+=(parseInt(hurtboxArray[j].style.left) - characterCoords[0] )+","
			buildString+=(parseInt(hurtboxArray[j].style.top) - characterCoords[1] )+","
			
			buildString+="1," //type should go here
			
			buildString+=parseInt(hurtboxArray[j].getElementsByTagName("input")[0].value)
			
			buildString+="+2" //hurtbox is marked by +2
		}
		
		buildString+=";"+document.getElementsByClassName("canvas")[0].getElementsByTagName("input")[0].value
	}
	downloadString(buildString, "text", "move.txt");
	
}

function importMove(){
	
}


function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

function switchBoxType(){
	if(boxType == "hitbox"){
		boxType = "hurtbox"
		document.getElementById("BoxSwitchButton").innerHTML="switch to hitbox"
	} else {
		boxType = "hitbox"
		document.getElementById("BoxSwitchButton").innerHTML="switch to hurtbox"
	}
}

function switchClickType(x){
	if(x == "makeBox"){
		document.getElementById("BoxSwitchButton").disabled=false;
	} else {
		document.getElementById("BoxSwitchButton").disabled=true;
	}
	document.getElementById(clickType).disabled=false;
	clickType = x
	document.getElementById(clickType).disabled=true;
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

function initDraw(canvas) {
    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
	
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    };
	

    var element = null;    
    canvas.onmousemove = function (e) {
		if(clickType == "makeBox"){
			setMousePosition(e);
			if (element !== null) {
				element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
				element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
				element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
				element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
			}
		}
    }
	

    canvas.onclick = function (e) {
		if(clickType == "makeBox"){
			if (element !== null) {
				element = null;
				canvas.style.cursor = "default";
				console.log("finsihed.");
			} else {
				console.log("begun.");
				mouse.startX = mouse.x;
				mouse.startY = mouse.y;
				element = document.createElement('div');
				element.className = boxType
				element.style.left = mouse.x + 'px';
				element.style.top = mouse.y + 'px';
				
				element.onclick = function(e){
					if(clickType == "removeBox"){
						this.parentNode.removeChild(this);
					}
				}
				
				
				canvas.appendChild(element)
				canvas.style.cursor = "crosshair";
				if(boxType == "hurtbox"){
					DamageBox = document.createElement("input");
					DamageBox.type="text";
					DamageBox.name="Damage";
					DamageBox.placeholder="Damage";
					setInputFilter(DamageBox, function(value) {
						return /^\d*$/.test(value);
					});
					element.appendChild(DamageBox);
					
				}
			}
		}
    }
	
}