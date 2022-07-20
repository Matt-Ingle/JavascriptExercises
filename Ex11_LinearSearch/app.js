import { cities } from "./cities.js"
const form = document.getElementById("form");
const citiesSelect = document.getElementById("citiesSelect");
const resultDiv = document.getElementById("resultDiv");

//
// The "cities" variable contains the array of cities, as an
// array of strings.
//
// Note: if you want to search by ignoring capitalization/case,
//       you should check/compare the search/target string
//       and the strings in the cities array by first
//       calling the .toLowerCase() function on them.
//

function linearSearch(target) {
  for (let i = 0; i < cities.length; i++) {
    
    if (cities[i].toLowerCase() === target.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const searchString = form.search.value;
  console.log("Search String: " + searchString);

  const index = linearSearch(searchString);
  resultDiv.innerText = index;
});

// Here, we're just adding the cities into the "select" HTML element,
// so we can see the list.  It doesn't affect the search.
cities.forEach((city) => {
  const option = document.createElement("option");
  option.setAttribute("value", city);
  option.innerHTML = city;
  citiesSelect.appendChild(option);
});