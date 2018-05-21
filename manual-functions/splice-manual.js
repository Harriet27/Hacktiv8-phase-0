function arrayRemover(array, index, count) {

  var processedArray = [];

  while (count > 0) {
    array[index] = "";
    index++;
    count--
    // console.log(array);
  }

  for (var i = 0; i < array.length; i++) {
    var inspector = array[i]
    if (typeof inspector === "number") {
      processedArray.push(inspector)
    }
  }

  return (processedArray);

}

console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]