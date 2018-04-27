// Init function word reverser
function balikKata(kata) {
  var lengthKata = kata.length; // var to contain word length
  var kataTerbalik = ""; // var to contain chars enteted by the function, reversed
  while (lengthKata >= 0) {
    var hurufKe = kata.charAt(lengthKata); // charAt method to obtain char position
    kataTerbalik = kataTerbalik + hurufKe; // char entered reverse are added to variable,
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
