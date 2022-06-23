const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const tipAmount = document.getElementById("tipAmount");
const totalWithTip = document.getElementById("totalWithTip");

//
//  Hint: to set the value of the output fields, tipAmount and
//        totalWithTip, you'd set their "value", that is: tipAmount.value,
//        because they are input fields in the index.html file.
//

// When the tip amount input range/slider is changed, the
// inline function that is defined below will be triggered.
tipInput.addEventListener('change', () => {
  console.log("The new value for the tip input is " + tipInput.value);
});

// When the bill total input is changed, *AND* the user tabs or moves
// off of it, the inline function defined below will be triggered.
billTotalInput.addEventListener('change', (ev) => {
  console.log(
    "The new value for the total bill input is " 
    + billTotalInput.value);
});
