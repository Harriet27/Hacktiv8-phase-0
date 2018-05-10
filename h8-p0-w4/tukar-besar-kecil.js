
function tukarBesarKecil(kalimat) {
  var lowUpCase = "";
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var aBC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < kalimat.length; i++) {
    var inspector = kalimat[i];
    // console.log(inspector);

    if (abc.indexOf(inspector) !== -1) {
      lowUpCase += inspector.toUpperCase();
      // console.log(lowUpCase);
    }

    else if (aBC.indexOf(inspector) !== -1) {
      lowUpCase += inspector.toLowerCase();
      // console.log(lowUpCase);
    } else {
      lowUpCase += inspector;
    }

  }

  return lowUpCase;

}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
