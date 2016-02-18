var playing = [];
for(xi=0; xi!=500; xi++){
	playing[xi] = false;
}

var keyboardNames =["Keyboard 1", "Keyboard 2"];

var currentKeyboard = 1;

function newSound(soundName, fileLoc, extension){
		window[soundName+ "s"] = [];
		window[soundName+"sIndex"] = 0;
		for(xi=0; xi!=15; xi++){
			window[soundName+"s"][xi] = new buzz.sound(fileLoc, {formats:[extension]});;
		}
		
}

newSound("cracklingC5", "./Sounds/Fx/crackling(C5)", "wav");
newSound("notificationA4", "./Sounds/Fx/notification(A4)", "wav");
newSound("reverb1", "./Sounds/Fx/reverb1", "wav");
newSound("whip", "./Sounds/Fx/whip", "wav");
newSound("whitenoise1", "./Sounds/Fx/whitenoise1", "wav");
newSound("loop1", "./Sounds/Loops/loop1", "wav");
newSound("hat", "./Sounds/Percussion/hat", "wav");
newSound("kick", "./Sounds/Percussion/kick", "wav");
newSound("snare", "./Sounds/Percussion/snare", "wav");
newSound("chord1", "./Sounds/Synths/Drop1/Chords/chord1(D4A4Cn5)", "wav");
newSound("chord2", "./Sounds/Synths/Drop1/Chords/chord2(A4Cn5E5)", "wav");
newSound("chord3", "./Sounds/Synths/Drop1/Chords/chord3(D4Fn4B4)", "wav");
newSound("ichord1", "./Sounds/Synths/Intro/Chords/chord(DACn)", "wav");
newSound("ichord2", "./Sounds/Synths/Intro/Chords/chord2(DFnB)", "wav");
newSound("ichord3", "./Sounds/Synths/Intro/Chords/chord3(EACn)", "wav");
newSound("ichord4", "./Sounds/Synths/Intro/Chords/chord4(B4Fn4)16th", "wav");
newSound("ichord5", "./Sounds/Synths/Intro/Chords/chord5(Cn5Gn4)16th", "wav");
newSound("ichord6", "./Sounds/Synths/Intro/Chords/chord6(Gn4E4)16th", "wav");
newSound("ichord7", "./Sounds/Synths/Intro/Chords/chord7(A4Fn4)16th", "wav");
newSound("ichord8", "./Sounds/Synths/Intro/Chords/chord8(A4E5)", "wav");
newSound("ichord9", "./Sounds/Synths/Intro/Chords/chord9(Fn4A4D5)", "wav");
newSound("ichord10", "./Sounds/Synths/Intro/Chords/chord10(Cn4Fn4A4)", "wav");
newSound("ichord11", "./Sounds/Synths/Intro/Chords/chord11(D4Fn4B4whole)", "wav");
newSound("ichord12", "./Sounds/Synths/Intro/Chords/chord12(D4A4Cn5)half", "wav");
newSound("ichord13", "./Sounds/Synths/Intro/Chords/chord13(A4Cn5E5)4th", "wav");
newSound("ichord14", "./Sounds/Synths/Intro/Chords/chord14(Fn4B4D5)4th", "wav");
newSound("A4", "./Sounds/Synths/Intro/Notes/A4", "wav");
newSound("A416th", "./Sounds/Synths/Intro/Notes/A416th", "wav");
newSound("A5", "./Sounds/Synths/Intro/Notes/A5", "wav");
newSound("B4", "./Sounds/Synths/Intro/Notes/B4", "wav");
newSound("Cn5", "./Sounds/Synths/Intro/Notes/Cn5", "wav");
newSound("D4", "./Sounds/Synths/Intro/Notes/D4", "wav");
newSound("D5", "./Sounds/Synths/Intro/Notes/D5", "wav");
newSound("E4", "./Sounds/Synths/Intro/Notes/E4", "wav");
newSound("E4dFn4", "./Sounds/Synths/Intro/Notes/E4-Fn4", "wav");
newSound("E5", "./Sounds/Synths/Intro/Notes/E5", "wav");
newSound("Fn4", "./Sounds/Synths/Intro/Notes/Fn4", "wav");
newSound("airhorn", "./Sounds/airhorn", "mp3");
newSound("metronome", "./Sounds/metronome", "wav");
newSound("note1", "./Sounds/Synths/Drop1/Notes/note1", "wav");
newSound("note2", "./Sounds/Synths/Drop1/Notes/note2", "wav");
newSound("note3", "./Sounds/Synths/Drop1/Notes/note3", "wav");
newSound("note4", "./Sounds/Synths/Drop1/Notes/note4", "wav");
newSound("note5", "./Sounds/Synths/Drop1/Notes/note5", "wav");
newSound("dropPercLoop1", "./Sounds/Synths/Drop1/dropPercLoop1", "wav");
newSound("subBassLoop1", "./Sounds/Synths/Drop1/subBassLoop1", "wav");


