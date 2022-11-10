const popOver = document.querySelector('.popOver');

document.querySelector(".input-field").addEventListener('click', ()=> {
    popOver.innerHTML = '';

    localStorage.history.split(',').forEach(val => {
        popOver.innerHTML += `<button class="btn">${val}</button>`;
    });
    popOver.style.display = 'block';
})

console.log(myValue)

// var inputValue= "";
// var searchHistory = [
//     {
//         "searchCity": "Seattle", 
//          "postalCode": ""
//     },
//     {
//         "searchCity": "San Francisco",
//         "postalCode": ""
//     },
//     {
//         "searchCity": "Los Angeles",
//         "postalCode": ""
//     }
// ]
// push inputValue into search history

// localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

// var myObj = localStorage.getItem("searchHistory");

// console.log(myObj);
// var parsedData = JSON.parse(myObj);
// console.log(parsedData)