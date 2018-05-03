function palindromeAngka(num) {
  // init variables
  var nextNum = num + 1;
  var palindrome = false;

  while (palindrome === false) {
    var stringNextNum = String(nextNum);
    var stringNextNumPalindrome = "";

    //  loop to reverse string number
    for (var i = stringNextNum.length - 1; i >= 0 ; i--) {
      stringNextNumPalindrome += stringNextNum[i];
    }

    // logic to detect if palindrome or not
    if (stringNextNumPalindrome === stringNextNum) {
      palindrome = true;
      return nextNum;
    } else {
      nextNum ++
    }
  }
}

console.log(palindromeAngka(45));
