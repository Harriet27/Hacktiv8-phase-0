/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

/* pseudocode

sumOfTotal = 0
arrCouple = []
arrEvenNumbers = []

FOR i = 0, i < str.length
  inspectorCouple = str[i] + str[i + 1]
  arrCouple.push(inspectorCouple)
  i = i + 2
ENDFOR

IF str.length % 2 !== 0 THEN
  arrCouple.pop()
  arrCouple.push(str[str.length - 1] + str[0])
ENDIF

FOR j = 0, j < arrCouple.length
  var inspectorEven = arrCouple[j];
  IF inspectorEven % 2 === 0 THEN
    arrEvenNumbers.push(inspectorEven)
  ENDIF
  j ++
ENDFOR

FOR k = 0, k < arrEvenNumbers.length
  sumOfTotal += Number(arrEvenNumbers[k])
k ++
ENDFOR

DISPLAY sumOfTotal


*/

function evenPairsSum(str) {
  var sumOfTotal = 0;
  var arrCouple = [];
  var arrEvenNumbers = [];

  // console.log("strlength -> " + str.length);

  for (var i = 0; i < str.length; i = i + 2) {
    // console.log(inspectorCouple);
    // console.log(i);
    var inspectorCouple = str[i] + str[i + 1];
    arrCouple.push(inspectorCouple)
  }


  if (str.length % 2 !== 0) {
    arrCouple.pop();
    arrCouple.push(str[str.length - 1] + str[0])
  }
  // console.log(arrCouple)

  for (var j = 0; j < arrCouple.length; j++) {
    var inspectorEven = arrCouple[j];
    if (inspectorEven % 2 === 0) {
      arrEvenNumbers.push(inspectorEven)
    }
  }

  // console.log(arrEvenNumbers);

  for (var k = 0; k < arrEvenNumbers.length; k++) {
    sumOfTotal += Number(arrEvenNumbers[k]);
  }

  return sumOfTotal;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134