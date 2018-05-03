function palindromeKata(kata) {
  var kataTerbalik = "";
  var statement;

  // for loop to print kata reversed
  for (var i = kata.length - 1; i >= 0 ; i--) {
    kataTerbalik += kata[i];
  }
  // logic to identify palindrome words
  if (kataTerbalik === kata) {
    statement = true;
  } else {
    statement = false;
  }
  return statement;
}

console.log(palindromeKata("katak"));
