function targetTerdekat(arr) {

  var tempoArr = [];
  var positionX, positionO;
  var shortestDistance = 0;

  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i];
    var tempoDistance;
    if (inspector === "x") {
      positionX = i;
    } else if (inspector === "o") {
      positionO = i;
    }
    var typeX = typeof positionX;
    var typeO = typeof positionO;
    // console.log("ini arr = " + arr);
    // console.log("ini typeof positionX = " + typeX + "| ini typeof positionO = " + typeO);
    // console.log("ini positionX = " + positionX + "| ini positionO = " + positionO);
    if (typeX === "number" && typeO === "number") {
      if (positionO > positionX)
      tempoArr = arr.slice(positionX, positionO)
      else if (positionX > positionO) {
        tempoArr = arr.slice(positionO, positionX)
      }
    }
    // console.log("ini tempoArr = " + tempoArr);
    tempoDistance = tempoArr.length;
    // console.log("ini tempoDistance = " + tempoDistance);
    if (shortestDistance === 0) {
      shortestDistance = tempoDistance;
      // console.log("ini shortestDistance pertama = " + shortestDistance);
    } else if (tempoDistance < shortestDistance) {
      // console.log("ini shortestDistance sebelum perbandingan = " + shortestDistance);
      shortestDistance = tempoDistance;
      // console.log("ini shortestDistance setelah perbandingan = " + shortestDistance);
    }
    // console.log("ini shortestDistance = " + shortestDistance);
    // console.log("--<>--");
  }
  return shortestDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
