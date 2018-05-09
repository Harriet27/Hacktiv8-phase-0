function angkaPrima(angka) {


  for (var i = 2; i < angka; i++) {
    var divider = i;
    var inspector = angka % divider;
    // console.log(divider);
    // console.log(inspector);
    if (inspector === 0) {
      return false;
    }
  }
  return true;
}

console.log(angkaPrima(59));
