const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

// -----------------------------------------
function isPrimeNumber(num) {
  let result = false;

  // TODO: How can we determine if no lower integer
  //       can divide into "num" evenly (other than 1)?
  //       Hint: in Javascript, to see if a number "i"
  //             is divisible into "num,"  then the
  //             statement:
  //                 (num % i === 0)
  //             would be true. ('%' is the 'modulus' operator
  //                             that we have used before when
  //                             making the Snake Game and
  //                             BouncyBall)

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