function getKey(e){
	e=window.event;
	console.log(e.keyCode + " 1");
	if(currentKeyboard===1){
		switch (e.keyCode){
			case 173:
				playSound("airhorn", 173);
				break;
			case 81:
				playSound("D4", 81);
				break;
			case 87:
				playSound("E4", 87);
				break;
			case 69:
				playSound("E4dFn4", 69);
				break;
			case 82:
				playSound("Fn4", 82);
				break;
			case 84: 
				playSound("A4", 84);
				break;
			case 89:
				playSound("B4", 89);
				break;
			case 85:
				playSound("Cn5", 85);
				break;
			case 73:
				playSound("D5", 73);
				break;
			case 79:
				playSound("E5", 79);
				break;
			case 80:
				playSound("A5", 80);
				break;
			case 65:
				playSound("cracklingC5", 65);
				break;
			case 83:
				playSound("reverb1", 83);
				break;
			case 68:
				playSound("whitenoise1", 68);
				break;
			case 70:
				playSound("whip", 70);
                break;
			case 71:
				playSound("A416th", 71);
				break;
			case 72:
				playSound("ichord6", 72);
				break;
			case 74:
				playSound("ichord7", 74);
				break;
			case 75:
				playSound("ichord4", 75);
				break;
			case 76:
				playSound("ichord5", 76);
				break;
			case 90:
				playSound("kick", 90);
				break;
			case 88:
				playSound("hat", 88);
				break;
			case 67:
				playSound("snare", 67);
				break;
			case 86:
				playSound("notificationA4", 86);
				break;
			case 66:
				playSound("ichord1", 66);
				break;
			case 78:
				playSound("ichord2", 78);
                break;
			case 77:
				playSound("ichord3", 77);
				break;
            
		}
	} else if(currentKeyboard==2){
		switch(e.keyCode){
            case 81:
                playSound("chord1", 81);
                break;
            case 87:
                playSound("chord2",87);
                break;
            case 69:
                playSound("chord3", 69);
                break;
            case 82:
				playSound("note1", 82);
				break;
			case 84: 
				playSound("note2", 84);
				break;
			case 89:
				playSound("note3", 89);
				break;
			case 85:
				playSound("note4", 85);
				break;
			case 73:
				playSound("note5", 73);
				break;
			case 79:
				playSound("subBassLoop1", 79);
				break;
			case 80:
				playSound("dropPercLoop1", 80);
				break;
            case 65:
				playSound("metronome", 65);
				break;
			case 83:
				playSound("reverb1", 83);
				break;
			case 68:
				playSound("whitenoise1", 68);
				break;
			case 70:
				playSound("whip", 70);
                break;
            case 71:
				playSound("ichord10", 71);
				break;
			case 72:
				playSound("ichord2", 72);
				break;
			case 74:
				playSound("ichord1", 74);
				break;
			case 75:
				playSound("ichord9", 75);
				break;
			case 76:
				playSound("ichord8", 76);
                break;
            case 90:
				playSound("kick", 90);
				break;
			case 88:
				playSound("hat", 88);
				break;
			case 67:
				playSound("snare", 67);
				break;
			case 86:
				playSound("notificationA4", 86);
				break;
			case 66:
				playSound("ichord12", 66);
				break;
			case 78:
				playSound("ichord13", 78);
                break;
			case 77:
				playSound("ichord14", 77);
				break;
                
		}
	}
	
	if(e.keyCode===37){
		currentKeyboard--;
        document.getElementById("keyboardName").innerHTML="<h1> \<  Soundboard "+currentKeyboard+"  \> </h1>"
	} else if(e.keyCode === 39){
		currentKeyboard++;
        document.getElementById("keyboardName").innerHTML=" <h1> \<  Soundboard "+currentKeyboard+"  \> </h1>"
	}
}

function clearKey(e){
	e=window.event;
	playing[e.keyCode] = false;
    document.getElementsByClassName("key"+e.keyCode)[0].style.backgroundColor="transparent";
}

function playSound(x, y){
	if(!playing[y]){
		window[x+"s"][window[x+"sIndex"]].play();
		window[x+"sIndex"]++;
		if(window[x+"sIndex"]>14){
			window[x+"sIndex"]=0;
		}
		playing[y]=true;
        console.log("key"+y);
        document.getElementsByClassName("key"+y)[0].style.backgroundColor="#FFFFFF";
		startKeyboard();
	}
}
firstRun=true;
function playMetro() {
	playSound("metronome", 77);
	setTimeout(startKeyboard(), 3000);
    document.getElementsByClassName("key"+77)[0].style.backgroundColor="transparent";
}

