/*
-------------------
Prime Number Cruncher
-------------------

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 BUKAN bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

PROBLEM:
Disediakan sebuah function primeNumberCruncher yang menerima sebuah parameter
berupa number, dan mengembalikan kumpulan angka prima yang lebih besar
dari rata-rata kumpulan angka prima dari inputan parameter tersebut.

Contoh 1:
---------
input: 10

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7 ]
 - 2 + 3 + 5 + 7 = 17
 - AVERAGE: 17/4 = 4.25

output: [5, 7]

Contoh 2:
---------
input: 44

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 = 281
 - AVERAGE: 281/14 = 20.07

Output: [ 23, 29, 31, 37, 41, 43 ]

Contoh 3:
---------
input: 23

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100
 - AVERAGE: 100/9 = 11.11

output: [ 13, 17, 19, 23 ]

RULES
-----
 - DILARANG MENGGUNAKAN built-in function .map, .filter, .reduce

*/

function numberPrimeCruncher(input) {
  var factors = [];
  var angka = input;

  for (var i = 2; i <= input; i++) {
    var angka = i;
    var booleanPrime = true;
    // loop to divide angka with int before angka
    for (var j = 2; j < angka; j++) {
      var divider = j;
      var inspector = angka % divider;
      // console.log(divider);
      // console.log(inspector);

      // logic to decide if angka is a prime number or not
      if (inspector === 0) {
        booleanPrime = false;
      }
    }
    if (booleanPrime) {
      factors.push(i)
    }
  }

  // console.log(factors);

  var sum = 0;
  for (var k = 0; k < factors.length; k++) {
    sum += factors[k]
  }
  // console.log(sum);

  var average = sum / factors.length

  // console.log(average);

  var arrFactorsAboveAverage = [];
  for (var l = 0; l < factors.length; l++) {
    if (factors[l] > average) {
      arrFactorsAboveAverage.push(factors[l])
    }
  }

  return arrFactorsAboveAverage;
}

console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []