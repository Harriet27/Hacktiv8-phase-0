function ubahHuruf(kata) {

  // init variables
  var result = ""; // var to contain transposed word
  var arrABC = "abcdefghijklmnopqrstuvwxyz" // var to contain alphabet for transposing letters

  // for loop to detect letter and transpose word
  for (var i = 0; i <= kata.length - 1; i++) {
    var inspector = kata[i]
    // console.log(inspector);
    var nextLetterIndex = arrABC.indexOf(inspector) + 1;
    // console.log(nextLetterIndex);

    // logic when letter is "z"
    if (nextLetterIndex === 26) {
      nextLetterIndex = 0;
    }
    result += arrABC[nextLetterIndex];
  }

    return result;

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf("z"));
