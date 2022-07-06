const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");


//
// Since the Fibonacci sequence is a list ('array') of numbers
// where each number is the sum of the TWO PRECEDING numbers
// in the sequence.
//
// For example, given this Fibonacci sequence of 7 elements:
//  let sequence = [0, 1, 1, 2, 3, 5, 8, 13]
// In this case, sequence[6] === 8.
// How did we get 8?  Because sequnce[5] === 5 and sequence[4] === 3
//   and 5 + 3 === 8
// That is, this is true:
//   sequence[6] === sequence[5] + sequence[4].
// If we were to add (aka, "push") the a new number, an 8th number,
// onto the sequence, how would we calculate it?
// sequence[7] === ?
// sequence[7] === sequence[6] + sequence[5].  See how the indexes work?
//

// -----------------------------------------
// Function: given a number, return that number
// of items in the Fibonacci sequence
// -----------------------------------------
function getFibonacciSequence(num) {
  // If the number is 0 or 1, return just that number as
  // the sequence; this is the Fibonacci sequence's definition.
  if (num < 2) {
    return [ num ]
  }

  // Otherwise...
  
  let sequence = [0, 1];

  //
  // TODO: Generate the fibonacci sequence up to 
  //       "num" numbers in the sequence.  Return
  //       an array of numbers.
  //

  return sequence;
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const num = form.count.value;
  console.log("Count entered: " + num);
  const result = getFibonacciSequence(num);
  resultDiv.innerText = JSON.stringify(result);
});
