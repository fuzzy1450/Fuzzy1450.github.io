boxType = "hitbox"
clickType = "makeBox"
coppiedData = ""
lightbox=false;
currentFrameNumber = 1
TotalFrames = 1

function newFrame(){
	if(currentFrameNumber == TotalFrames){
		newCanvas = document.createElement("div");
		newCanvas.id="canvas"+(TotalFrames+1);
		newCanvas.className="canvas";
		newCanvas.style.display = "none";
		newCanvas.style.zIndex = (TotalFrames+1)
		newCanvas.innerHTML = "<input id ='activeFrames' type='text' style='left:10px; top:100px; position:absolute;' placeholder='repeated frames'><div class='character'><p class='damageValue'>character model</p></div>"
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
			document.getElementById("canvas"+i).style.zIndex=(i+1)
			document.getElementById("canvas"+i).id="canvas"+(i+1)
		}
		
		newCanvas.id="canvas"+(currentFrameNumber+1);
		newCanvas.style.zIndex=(currentFrameNumber+1)
		newCanvas.className="canvas";
		newCanvas.style.display = "none";
		newCanvas.innerHTML = "<input id ='activeFrames' type='text' style='left:10px; top:100px; position:absolute;' placeholder='repeated frames'><div class='character'><p class='damageValue'>character model</p></div>"
		document.getElementById("canvasCollection").appendChild(newCanvas)
		
		TotalFrames++;
		document.getElementById("nextFrame").disabled=false;
		initDraw(newCanvas);
		
		setInputFilter(document.getElementById("canvas"+(currentFrameNumber+1)).childNodes[0], function(value) {
						return /^\d*$/.test(value);
					});
	}
	
	if(lightbox){
		newCanvas.style.opacity = ".5"
	}
}
function nextFrame(){
	if(!lightbox){
		try{
			document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "none"
			document.getElementById("canvas" + currentFrameNumber).style.display = "none"
		} catch {}
		currentFrameNumber++;
		document.getElementById("canvas" + currentFrameNumber).style.display = "block"
		document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "inline-block"
		
		document.getElementById("lastFrame").disabled=false;
		if(currentFrameNumber==TotalFrames){
			document.getElementById("nextFrame").disabled=true;
		}
		
		document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
	} else{
		try{
			document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "none"
			if(currentFrameNumber!= 1){
				document.getElementById("canvas" + (currentFrameNumber-1)).style.display = "none"
			}
		} catch {}
		currentFrameNumber++;
		document.getElementById("canvas" + currentFrameNumber).style.display = "block"
		document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "inline-block"
		
		document.getElementById("lastFrame").disabled=false;
		if(currentFrameNumber==TotalFrames){
			document.getElementById("nextFrame").disabled=true;
		}
		
		document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
	}
}
function lastFrame(){
	if(!lightbox){
		document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "none"
		document.getElementById("canvas" + currentFrameNumber).style.display = "none";
		currentFrameNumber--;
		try{
			document.getElementById("canvas" + currentFrameNumber).style.display = "block";
			document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "inline-block"
		} catch {}
		if(currentFrameNumber == TotalFrames){
			document.getElementById("nextFrame").disabled=true;
		} else{
			document.getElementById("nextFrame").disabled=false;
		}
		
		if(currentFrameNumber==1){
			document.getElementById("lastFrame").disabled=true;
		}
		
		document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
	} else {
		document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "none"
		document.getElementById("canvas" + currentFrameNumber).style.display = "none"
		currentFrameNumber--;
		try{
			document.getElementById("canvas" + currentFrameNumber).getElementsByTagName("input")[0].style.display = "inline-block"
		} catch{}
		if(currentFrameNumber!=1){
			document.getElementById("canvas" + (currentFrameNumber-1)).style.display = "block"
		}
		
		if(currentFrameNumber == TotalFrames){
			document.getElementById("nextFrame").disabled=true;
		} else{
			document.getElementById("nextFrame").disabled=false;
		}
		if(currentFrameNumber==1){
			document.getElementById("lastFrame").disabled=true;
		}
		
		document.getElementById("currentFrameNumber").innerHTML = "Frame " +currentFrameNumber;	
	}
	
}
function deleteCurrentFrame(){
	if(TotalFrames == 1){
		return false;
	}
	if(currentFrameNumber == TotalFrames){
		TotalFrames--;
		lastFrame();
		$("#canvas"+(TotalFrames+1)).remove();
	} else{
		
		$("#canvas"+currentFrameNumber).remove();
		if(currentFrameNumber==1){
			nextFrame();
			currentFrameNumber=1
		}
		
		for(i=currentFrameNumber+1; !(i>TotalFrames); i++){
			console.log("changing frame " + i)
			document.getElementById("canvas"+(i)).id="canvas"+(i-1)
		}
		TotalFrames--;
		
		if(currentFrameNumber!=1){
			lastFrame()
		}
	}
}


