function kaliTerusRekursif(angka) {

  var arr = [];
  var strAngka = String(angka);

  for (var i = 0; i < String(angka).length; i++) {
    arr.push(Number(strAngka[i]));
    // console.log(arr);
  }

  var resultArr = 1;

  for (var j = 0; j < arr.length; j++) {
    resultArr *= arr[j];
    // console.log(resultArr);
  }

  var resultAkhir = String(resultArr);

  if (resultAkhir.length === 1) {
    return resultArr;
  }

  else {
    return kaliTerusRekursif(resultArr);
  }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
