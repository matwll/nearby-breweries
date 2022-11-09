// having a local storage to save previous city names
localStorage.setItem("searchCity", ".input-field");

var myValue = localStorage.getItem("searchCity");
// get value from input (add event listener)
console.log(myValue)
var inputValue="" //put the value from the input to this variable

var searchHistory = [
    {
        "searchCity": "Seattle", 
         "postalCode": ""
    },
    {
        "searchCity": "San Francisco",
        "postalCode": ""
    },
    {
        "searchCity": "Los Angeles",
        "postalCode": ""
    }
]
// push inputValue into search history

localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

var myObj = localStorage.getItem("searchHistory");

console.log(myObj);
var parsedData = JSON.parse(myObj);
console.log(parsedData)