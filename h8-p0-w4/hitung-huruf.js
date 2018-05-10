function hitungHuruf(kata) {


  // init variables
  var arrKata = [[""]]; // arr to contain split word
  var arrHuruf = []; // arr to contain letters and amount of each resepective letters of each word
  var positionArrKata = 0; // var to dynamically change position of arr

  // loop to split words and create arr to contain each word's letters
  for (var i = 0; i < kata.length; i++) {
    var inspector = kata[i];
    if (inspector === " ") {
      arrKata.push([""]); // create new array to contain next word
      arrHuruf.push([]); // create new array to contain next word's letters
      positionArrKata ++; // change position at arrKata
    } else {
      arrKata[positionArrKata][0] += inspector; // fill arrKata with letters of each resepective word
    }
  }

  arrHuruf.push([]) // create new arr to contain final word's letters
  // console.log(arrHuruf);


  var positionArrKata2 = 0; // var to dynamically change positionof arr


  // parent loop to change detecting each word in arrKata
  for (var j = 0; j < arrKata.length; j++) {

    var tempoHuruf; // var to contain unique word temporarily
    var positionArrHuruf = 0; // var to contain position of arrHuruf
    var tampungHuruf = ""; // var to contain letters which have been detected
    // console.log(arrKata[positionArrKata2]);

    // nested loop for detecting unique letters and amount of resepective unique letters
    for (var l = 0; l < arrKata[positionArrKata2][0].length; l++) {

      var inspector2 = arrKata[positionArrKata2][0][l]; // var to inspect letters
      // console.log("ini inspector2 -> " + inspector2);
      // console.log("ini tampungHuruf -> " + tampungHuruf);

      // logic for first letter
      if (l === 0) {
        tempoHuruf = inspector2;
        // console.log("ini tempoHuruf -> " + tempoHuruf);
        arrHuruf[positionArrKata2].push([null, ""]);
        arrHuruf[positionArrKata2][positionArrHuruf][0] ++;
        arrHuruf[positionArrKata2][positionArrHuruf][1] += inspector2;
      }

      // logic to add amount if the inspected letter is the same with tempoHuruf
      else if (tempoHuruf === inspector2) {
        arrHuruf[positionArrKata2][positionArrHuruf][0] ++;
      }

      // logic to handle if letter is different from tempoHuruf
      else if (tempoHuruf !== inspector2) {
        // console.log("ini inspector2 dalam logic index -> " + inspector2);

        // init variables
        var kataInspeksi = String(tampungHuruf);
        var indexOf = kataInspeksi.indexOf(inspector2); // var to contain index of already detected letters
        // console.log("indexOf -> " + indexOf);

        // logic to detect unique leters and create new array arrHuruf which contains amount of letter and the letter itself
        if (indexOf === -1) {
          tempoHuruf = inspector2;
          // console.log("ini tempoHuruf -> " + tempoHuruf);
          positionArrHuruf ++;
          arrHuruf[positionArrKata2].push([null, ""]);
          arrHuruf[positionArrKata2][positionArrHuruf][0] ++;
          arrHuruf[positionArrKata2][positionArrHuruf][1] += inspector2;
        }

        // logic to handle if inspected letter is already detected previously and thus add the amount of the letter at arrHuruf
        else if (indexOf !== -1) {
          tempoHuruf = inspector2;
          // console.log("ini tempoHuruf -> " + tempoHuruf);
          arrHuruf[positionArrKata2][indexOf][0] ++;
        }
      }

      tampungHuruf += inspector2;

    }

    arrHuruf[positionArrKata2].sort(function(value1, value2) { return value1 < value2 }); // sort arrHuruf based on the amount of letters
    positionArrKata2 ++;

  }

  // console.log(arrHuruf);
  // console.log(arrKata);
  // console.log("--<>--");


  // init variables
  var positionArrKata3 = 0; // var to dynamically change position of arrKata
  var biggestHurufAmount = 0; // var to contain most number of letters with more than one amount
  var kataBiggestHurufAmount; // var to contain word with most number of letters with more than one amount

  // parent loop to change detecting number of letters of each word in arrKata
  for (var m = 0; m < arrKata.length; m++) {

    var inspector3; // var to inspect amount of letters
    var tempoHurufAmount = 0; // var to contain temporary letters amount

    // console.log("ini kata yang lagi dideteksi -> " + String(arrKata[positionArrKata3]));

    // nested loop for detecting amount of letters
    for (var j = 0; j < arrHuruf[positionArrKata3].length; j++) {

      inspector3 = arrHuruf[positionArrKata3][j][0];
      // console.log("ini inspector 3 -> " + inspector3);

      // logic to detect if amount of letter is more than one or not
      if (inspector3 !== 1) {
        tempoHurufAmount ++
        // console.log("ini tempoHurufAmount -> " + tempoHurufAmount);
      }
    }

    // logic to find letter(s) with biggest amount
    if (tempoHurufAmount > biggestHurufAmount) {
      biggestHurufAmount = tempoHurufAmount;
      // console.log("ini biggestHurufAmount -> " + biggestHurufAmount);
      kataBiggestHurufAmount = String(arrKata[positionArrKata3]);
      // console.log("ini katanya -> " + String(arrKata[positionArrKata3]));

    }

    positionArrKata3 ++;

  }

  return kataBiggestHurufAmount;

}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
