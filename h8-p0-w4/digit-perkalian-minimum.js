function digitPerkalianMinimum(angka1) {

  // init variables
  var arr = [angka1];
  var factors = [];

    // loop to push factorials into corresponding numbers array
    for (var i = 0; i <= angka1; i++) {
      if (angka1 % i === 0) {
        factors.push(i);
        // console.log("for dalam " + factors[j]);
      }
    }
    // console.log(factors);
    // console.log(factors.length);
    var digitMinimum;

  if (angka1 === 1) {
    digitMinimum = 2;
    return digitMinimum;
  }



  else {

    var tampung1;
    var tampung2;
    var length = factors.length;
    var indexEnd = length - 2;
    var smallestFactorsCouple = "               ";
    // console.log("small -> " + smallestFactorsCouple.length);

    for (var j = 0; j < length; j++) {
      var tempo = "";
      // console.log(length);s
      tampung1 = factors.splice(0, 1)
      // console.log(tampung1);
      tampung2 = factors.splice(indexEnd, 1)
      // console.log(tampung2);
      // console.log(factors);
      indexEnd -= 2;
      length -= 1;
      tempo += String(tampung1) + String(tampung2);
      // console.log(tempo);
      if (tempo.length < smallestFactorsCouple.length) {
        smallestFactorsCouple = tempo;
      }
      // console.log("ini smallestFactorsCouple -> " + smallestFactorsCouple);
    }

    return smallestFactorsCouple.length;


  }

}
// // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
