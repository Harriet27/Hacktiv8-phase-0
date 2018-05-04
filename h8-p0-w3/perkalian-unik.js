function perkalianUnik(arr) {

  // Init variables
  var arrResults = [];
  var multiplyArr;
  var length = arr.length;

// 1st loop to determine unique ints to be multiplied
  for (var i = 0; i < length; i++) {
    console.log("ini arr " + arr);

// Init variables
    var panjang1 = i + 1; // var to determine length of int
    var ambilSementara = arr.splice(i, 1); // var to contain temporarily omitted int from array
    var TempoResults = 1; // init var to contain result of multiplied array

    console.log("ini ambilSementara " + ambilSementara);

    multiplyArr = arr; // array which will be multiplied

    console.log("ini multiply " + multiplyArr);

// 2nd loop to multiply array
    for (var j = 0; j < multiplyArr.length; j++) {
      TempoResults *= multiplyArr[j];

      console.log("ini result " + TempoResults);
    }

    arrResults.push(TempoResults); // result of multiplied array pushed to another array
    console.log("ini result akhir " + arrResults);
    console.log("ini arr " + arr);
    console.log("ini ambilSementara " + ambilSementara);
    // arr = [2, 4, 6];
    arr.splice(i, 0, ambilSementara); // array returned to initial state
    console.log("ini arr " + arr)
  }
  return arrResults; 
}

// TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
