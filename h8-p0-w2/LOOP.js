// Question 1

// Intialize counter
var counter = 2;
var counter2 = 20;

// Looping1
console.log("LOOPING PERTAMA");
while (counter <= 20) {
  console.log(counter + " - I love coding");
  counter += 2;
}

// Looping2
console.log("LOOPING KEDUA");
while (counter2 >= 2) {
  console.log(counter2 + " - I will become a fullstack developer");
  counter2 -= 2
}

// Question 2

console.log("LOOPING PERTAMA");

// For Looping 1
for(var counter1 = 1; counter1 <= 20; counter1 ++) {
  console.log(counter1 + " - I Love Coding");
}

console.log("LOOPING KEDUA");

// For Looping 2
for(var counter2 = 20; counter2 >= 1; counter2 --) {
  console.log(counter2 + " - I will become a fullstack developer");
}

// Question 3

// FOR Loop as even or odd classifier
for(var counter1 = 1; counter1 <= 100; counter1 ++) {
  // initialize var inspector as container for counter integer
  var inspector1 = counter1 % 2;
  if (inspector1 >= 1) {
    console.log("GANJIL");
  } else {
    console.log("GENAP");
  }
}

// FOR Loop as multiplier of 3 classifier
for(var counter2 = 1; counter2 <= 100; counter2 += 2) {
  // initialize var inspector as container for counter integer
  var inspector2 = counter2 % 3;
  if (inspector2 === 0) {
    console.log(counter2 + " kelipatan 3");
  } else {
    console.log("");
  }
}

// FOR Loop as multiplier of 6 classifier
for(var counter3 = 1; counter3 <= 100; counter3 += 5) {
  // initialize var inspector as container for counter integer
  var inspector3 = counter3 % 6;
  if (inspector3 === 0) {
    console.log(counter3 + " kelipatan 6");
  } else {
    console.log("");
  }
}

// FOR Loop as multiplier of 10 classifier
for(var counter4 = 1; counter4 <= 100; counter4 += 9) {
  // initialize var inspector as container for counter integer
  var inspector4 = counter4 % 10;
  if (inspector4 === 0) {
    console.log(counter4 + " kelipatan 10");
  } else {
    console.log("");
  }
}
