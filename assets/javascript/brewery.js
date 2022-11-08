var domHook = document.querySelector('#searchBtn');
var domHook1 = document.querySelector(".input-field");
var domHook2 = document.querySelector(".breweryList");

var searchInput = domHook1.value;

domHook.addEventListener('click', searchCity);

function searchCity() {
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

      for (var i = 0; i < data.length; i++) {
        var type = data[i].brewery_type;
        var name = data[i].name;
        var adress = data[i].street;
        var city = data[i].city;
        var webAdress = data[i].website_url;
        
        //variable to select all the gyphs and append 1 set of search info to each
        var gyphs = document.querySelectorAll('.gif');
        for (var i = 0; i < gyphs.length; i++){
        //create a card and append to dom
        var divEl = document.createElement("div");
        var typeEl = document.createElement("li");
        typeEl.textContent = type;
        var nameEl = document.createElement("li");
        nameEl.textContent = name;
        var adressEl = document.createElement("li");
        adressEl.textContent = adress;
        var cityEl = document.createElement("li");
        cityEl.textContent = city;
        var webAdressEl = document.createElement("a");
        webAdressEl.textContent = webAdress;
        webAdressEl.setAttribute('href', webAdress)

        divEl.appendChild(typeEl);
        divEl.appendChild(nameEl);
        divEl.appendChild(adressEl);
        divEl.appendChild(cityEl);
        divEl.appendChild(webAdressEl);
        domHook2.appendChild(divEl);
      }
    }
    });
};
