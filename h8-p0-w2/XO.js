function xo(str) {            // Init function word reverser
  var countX = 0;
  var countO = 0;
  var lengthStr = str.length; // var to contain word length, add -1 to sync with charAt method which starts with 0
  while (lengthStr >= 0) {
    var inspector = "";
    inspector = str.charAt(lengthStr); // var to contain char at specific position
    if (inspector === "x") {           // inspects if a char is x or not
      countX ++;
    } else if (inspector === "o") {    // inspects if a char is o or not
      countO ++
    }
    lengthStr --;

  // console.log(countO);
  // console.log(countX);
     }
     if (countX > countO || countX < countO) {  // comparison of which one is bigger
       return false;
     } else if (countX === countO) { // operation for same result
       return true;
  }
}
  // Test Case
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
