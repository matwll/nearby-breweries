var searchBtn = document.querySelector('#searchBtn');
var citySearch = document.querySelector(".input-field");
var listChildren = document.querySelectorAll('.brewery');
var searchHistory = [];
for (item in JSON.parse(localStorage.getItem('searchHistory'))){
  searchHistory.push(JSON.parse(localStorage.getItem('searchHistory'))[item]);
  
}
console.log(JSON.parse(localStorage.getItem('searchHistory')));


searchBtn.addEventListener('click', searchCity);

function clearDivs(){
  var searchDivs = document.querySelectorAll('.brewery');
  for(search of searchDivs){
    if(search.querySelector('.search-div')){
      search.querySelector('.search-div').remove();
    }
  }
}

function searchCity(e) {
  e.preventDefault();
  clearDivs();
  var searchInput = citySearch.value;
  searchHistory.push(searchInput)
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
console.log(searchHistory);
  fetch(
    "https://api.openbrewerydb.org/breweries?by_city=" +
      searchInput +
      "&per_page=5"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      

      var divList = [];
      //for loop to interate over the data and seperate the information to be displayed in cards
      for (var i = 0; i < data.length; i++) {
        var type = data[i].brewery_type;
        var name = data[i].name;
        var adress = data[i].street;
        var state = data[i].state;
        var city = data[i].city;
        var webAdress = data[i].website_url;
        
        //create a card and append to dom
        var divEl = document.createElement("div");
        divEl.classList.add('search-div');
        var typeEl = document.createElement("p");
        typeEl.textContent = "Brewery type: " + type;
        var nameEl = document.createElement("h3");
        nameEl.textContent = name;
        var adressEl = document.createElement("p");
        adressEl.textContent = "🗺️ " + adress;
        var cityEl = document.createElement("p");
        cityEl.textContent = (city + ', ' + state);
        var webAdressEl = document.createElement("a");
        webAdressEl.textContent = webAdress;
        webAdressEl.setAttribute('href', webAdress)

        //attach all of the li's to the div and push each of those div's into an array
        divEl.appendChild(nameEl);
        divEl.appendChild(typeEl);
        divEl.appendChild(adressEl);
        divEl.appendChild(cityEl);
        divEl.appendChild(webAdressEl);
        divList.push(divEl);
      };
      //iterate over the array of breweries and append 1 to each div in the brewery list element
      for (var i = 0; i < divList.length; i++){
        listChildren[i].appendChild(divList[i]);
      }
    });
};
