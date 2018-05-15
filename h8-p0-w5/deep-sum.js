function deepSum(arr) {

  // logic to identify if arr fulfills condition in which the function can run
  if (arr.length === 0) {
    return "No number";
  } else {

    // init variables
    var result = 0; // var to contain result of addition of array elements
    var parentArrayLength = arr.length;

    // loop to access parent array
    for (var i = 0; i < parentArrayLength; i++) {
      // console.log(arr[i]);

      var nestedArrayDepth1length = arr[i].length;

      // loop to access depth 1 nested array
      for (var j = 0; j < nestedArrayDepth1length; j++) {
        // console.log(arr[i][j]);

        var nestedArrayDepth2length = arr[i][j].length;


        // loop to access depth 2 nested array, where elements reside
        for (var k = 0; k < nestedArrayDepth2length; k++) {
          // console.log(arr[i][j][k]);
          result += arr[i][j][k]; // add elements to result var

        }
      }

      // console.log(nestedArray1length);
    }
  }

  return result;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number
