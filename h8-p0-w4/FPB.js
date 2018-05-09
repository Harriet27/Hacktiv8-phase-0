function fpb(angka1, angka2) {

  // init variables
  var arr = [angka1, angka2];
  var factors = [[],[]];


  // loop to create factorials array
  for (var j = 0; j <= arr.length - 1; j++) {
    // console.log("for luar " + factors);

    // loop to push factorials into corresponding numbers array
    for (var i = 1; i < arr[j]; i++) {
      if (arr[j] % i === 0) {
        factors[j].push(i);
        // console.log("for dalam " + factors[j]);
      }
    }
    // console.log(factors);
  }


  // init variables for finding HCF
  var arrayReference;
  var arrayComparison;
  var biggestFactor = 0;

  if (factors[0].length > factors[1].length) {
    arrayReference = factors[0];
    arrayComparison = factors[1];
  } else {
    arrayReference = factors[1];
    arrayComparison = factors[0];
  }

  // console.log("arrayReference " + arrayReference);
  // console.log("arrayComparison " + arrayComparison);

  // loop to find HCF
  for (var l = 0; l <= arrayComparison.length - 1; l++) {
    for (var k = 0; k <= arrayReference.length - 1; k++) {
      var tempoFactorAB;
      var tempoFactorA = arrayReference[k];
      var inspectorB = arrayComparison[l];
      if (tempoFactorA === inspectorB) {
        tempoFactorAB = tempoFactorA;
        // console.log("ini tempoFactorAB " + tempoFactorAB + "\n" + "/////");
      }
    }
    if (tempoFactorAB > biggestFactor) {
      biggestFactor = tempoFactorAB;
    }
    // console.log("ini biggestFactor " + biggestFactor + "\n" + "--<>--");
  }
  return biggestFactor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

/*
function fpb(angka1, angka2) {
  var biggestFactor;
  for(i=1; i < angka1; i++){
    if(angka1 % i === 0 && angka2 % i === 0){
      biggestFactor = i;
      // console.log(biggestFactor);
    }
  }
  return biggestFactor;
}
*/
