function highestScore(students) {

  // init variables
  var objHighScoringStudent = {};

  // logic to detect if arr is empty or not
  if (students.length === 0) {
    return objHighScoringStudent;
  } else {


    // init var to contain first letter of class name
    var scannedClassName = "";

    // loop to access class names of students
    for (var i = 0; i < students.length; i++) {

      // init variables
      var classNameInspector = students[i].class[0]; // var to contain first letter of student's class name
      var tempoClassName = students[i].class; // var to contain class name of students
      // console.log(classNameInspector);

      /* logic to detect if class name is already included in objHighScoringStudent,
      comparison using classNameInspector compared with scannedClassName
      */
      if (scannedClassName.indexOf(classNameInspector) === -1) {
        scannedClassName += classNameInspector[0]; // if new class name is detected, first letter is added to scannedClassName
        objHighScoringStudent[tempoClassName] = {
          name: "",
          score: 0
        }; // creation of new property named after class name in objHighScoringStudent
        // console.log(className);
      }

    }

    // loop to access student info
    for (var j = 0; j < students.length; j++) {

      // init var
      var studentInfoInspector = students[j]; // var to contain student info from students array
      var tempoClass = objHighScoringStudent[studentInfoInspector.class] // var to acesss property named after student's class

      // console.log(studentInfoInspector.score);
      // console.log(tempoClass.score);

      // logic to find highestScore
      if (studentInfoInspector.score > tempoClass.score) {
        tempoClass.name += studentInfoInspector.name;
        tempoClass.score += studentInfoInspector.score
      }


    }


  }
  // console.log(scannedClassName);
  return (objHighScoringStudent);

}

// TEST CASE
console.log(highestScore([{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