function copyFrame(){
	$("#pasteFrame")[0].disabled = false;
	coppiedData = $("#canvas" + currentFrameNumber)[0].innerHTML
}

function pasteFrame(){
	$("#canvas" + currentFrameNumber)[0].innerHTML = coppiedData
	
	childNodesArray =$("#canvas" + currentFrameNumber)[0].childNodes
	
	for(i = 0; i<childNodesArray.length; i++){
		if(childNodesArray[i].className == "hitbox" || childNodesArray[i].className == "hurtbox"){
			childNodesArray[i].onclick = function(e){
				if(clickType == "removeBox"){
					this.parentNode.removeChild(this);
				}
			}
		}
	}
}

function exportMove(){
	characterCoords = [parseInt(getComputedStyle(document.getElementsByClassName("character")[0]).left), parseInt(getComputedStyle(document.getElementsByClassName("character")[0]).top)]
	
	
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
	//TODO
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
		document.getElementById("BoxSwitchButton").innerHTML="switch to blue bodies"
	} else {
		boxType = "hitbox"
		document.getElementById("BoxSwitchButton").innerHTML="switch to red ouchies"
	}
}

function switchClickType(x){
	if(x == "makeBox"){
		document.getElementById("BoxSwitchButton").disabled=false;
	} else if(x=="moveBox"){
		document.getElementById("BoxSwitchButton").disabled=false;
	} else {
		document.getElementById("BoxSwitchButton").disabled=true;
	}
	document.getElementById(clickType).disabled=false;
	clickType = x
	document.getElementById(clickType).disabled=true;
}

function toggleLightbox(){
	if(lightbox){
		lightbox = false
		
		canvasArray = document.getElementsByClassName("canvas")
		for(i=0; i<canvasArray.length; i++){
			canvasArray[i].style.opacity = 1;
		}
		if(currentFrameNumber>1){
			canvasArray[currentFrameNumber-2].style.display = "none";
		}
	} else{
		lightbox = true
		
		canvasArray = document.getElementsByClassName("canvas")
		for(i=0; i<canvasArray.length; i++){
			canvasArray[i].style.opacity = 0.5;
		}
		if(currentFrameNumber>1){
			canvasArray[currentFrameNumber-2].style.display = "block";
		}
	}
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
    mouse = {
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
	

    element = null;    
    canvas.onmousemove = function (e) {
		if(clickType == "makeBox"){
			setMousePosition(e);
			if (element !== null) {
				element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
				element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
				element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
				element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
			}
		} else if(clickType == "moveBox"){
			setMousePosition(e);
			if(element !== null){
				element.style.left = ( element.oldX + (mouse.x - mouse.startX)  ) + 'px';
				element.style.top = ( element.oldY + (mouse.y - mouse.startY) ) + 'px';
				
			}
		}
    }
	

    canvas.onclick = function (e) {
		if(clickType == "makeBox"){
			if (element !== null) {
				element = null;
				canvas.style.cursor = "default";
				console.log("finsihed making.");
			} else {
				console.log("begun making.");
				mouse.startX = mouse.x;
				mouse.startY = mouse.y;
				element = document.createElement('div');
				element.className = boxType
				element.style.left = mouse.x + 'px';
				element.style.top = mouse.y + 'px';
				
				element.onclick = function(e){
					if(clickType == "removeBox"){
						this.parentNode.removeChild(this);
						
						
					} else if(clickType=="moveBox"){
						if(element !== null){
							element = null;
							canvas.style.cursor = "default";
							console.log("finished moving.");
						} else{
							element = this;
							element.oldX = parseInt(element.style.left);
							element.oldY = parseInt(element.style.top);
							mouse.startX = mouse.x;
							mouse.startY = mouse.y;
							console.log("begun moving");
						}
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