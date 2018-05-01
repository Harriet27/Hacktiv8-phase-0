// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
  var s = "";
  for (var counter1 = 1; counter1 <= row; counter1 ++) {
    for (var i = 1; i <= counter1; i ++) {
      bagiPerboleh = i % 2;
      if (bagiPerboleh) {
        s += "x";
      } else if (bagiPerboleh === false) {
        s += "o";
      }
    }
  console.log(s);
  }

}

drawLadder(3);

// function bikinBintang(level) {
//   var star = "";
//   for (var a = level; a > 0; a--) {
//     for (var i = a; i  0; i--) {
//       star += "*";
//     }
//     star += "\n";
//   }
//   return star;
// }
//
// var bintang = bikinBintang(7);
// console.log(bintang);
