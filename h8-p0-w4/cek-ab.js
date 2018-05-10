function checkAB(num) {

  var positionA;
  var positionB;
  var distance;

  for (var i = 0; i < num.length; i++) {
    var inspector = num[i];
    if (inspector === "a") {
      positionA = i;
    }

    else if (inspector === "b") {
      positionB = i;
    }

    // console.log(positionA);
    // console.log(positionB);

    // if (positionA === 12) {
    //   return false;
    // }

    if (positionA > positionB) {
      distance = positionA - positionB - 1;
      }

    else if (positionB > positionA) {
      distance = positionB - positionA - 1;
    }

    // console.log("---<>---");

  }

  // console.log(distance);

  if (distance === 3) {
    return true;
  }

  else {
    return false;
  }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
