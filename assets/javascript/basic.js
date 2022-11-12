var yesBtnEl = document.getElementById("yesBtn");
var landingEl = document.getElementById("landing");
var imageEl = document.getElementById("coverImage");
var searchBoxEl = document.getElementById("searchBox");

function showSearchBox() {
landingEl.setAttribute("class","hide");
imageEl.setAttribute("class", "hide");
searchBoxEl.setAttribute("class","show");

var citySearch = document.querySelector('.input-field');
var lastSearch = JSON.parse(JSON.stringify(localStorage.getItem('searchHistory')));
citySearch.value = lastSearch;
}


yesBtnEl.addEventListener("click", showSearchBox);

