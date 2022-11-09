var yesBtnEl = document.getElementById("yesBtn");
var landingEl = document.getElementById("landing");
var imageEl = document.getElementById("coverImage");
var searchBoxEl = document.getElementById("searchBox");

function showSearchBox() {
landingEl.setAttribute("class","hide");
imageEl.setAttribute("class", "hide");
searchBoxEl.setAttribute("class","show");
}


yesBtnEl.addEventListener("click", showSearchBox);

