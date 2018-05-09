function cariModus(arr) {

  // arr sorted for easier process
  arr.sort(function(value1, value2) { return value1 > value2 });

  // console.log(arr);

  // init variables
  var tempo = ""; // var to contain unique number
  var arrayAmount = 0; // var to determine length of arr


  // for loop to scan unique values which will determine length of arr
  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i]; // var to contain number to be checked
    // console.log("ini inspector " + inspector);
    // console.log("ini tempoHurufAwal1 " + tempoHurufAwal1);

    // logic to detect unique value
    if (tempo !== inspector) {
      tempo = inspector;
      arrayAmount ++; // for every unique value, array length increase by 1
      // console.log("ini jumlahArrayHuruf " + jumlahArrayHuruf);
    }
  }

  // console.log(arrayAmount);


  // arr to contain amount of value and the value itself
  var arrayAngka = [];

  // for loop to create multidimensional array
  for(var j = 0; j <= arrayAmount - 1; j++)
  {
    arrayAngka[j] = new Array();
    arrayAngka[j].push([null]);
    arrayAngka[j].push([null]);

  }

  // console.log(arrayAngka);

  // init variables
  var tempoAngka;
  var positionArrayAngka = 0; // var to contain position of array which will be inserted

  // for loop to scan amount of each unique value
  for (var k = 0; k <= arr.length - 1; k++) {

    // var to contain unique value
    var inspector2 = arr[k];
    // console.log("ini inspector2 -> " + inspector2);

    // logic to detect if value is indeed unique
    if (k === 0) {
      tempoAngka = inspector2;
      arrayAngka[positionArrayAngka][0] ++;
      arrayAngka[positionArrayAngka][1] += inspector2;
      // console.log("ini tempoAngka -> " + tempoAngka);
    } else if (tempoAngka === inspector2) {
      arrayAngka[positionArrayAngka][0] ++;
    } else if (tempoAngka !== inspector2) {
      tempoAngka = inspector2;
      // console.log("ini tempoAngka -> " + tempoAngka);
      positionArrayAngka ++;
      arrayAngka[positionArrayAngka][0] ++;
      arrayAngka[positionArrayAngka][1] += inspector2;
    }

    // console.log(arrayAngka);

  }

  // arr sorted based on amount of each unique value, from biggest to smalles
  arrayAngka.sort(function(value1, value2) { return value1 < value2 })
  // console.log(arrayAngka);

  // logic to find modus (most frequent value)
  if (arrayAngka.length === 1) {
    return (-1);
  } else if (arrayAngka[0][0] === 1 && arrayAngka[1][0] === 1){
    return (-1);
  } else {
    return Number((arrayAngka[0][1]));
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7, 8])); // -1
