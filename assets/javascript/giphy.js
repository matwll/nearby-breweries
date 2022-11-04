//this is assuming .breweryList is 
var breweryListEl = document.querySelector(".breweryList");
var searchBtnEl = document.querySelector("#searchBtn");
var inputFieldEl = document.querySelector(".input-field")

function getApi() {
  var requestURL = 'https://api.giphy.com/v1/gifs/random?api_key=JPHvBSAvBJm1NQqutblYluzvAYw7dE6O&tag=' + inputFieldEl.value + '&rating=pg-13';
  console.log(inputFieldEl.value);
  console.log(requestURL);
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function (jsonArray) {
      console.log(jsonArray);
      var randGif = document.createElement("img");
      randGif.src = jsonArray.data.images.fixed_height.url;
      breweryListEl.appendChild(randGif);
    })
};


searchBtnEl.addEventListener("click", function() {
  getApi()
});