var arr = ('aku ingin makan');
var tempoArr = "";

// console.log(arr.length);

for (var i = 0; i <= arr.length - 1; i++) {
  var inspector = arr[i];
  if (inspector !== " ") {
    tempoArr += inspector;
  } else if (inspector === " ") {
    tempoArr += " dan "
  }
}

console.log(tempoArr);
