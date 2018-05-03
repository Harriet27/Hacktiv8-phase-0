
function cariMean(num) {

// init variables
var sum = null;
var mean = null;
var roundedMean = null;

// for loop to calculate sum of array
for (var i = 0; i <= num.length - 1; i++) {
  sum += num[i];
}

// logic to calculate mean and rounding up
mean = sum / num.length;
roundedMean = Math.round(mean);

return roundedMean;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
