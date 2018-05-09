
function cariMedian(arr) {

  // Init variables
  var median, position, position2;

  // logic to find median

  // logic for arr with odd length
  if (arr.length % 2 !== 0) {
    position = Math.round(arr.length / 2);
    // console.log(position);
    median = arr[position - 1];
    // console.log(median);
  }

  // logic for arr with even length
  else {
    position = (arr.length / 2) - 1;
    position2 = position + 1;
    // console.log(position + " dan " + position2);
    median = (arr[position] + arr[position2]) / 2;
    // console.log(median);
  }
  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
