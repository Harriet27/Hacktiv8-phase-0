function angkaPrima(angka) {

// loop to divide angka with int before angka
  for (var i = 2; i < angka; i++) {
    var divider = i;
    var inspector = angka % divider;
    // console.log(divider);
    // console.log(inspector);

    // logic to decide if angka is a prime number or not
    if (inspector === 0) {
      return false;
    }
  }
  return true;
}

console.log(angkaPrima(59));
