const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

// -----------------------------------------
// Function: given a number, return that
// number's factorial
// -----------------------------------------
function getFactorial(num) {
  let result = 0;

  for (i = 0; i <= num; i++) {
    if (result === 0) {
      result += i;
    } else {
      result *= i;
    }
  }
  // TODO: Given how to calculate factorial,
  //       what Javascript is needed?
  //       Hint: we're looping "for" a given number
  //             of iterations, from 1 to "num"

  return result;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const num = form.count.value;
  console.log("Number: " + num);
  const result = getFactorial(num);
  resultDiv.innerText = result;
});
