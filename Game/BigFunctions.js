//A file of big, universal Functions and variables, used by all files. why? because the load order. Just trust me.

function getCookie(cname) { //look for Cookie with given name
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return false;
};

refreshRate=500; // milliseconds for html to show changes. Set to 1 seconds. Change this if you think your computer can handle it.

function Pro(){
	document.getElementById("ProClickers").style.display='block';
}


function loadTextFade() {
    $('#loadText').fadeOut('slow');
};

setInterval(loadTextFade, 4000)

function loadScreenFade() {
    $('#Loading').fadeOut('slow');
};

setInterval(loadScreenFade, 5000)