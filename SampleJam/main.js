/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function firstDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function sbMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("sbDropdown").style.display="block";
}

function soundboards(){
    document.getElementById("sbMenu").style.display = "block";
    document.getElementsByClassName("soundboards")[0].style.backgroundColor = "#696969";
}

function closeSbDrop(){
    document.getElementById("sbMenu").style.display = "none";
    document.getElementsByClassName("soundboards")[0].style.backgroundColor = "#000000";
    document.getElementById("sbDropdown").style.display="none";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}