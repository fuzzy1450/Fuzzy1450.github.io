function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
Descriptions=["500 Miles", "Bacon", "Woman's Man", "Hwat", "Slam Jam", "Chris is bad"]

indexNum=Math.floor(Math.random() * Descriptions.length) + 1;
if (getURLParameter("id")){
	indexNum=getURLParameter("id");
}




var mp3Source=$('source#mp3');
var audioPlayer=document.getElementById('invisible');

mp3Source.attr('src', ('mp3/'+indexNum.toString()+'.mp3'));
audioPlayer.load();
audioPlayer.play();

document.body.style.backgroundImage = "url('img/"+indexNum+".gif')";
document.title = Descriptions[indexNum-1];

function newSong(){
	fadeWindow();
	oldNum = indexNum;
	indexNum=Math.floor(Math.random() * Descriptions.length) + 1;
	
	while(oldNum==indexNum){
		indexNum=Math.floor(Math.random() * Descriptions.length) + 1;
	}
	
	mp3Source.attr('src', ('mp3/'+indexNum.toString()+'.mp3'));
	audioPlayer.load();
	audioPlayer.play();

	document.body.style.backgroundImage = "url('img/"+indexNum+".gif')";
	document.title = Descriptions[indexNum-1];
}


function fadeIn() {
    var op = 0.1;
    document.getElementById("popupWindow").style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        document.getElementById("popupWindow").style.opacity = op;
        document.getElementById("popupWindow").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeOut() {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            document.getElementById("popupWindow").style.display = 'none';
        }
        document.getElementById("popupWindow").style.opacity = op;
        document.getElementById("popupWindow").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

fadedIn=false;

function copyWindow(){
	
	if(!fadedIn){
		document.getElementById("link").value=("http://www.TooManySnipers.tf/Cameron?id="+indexNum)
	
		fadeIn();
		document.getElementById("link").focus();
		document.getElementById("link").select();
		fadedIn=true;
	}
}

function selectText(){
	document.getElementById("link").focus();
	document.getElementById("link").select();
}

function fadeWindow(){
	fadeOut();
	fadedIn=false;
}