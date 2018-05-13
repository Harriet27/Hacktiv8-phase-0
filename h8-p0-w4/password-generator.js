function changeVocals (str) {
  var vocalsLow = "aiueo";
  var nextLetterLow = "bjvfp";
  var vocalsUp = "AIUEO";
  var nextLetterUp = "BJVFP"
  var processedStr = "";

  for (var i = 0; i < str.length; i++) {
    var inspector = str[i];
    var positionUp = vocalsUp.indexOf(inspector);
    var positionLow = vocalsLow.indexOf(inspector);

    // console.log(positionUp);
    // console.log(positionLow);

    // console.log(inspector);

    if (positionUp !== -1) {
      processedStr += nextLetterUp[positionUp];
      // console.log("iniUp -> " + processedStr);
    }

    else if (positionLow !== -1) {
      processedStr += nextLetterLow[positionLow];
      // console.log("iniLow -> " + processedStr);
    }

    else {
      processedStr += inspector;
      // console.log(processedStr);
    }

  }
  return processedStr;
}

function reverseWord (str) {
  var reversedStr = "";

  for (var j = str.length - 1; j >= 0; j--) {
    var inspector2 = str[j];
    reversedStr += inspector2;
  }

  return reversedStr;

}

function setLowerUpperCase (str) {
  var upAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowAbc = "abcdefghijklmnopqrstuvwxyz";
  var processedStr2 = "";

  for (var i = 0; i < str.length; i++) {
    var inspector3 = str[i];
    if (upAbc.indexOf(inspector3) !== -1) {
      processedStr2 += inspector3.toLowerCase();
      // console.log(processedStr2);
    }

    else if (lowAbc.indexOf(inspector3) !== -1) {
      processedStr2 += inspector3.toUpperCase();
      // console.log(processedStr2);
    }

    else {
      processedStr2 += inspector3;
    }

  }

  return processedStr2;
}

function removeSpaces (str) {
  var processedStr3 = "";

  for (var i = 0; i < str.length; i++) {
    var inspector4 = str[i];
    if (inspector4 === " ") {
      processedStr3 += "";
    } else {
      processedStr3 += inspector4
    }
  }

  return processedStr3;

}

function passwordGenerator (name) {
  var changedVocals = changeVocals(name);
  var reversedWord = reverseWord(changedVocals);
  var settedCase = setLowerUpperCase(reversedWord);
  var goodbyeSpaces = removeSpaces(settedCase);

  if (goodbyeSpaces.length >= 5) {
    return goodbyeSpaces;
  }

  else {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
