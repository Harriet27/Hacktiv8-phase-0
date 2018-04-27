
function konversiMenit(menit) {
  var jam = Math.trunc(menit / 60);
  var menitSisa = menit % 60;
  var menitSisaStr = String(menitSisa);
  if (menitSisaStr.length === 1) {
    menitSisa = "0" + menitSisa;
  }
  return jam + ":" + menitSisa;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
