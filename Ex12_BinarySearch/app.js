import { cities } from "./cities.js"
const form = document.getElementById("form");
const citiesSelect = document.getElementById("citiesSelect");
const resultDiv = document.getElementById("resultDiv");

// This function is similar to the linearSearch() function
// in the previous exercise, except it takes the array as 
// a first parameter. 

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  // if leftIndex is less than or equal to rightIndex, we have cities
  // in the array (if they're equal, then we must have only one city).
  while (leftIndex <= rightIndex) {

    // (1) the array has elements, so find the middle index in the array:
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    // (2) if the target is equal to the middle element, return the index
    if (target.toLowerCase() === array[middleIndex].toLowerCase()) {
      return middleIndex;
    }

    // (3) If the target is "less than" the middle element, search the
    //     left half of the array
    if (target.toLowerCase() < array[middleIndex].toLowerCase()) {
      rightIndex = middleIndex - 1;
    } else {

      // (4) Else the garget is "greater than" the middle element, so search
      //     the right half of the array
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const searchString = form.search.value;
  console.log("Search String: " + searchString);

  const index = binarySearch(cities, searchString);
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