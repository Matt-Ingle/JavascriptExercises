const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

// -----------------------------------------
// Function: given a number, return that
// number's factorial
// -----------------------------------------
function getFactorial(num) {
  let result = 0;

  return result;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const num = form.count.value;
  console.log("Number: " + num);
  const result = getFactorial(num);
  resultDiv.innerText = result;
});
