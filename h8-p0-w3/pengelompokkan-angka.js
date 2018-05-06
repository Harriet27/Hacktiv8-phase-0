function mengelompokkanAngka(arr) {

// init variables
  var arrEven = [];
  var arrOdd = [];
  var arrThree = [];
  var arrResults =[arrEven, arrOdd, arrThree];

  // console.log(arr);

// loop to clasify even, odd, and multiplier of 3
  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i];

    // console.log(inspector);

    // classifier logic
    if (inspector % 3 === 0) {
      arrThree.push(inspector);
      // console.log(arrThree);
    } else if (inspector % 2 === 0) {
      arrEven.push(inspector);
      // console.log(arrEven);
    } else if (inspector !== 0) {
      arrOdd.push(inspector);
      // console.log(arrOdd);
    }
  }

  // console.log(arrResults);
  return arrResults;

}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
