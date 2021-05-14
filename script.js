// Value on Screen
function screenValue(val) {
  document.getElementById("screen").value += val;
}
// Evalute or solve
function result() {
  let x = document.getElementById("screen").value;
  let y = eval(x);
  document.getElementById("screen").value = y;
}
// clear Whole screen
function Allclear() {
  document.getElementById("screen").value = "";
}

// clear last digit
function deletelast() {
  let x = document.getElementById("screen").value;
  let y = x.substring(0, x.length - 1);
  document.getElementById("screen").value = y;
}
