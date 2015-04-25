indexNum=Math.floor(Math.random() * 4) + 1;



var mp3Source=$('source#mp3');
var audioPlayer=document.getElementById('invisible');

mp3Source.attr('src', ('mp3/'+indexNum.toString()+'.mp3'));
audioPlayer.load();
audioPlayer.play();

document.body.style.backgroundImage = "url('img/"+indexNum+".gif')";