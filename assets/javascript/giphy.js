var breweryListEl = document.querySelector(".breweryList");
var searchButtonEl = document.querySelector(".searchButton");
var userInputEl = document.querySelector(".userInput")

function getApi() {
  var requestURL = 'https://api.giphy.com/v1/gifs/random?api_key=JPHvBSAvBJm1NQqutblYluzvAYw7dE6O&tag=' + userInputEl.innerHTML + '&rating=pg-13';

  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function (jsonArray) {
      console.log(jsonArray);
      breweryListEl.src = jsonArray.data.images.fixed_height.mp4
    })
};


//searchButtonEl.addEventListener("click", getapi());
getApi()