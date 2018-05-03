function hitungJumlahKata(kalimat) {
  var wordCount = kalimat.split(" "); // words separated every space found
  return wordCount.length
}

console.log(hitungJumlahKata("hayo apa"));
