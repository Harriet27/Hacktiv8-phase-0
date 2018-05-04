function tentukanDeretAritmatika(arr) {

// init variables
  var bedaInit = arr[1] / arr[0];
  var bedaDeteksi;

  console.log("ini bedaInit " + bedaInit);

// loop to inspect elements in array
  for (var i = 0; i < arr.length - 1; i++) {
    bedaDeteksi = arr[i + 1] / arr[i];
    console.log("ini bedaDeteksi " + bedaDeteksi);

// logic to determine if array is indeed geometrically true
    if (bedaDeteksi !== bedaInit) {
      return false;
    }
  }
  return true;
  // console.log(true);
}


// console.log(tentukanDeretAritmatika([1, 2, 4, 9]));
