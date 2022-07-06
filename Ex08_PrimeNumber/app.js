const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

// -----------------------------------------
function isPrimeNumber(num) {
  let result = false;

  return result;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const num = form.count.value;
  console.log("Number: " + num);
  const result = isPrimeNumber(num);

  if (result) {
    resultDiv.innerHTML = num + " is a Prime Number.";
  } else {
    resultDiv.innerHTML = num + " is NOT a Prime Number.";
  }  
});
