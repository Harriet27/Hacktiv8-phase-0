/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/

function countSolo(numbers) {
  var sumSingle = 0;

  for (var i = 0; i < numbers.length; i++) {
    var tempoNumber = numbers[i];
    var tempoArr = [];
    for (var k = 0; k < numbers.length; k++) {
      var inspector = numbers[k];
      if (inspector === tempoNumber) {
        tempoArr.push(inspector)
      }
    }
    // console.log(tempoArr);
    if (tempoArr.length === 1) {
      sumSingle += tempoArr[0];
    }
  }
  return sumSingle;
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])) // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])) // 38