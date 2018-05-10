function splitManual(kata) {

  var arrKata = [["", null]];
  var positionArrKata = 0;

  for (var i = 0; i < kata.length; i++) {
    var inspector = kata[i];
    if (inspector === " ") {
      arrKata.push(["", null]);
      positionArrKata ++
    } else {
      arrKata[positionArrKata][0] += inspector;
    }



  }

return arrKata;

}
