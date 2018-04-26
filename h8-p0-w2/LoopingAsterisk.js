// Question 1

// Intialize counter
var rows1 = 5;
var counter = 1;

// Looping1
while (counter <= rows1) {
  console.log("*");
  counter ++;
}

// Question 2

// Intialize counter
var rows2 = 5;

for(var counter1 = 1; counter1 <= rows2; counter1 ++) {
  var s = "";
  for (var i = 1; i <= rows2; i ++) {
    s += "*";
  }
  console.log(s);
}

// Question 3

// Intialize variable
var rows2 = 5;
var perboleh = 1; // permits the loop to excrete specific amount of *

for(var counter1 = 1; counter1 <= rows2; counter1 ++) {
  var s = "";
  for (var i = perboleh; i > 0; i --) {
    s += "*";
  }
  console.log(s);
  perboleh ++;
}
