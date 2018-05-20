function sorting(arrNumber) {
  // init variables
  var sortedArr = []; // arr to contain sorted Arr
  var length = arrNumber.length;

  // parent loop to loop through the arrNumber
  for (var j = 0; j <= length - 1; j++) {

    // init variables
    var tempoSmallest; // var to temporarily contain smallest number
    var tempoSmallestPosition; //  var to position of tempoSmallest
    var smallest; // var to contain final smallest Number

    // nested loop to find smallest number correspondingly with processed arrNumberay
    for (var i = 0; i <= length - 1; i++) {

      // init variables
      var inspector = arrNumber[i];

      // console.log("ini inspector -> " + inspector);

      // logic to find smallest Number
      if (i === 0) {
        tempoSmallestPosition = i;
        tempoSmallest = inspector;
      } else if (tempoSmallest < inspector) {
        tempoSmallestPosition = i;
        tempoSmallest = inspector;
      }

      // console.log("ini smallest position -> " + tempoSmallestPosition);
      // console.log("ini tempoSmallest -> " + tempoSmallest);

    }

    smallest = arrNumber[tempoSmallestPosition]; // obtain final smallest number
    arrNumber.splice(tempoSmallestPosition, 1); // get smallest number and omit from arrNumberay
    // console.log("ini smallest -> " + smallest);
    // console.log("ini length -> " + length);
    // console.log("ini arrNumber " + arrNumber);
    sortedArr.push(smallest); // push smallest number to final arrNumberay
    // console.log("ini sortedArr " + sortedArr);

  }

  // console.log(sortedArr);
  return sortedArr;

}

function getTotal(arrNumber) {
  var total = 0;
  var terbesar = arrNumber[0];

  for (var i = 0; i < arrNumber.length; i++) {
    var inspector = arrNumber[i];

    if (inspector === terbesar) {
      total++
    }
  }

  if (total === 0) {
    return "''";
  }

  return "angka paling besar adalah " + terbesar + " dan jumlah kemunculan sebanyak " + total + " kali";
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
//
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
//
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
//
console.log(mostFrequentLargestNumbers([]));
// //''