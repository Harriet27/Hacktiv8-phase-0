function pasanganTeresar(num) {
  var stringNum = String(num);
  var duaAngkaTerbesar = null;
  var duaAngkaSementara;

  for (var i = 0; i <= stringNum.length - 1; i++) {
    var panjang2 = i + 2;
    duaAngkaSementara = stringNum.slice(i, panjang2);
    var intDuaAngkaSementara = Number(duaAngkaSementara);
    if (duaAngkaSementara >= duaAngkaTerbesar) {
      duaAngkaTerbesar = intDuaAngkaSementara
    }
  }
  return duaAngkaTerbesar;
}

console.log(pasanganTeresar(9797990));
