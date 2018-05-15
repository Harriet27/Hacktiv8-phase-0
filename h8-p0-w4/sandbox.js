var angka = 653;
var resultAkhir = String(angka);

// console.log(angka % 10);

while (resultAkhir.length > 1) {

  console.log("ini angka -> " + angka);
  console.log("resultAkhir -> " + resultAkhir);
  var arr = [];
  var strAngka = String(angka);

  for (var i = 0; i < String(angka).length; i++) {
    arr.push(Number(strAngka[i]));
    console.log(arr);
  }

  var resultArr = 1;

  for (var j = 0; j < arr.length; j++) {
    resultArr *= arr[j];
    console.log(resultArr);
  }

  angka = resultArr;
  resultAkhir = String(angka);
}

console.log(angka);

//
//   var result = 1;
//
//     result *= angka % modulus;
//     angka = angka / divider;
//     angka = Math.trunc(angka);
//     result *= angka;
//     angka = result;
//     resultAkhir = String(result);
//     console.log("result ELSE -> " + result);
//     console.log("angka after ELSE -> " + angka);
//
//
// console.log("result akhir -> " + result);

// }
