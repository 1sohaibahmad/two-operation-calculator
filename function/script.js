// alert("Hello")

function sum_value() {
  let first_value = document.getElementById("first-value");
  let f = first_value.value;
  let second_value = document.getElementById("second-value");
  let s = second_value.value;
  let sum = Number(f) + Number(s);
  document.getElementById('sum-of-value').innerHTML = "The Sum is " + sum;
}

function sub_value() {
  let first_value = document.getElementById("first-value");
  let f = first_value.value;
  let second_value = document.getElementById("second-value");
  let s = second_value.value;
  let sum = Number(f) - Number(s);
//   alert("The Difference is " + sum)
  document.getElementById('sum-of-value').innerHTML = "The Difference is " + sum;
}n