var arr = [10, 4, 5, 2, 4];

arr.sort(function(value1, value2) { return value1 > value2 });

console.log(arr);

var tempo = "";
var arrayAmount = 0;

for (var i = 0; i <= arr.length - 1; i++) {
  var inspector = arr[i];
  // console.log("ini inspector " + inspector);
  // console.log("ini tempoHurufAwal1 " + tempoHurufAwal1);
  if (tempo !== inspector) {
    tempo = inspector;
    arrayAmount ++;
    // console.log("ini jumlahArrayHuruf " + jumlahArrayHuruf);
  }
}

console.log(arrayAmount);

var arrayAngka = [];

for(var j = 0; j <= arrayAmount - 1; j++)
{
  arrayAngka[j] = new Array();
  for (var m = 0; m < 2; m++) {
    arrayAngka[j].push(null)
  }
}

console.log(arrayAngka);

var tempoAngka;
var positionArrayAngka = 0;

for (var k = 0; k <= arr.length - 1; k++) {

  var inspector2 = arr[k];
  console.log("ini inspector2 -> " + inspector2);
  if (k === 0) {
    tempoAngka = inspector2;
    arrayAngka[positionArrayAngka][0] ++;
    arrayAngka[positionArrayAngka][1] + ("ini angkanya -> " + inspector2)
    console.log("ini tempoAngka -> " + tempoAngka);
  } else if (tempoAngka === inspector2) {
    arrayAngka[positionArrayAngka][0] ++;
  } else if (tempoAngka !== inspector2) {
    tempoAngka = inspector2;
    positionArrayAngka ++;
    arrayAngka[positionArrayAngka][0] ++;
    arrayAngka[positionArrayAngka][1] + ("ini angkanya -> " + inspector2)
  }

  console.log(arrayAngka);

}

console.log(arrayAngka.sort(function(value1, value2) { return value1 > value2 }));
