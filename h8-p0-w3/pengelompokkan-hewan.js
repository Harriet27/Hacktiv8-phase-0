function groupAnimals(arr) {

  var tempoHurufAwal1 = "";
  var jumlahArrayHuruf = 0;

  arr.sort();

  // console.log("ini arr " + arr);

  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i][0];
    // console.log("ini inspector " + inspector);
    // console.log("ini tempoHurufAwal1 " + tempoHurufAwal1);
    if (tempoHurufAwal1 !== inspector) {
      tempoHurufAwal1 = inspector;
      jumlahArrayHuruf ++;
      // console.log("ini jumlahArrayHuruf " + jumlahArrayHuruf);
    }
  }

  // console.log("--<>--");

  var arrayHuruf = [];

  for(var j = 0; j <= jumlahArrayHuruf - 1; j++)
  {
    arrayHuruf[j] = new Array();
  }

  // console.log(arrayHuruf);

  var tempoHurufAwal2 = "";
  var positionArrayHuruf = 0;

  for (var k = 0; k <= arr.length - 1; k++) {
    var inspector2 = arr[k][0];
    if (k === 0) {
      arrayHuruf[positionArrayHuruf].push(arr[k]);
      tempoHurufAwal2 = inspector2;
    } else if (tempoHurufAwal2 !== inspector2) {
      positionArrayHuruf ++;
      arrayHuruf[positionArrayHuruf].push(arr[k]);
      tempoHurufAwal2 = inspector2;
    } else if (tempoHurufAwal2 === inspector2) {
      arrayHuruf[positionArrayHuruf].push(arr[k]);
    }
    // console.log(arrayHuruf);
  }
  // console.log(arrayHuruf);
  return arrayHuruf;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
