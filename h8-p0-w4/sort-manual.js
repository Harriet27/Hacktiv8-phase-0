function sortManual(arr) {
  var sortedArr = [];
  var length = arr.length;

  for (var j = 0; j <= length - 1; j++) {
    var tempoSmallest;
    var tempoSmallestPosition;
    var smallest;
    for (var i = 0; i <= length - 1; i++) {
      var inspector = arr[i];
      console.log("ini inspector -> " + inspector);
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

  smallest = arr[tempoSmallestPosition];
  arr.splice(tempoSmallestPosition, 1);
  console.log("ini smallest -> " + smallest);
  console.log("ini length -> " + length);
  console.log("ini arr " + arr);
  sortedArr.push(smallest);
  console.log("ini sortedArr " + sortedArr);

  }

return sortedArr;
}

console.log(sortManual([1, 7, 3]));
