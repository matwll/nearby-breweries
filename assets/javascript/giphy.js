//this is assuming .breweryList is 
var breweryListEl = document.querySelector(".breweryList");
var searchBtnEl = document.querySelector("#searchBtn");
var inputFieldEl = document.querySelector(".input-field")

function getApi() {
  //replaces spaces in user input with + to work with api url
  for (var i = 0; i < inputFieldEl.value.length; i++) {
    inputFieldEl.value = inputFieldEl.value.replace(" ", "+")
    console.log (inputFieldEl.value)
  };
  //adds users input to search parameters for API URL
  var requestURL = 'https://api.giphy.com/v1/gifs/random?api_key=JPHvBSAvBJm1NQqutblYluzvAYw7dE6O&tag=' + inputFieldEl.value + '+beer&rating=pg-13';
  inputFieldEl.value = inputFieldEl.value.replace("+", " ")
  console.log(inputFieldEl.value);
  console.log(requestURL);
  for (var i = 0; i < 5; i++) {
    fetch(requestURL)
      .then(function(response) {
        return response.json();
      })
      .then(function (jsonArray) {
        console.log(jsonArray);
        //creates image element and assigns the random Gif as the source
        var randGif = document.createElement("img");
        randGif.src = jsonArray.data.images.fixed_height.url;
        randGif.classList.add("gif")
        breweryListEl.appendChild(randGif);
        console.log(randGif)
      })
  };
  inputFieldEl.value = inputFieldEl.value.replace("+", " ")
};


searchBtnEl.addEventListener("click", function() {
  getApi()
  breweryListEl.classList.remove("hide")
});