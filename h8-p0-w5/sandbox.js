function deepSum (arr) {

  if (arr.length === 0) {
    return "No number";
  } else {

    var result = 0;
    var parentArrayLength = arr.length;

    for (var i = 0; i < parentArrayLength; i++) {
      // console.log(arr[i]);

      var nestedArrayDepth1length = arr[i].length;

      for (var j = 0; j < nestedArrayDepth1length; j++) {
        // console.log(arr[i][j]);

        var nestedArrayDepth2length = arr[i][j].length;

        for (var k = 0; k < nestedArrayDepth2length; k++) {
          // console.log(arr[i][j][k]);
          result += arr[i][j][k];

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
