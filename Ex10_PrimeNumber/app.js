const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

// -----------------------------------------
function isPrimeNumber(num) {
  //let result = false;
  let n = parseInt(num);

  if (n === 2 || n === 3) return true;
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
    if (n > 1) return true;
  }

  //return result;
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
