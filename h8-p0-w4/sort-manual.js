function sortManual(arr) {

  // init variables
  var sortedArr = []; // arr to contain sorted Arr
  var length = arr.length;

  // parent loop to loop through the arr
  for (var j = 0; j <= length - 1; j++) {

    // init variables
    var tempoSmallest; // var to temporarily contain smallest number
    var tempoSmallestPosition; //  var to position of tempoSmallest
    var smallest; // var to contain final smallest Number

    // nested loop to find smallest number correspondingly with processed array
    for (var i = 0; i <= length - 1; i++) {

      // init variables
      var inspector = arr[i];

      console.log("ini inspector -> " + inspector);

      // logic to find smallest Number
      if (i === 0) {
        tempoSmallestPosition = i;
        tempoSmallest = inspector;
      } else if (tempoSmallest > inspector) {
        tempoSmallestPosition = i;
        tempoSmallest = inspector;
      }

      console.log("ini smallest position -> " + tempoSmallestPosition);
      console.log("ini tempoSmallest -> " + tempoSmallest);

    }

  smallest = arr[tempoSmallestPosition]; // obtain final smallest number
  arr.splice(tempoSmallestPosition, 1); // get smallest number and omit from array
  console.log("ini smallest -> " + smallest);
  console.log("ini length -> " + length);
  console.log("ini arr " + arr);
  sortedArr.push(smallest); // push smallest number to final array
  console.log("ini sortedArr " + sortedArr);

  }

return sortedArr;
}

console.log(sortManual([1, 7, 3]));
