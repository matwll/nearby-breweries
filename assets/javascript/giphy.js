var breweryListEl = document.querySelector(".breweryList");
var searchBtnEl = document.querySelector("#searchBtn");
var inputFieldEl = document.querySelector(".input-field")
var landingEl = document.querySelector("#landingPage");
var imageEl = document.getElementById("coverImage");
var searchBoxEl = document.getElementById("searchBox");


function getApi() {
  //replaces spaces in user input with + to work with api url
  for (var i = 0; i < inputFieldEl.value.length; i++) {
    inputFieldEl.value = inputFieldEl.value.replace(" ", "+")
    console.log (inputFieldEl.value)
  };
  //adds users input to search parameters for API URL
  var requestURL = 'https://api.giphy.com/v1/gifs/search?api_key=JPHvBSAvBJm1NQqutblYluzvAYw7dE6O&q=beer+' + inputFieldEl.value + '&limit=50&offset=0&rating=pg-13&lang=en';
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
      randGif1.classList.add('gif');
      var randGif2 = document.createElement("img");
      randGif2.classList.add('gif');
      var randGif3 = document.createElement("img");
      randGif3.classList.add('gif');
      var randGif4 = document.createElement("img");
      randGif4.classList.add('gif');
      var randGif5 = document.createElement("img");
      randGif5.classList.add('gif');

      let index = Math.floor(Math.random() * 46)



      randGif1.src = jsonArray.data[index].images.fixed_height.url;
      randGif2.src = jsonArray.data[index+1].images.fixed_height.url;
      randGif3.src = jsonArray.data[index+2].images.fixed_height.url;
      randGif4.src = jsonArray.data[index+3].images.fixed_height.url;
      randGif5.src = jsonArray.data[index+4].images.fixed_height.url;

      
      breweryListEl.children[0].appendChild(randGif1);
      breweryListEl.children[1].appendChild(randGif2);
      breweryListEl.children[2].appendChild(randGif3);
      breweryListEl.children[3].appendChild(randGif4);
      breweryListEl.children[4].appendChild(randGif5);


    });
inputFieldEl.value = inputFieldEl.value.replace("+", " ")
};

function clearGifs() {
  var findImages = document.querySelectorAll('.brewery');
  for(search of findImages){
    if(search.querySelector('.gif')){
      search.querySelector('.gif').remove();
    }
  }
}


searchBtnEl.addEventListener("click", function() {
  clearGifs()
  getApi()
  breweryListEl.classList.remove("hide")
});


//The following code is to make the nav bar responsive

var homeBtnEl = document.querySelector("#homeBtn")
var brewSearchBtnEl = document.querySelector("#brewSearchBtn")
var learnBtnEl = document.querySelector("#learnBtn")

homeBtnEl.addEventListener("click", function() {
  landingEl.classList.remove("hide");
  landingEl.classList.add("landingPage");
  landingEl.classList.add("grid-x");
  landingEl.classList.add("grid-padding-x");
  landingEl.classList.add("align-center-middle");
  landingEl.classList.add("text-center");
  imageEl.classList.remove("hide");
  searchBoxEl.classList.add("hide");
  breweryListEl.classList.add("hide");
})

brewSearchBtnEl.addEventListener("click", function() {
  landingEl.classList.add("hide");
  imageEl.classList.add("hide");
  searchBoxEl.classList.remove("hide");
})

learnBtnEl.addEventListener("click", function() {
  landingEl.classList.remove("hide");
  landingEl.classList.add("landingPage");
  landingEl.classList.add("grid-x");
  landingEl.classList.add("grid-padding-x");
  landingEl.classList.add("align-center-middle");
  landingEl.classList.add("text-center");
  imageEl.classList.remove("hide");
  searchBoxEl.classList.add("hide");
  breweryListEl.classList.add("hide");
})