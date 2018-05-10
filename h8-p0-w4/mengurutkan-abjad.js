function urutkanAbjad(str) {
  var arrLetter = str.split("");
  // console.log(arrLetter);
  arrLetter.sort();
  // console.log(arrLetter);

  // console.log(arrLetter);
  // for (var i = arrLetter.length - 1; i >= 0; i--) {
  //   arrLetterKebalik.push(arrLetter[i])
  //   console.log(arrLetterKebalik);
  // }

  return String(arrLetter.join(""));
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'
