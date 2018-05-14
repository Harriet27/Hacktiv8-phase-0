
function  totalDigitRekursif(angka) {
  var strAngka = String(angka);
  var panjangAngka = strAngka.length;
  var positionAngka = strAngka.length - 1;

  if (panjangAngka <= 0) {
    return 0;
  }

  else {
    return Number(strAngka[positionAngka]) + totalDigitRekursif(Number(strAngka[positionAngka - 1]));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5
