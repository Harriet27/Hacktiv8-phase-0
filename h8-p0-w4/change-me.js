function changeMe(arr) {
  var obj0 = {};

  if (arr.length === 0) {
    console.log('""');
  }

  else {

    console.log(obj0);

    for (var i = 0; i < arr.length; i++) {

      obj0.firstName = arr[i][0];
      obj0.lastName = arr[i][1];
      obj0.gender = arr[i][2];

      if (arr[i][3] <= 2018) {
        obj0.age = 2018 - arr[i][3];

      }

      else {
        obj0.age = 0;
      }

      console.log((i + 1) + ". " + obj0.firstName + " " + obj0.lastName + ":");
      console.log(obj0);

    }



  }
}

// changeMe(['Christ', 'Evans', 'Male', 1982])


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""
