function targetTerdekat(arr) {

// init global variables
  var tempoArr = []; // arr to contain sliced arr for distance measurement
  var positionX, positionO; // arr to contain position of O and X
  var shortestDistance = 0; // init shortestDistance

// loop for measuring shortestDistance
  for (var i = 0; i <= arr.length - 1; i++) {
    var inspector = arr[i]; // inspector var which will be used for comparison
    var tempoDistance; // var to contain temporary distance, which will be used during comparisons

    if (inspector === "x") {
      positionX = i; // assigning position of X
    } else if (inspector === "o") {
      positionO = i; // assigning position of O
    }
// var to contain typeof positionO and positionX
    var typeX = typeof positionX;
    var typeO = typeof positionO;
    // console.log("ini arr = " + arr);
    // console.log("ini typeof positionX = " + typeX + "| ini typeof positionO = " + typeO);
    // console.log("ini positionX = " + positionX + "| ini positionO = " + positionO);

/* logic to know if positionO or positionX is number or undefined
this need to be done if using slice function */

    if (typeX === "number" && typeO === "number") {
      if (positionO > positionX)
      tempoArr = arr.slice(positionX, positionO) // slice array of x with corresponding o
      else if (positionX > positionO) {
        tempoArr = arr.slice(positionO, positionX) // slice array of o with corresponding x
      }
    }

    // console.log("ini tempoArr = " + tempoArr);
    tempoDistance = tempoArr.length; // function to obtain distance
    // console.log("ini tempoDistance = " + tempoDistance);

    // logic to assign first distance between x and o or reverse
    if (shortestDistance === 0) {
      shortestDistance = tempoDistance;
      // console.log("ini shortestDistance pertama = " + shortestDistance);
    }
    // logic to compare tempoDistance and shortestDistance
    else if (tempoDistance < shortestDistance) {
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
