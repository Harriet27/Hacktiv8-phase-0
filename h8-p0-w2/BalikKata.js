// Init function word reverser
function balikKata(kata) {
  var lengthKata = kata.length - 1; // var to contain word length, add -1 to sync with charAt method which starts with 0
  var kataTerbalik = ""; // var to contain chars enteted by the function, reversed
  while (lengthKata >= 0) {
    kataTerbalik = kataTerbalik + kata.charAt(lengthKata); // char entered reverse are added to variable,
    lengthKata --;
  }
  return kataTerbalik;
}

// Test Case
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
