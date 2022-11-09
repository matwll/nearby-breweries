var citySearch = document.querySelector(".input-field");

// having a local storage to save previous city names

localStorage.setItem("searchCity", (".input-field"));

var myValue = localStorage.getItem("searchCity");

console.log(myValue)

var arrayData = [
    {
        "searchCity": ".input-field"
    },
    {
        "khttps://api.openbrewerydb.org/breweries?by_city=": "value02"
    }
]

localStorage.setItem("myArray", JSON.stringify(arrayData));

var myObj = localStorage.getItem("searchCity");

console.log(myObj);
var parsedData = JSON.parse(myObj);
console.log(parsedData)