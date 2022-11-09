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
  var requestURL = 'https://api.giphy.com/v1/gifs/search?api_key=JPHvBSAvBJm1NQqutblYluzvAYw7dE6O&q=beer&limit=5&offset=0&rating=pg-13&lang=en';
  inputFieldEl.value = inputFieldEl.value.replace("+", " ")
  console.log(inputFieldEl.value);
  console.log(requestURL);
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function (jsonArray) {
      console.log(jsonArray);
      //creates image element and assigns the random Gif as the source
      var randGif1 = document.createElement("img");
      var randGif2 = document.createElement("img");
      var randGif3 = document.createElement("img");
      var randGif4 = document.createElement("img");
      var randGif5 = document.createElement("img");
      randGif1.src = jsonArray.data[0].images.fixed_height.url;
      randGif2.src = jsonArray.data[1].images.fixed_height.url;
      randGif3.src = jsonArray.data[2].images.fixed_height.url;
      randGif4.src = jsonArray.data[3].images.fixed_height.url;
      randGif5.src = jsonArray.data[4].images.fixed_height.url;

      // randGif.classList.add("gif")
      
      breweryListEl.children[0].appendChild(randGif1);
      breweryListEl.children[1].appendChild(randGif2);
      breweryListEl.children[2].appendChild(randGif3);
      breweryListEl.children[3].appendChild(randGif4);
      breweryListEl.children[4].appendChild(randGif5);


    });
inputFieldEl.value = inputFieldEl.value.replace("+", " ")
};


searchBtnEl.addEventListener("click", function() {
getApi()
breweryListEl.classList.remove("hide")
});