function highestScore(students) {
  var objHighScoringStudent = {};

  if (students.length === 0) {
    return objHighScoringStudent;
  } else {

    var scannedClassName = "";

    for (var i = 0; i < students.length; i++) {
      var classNameInspector = students[i].class[0];
      var tempoClassName = students[i].class;
      // console.log(classNameInspector);
      if (scannedClassName.indexOf(classNameInspector) === -1) {
        scannedClassName += classNameInspector[0];
        objHighScoringStudent[tempoClassName] = {
          name: "",
          score: 0
        };
        // console.log(className);
      }

    }

    for (var j = 0; j < students.length; j++) {
      var studentInfoInspector = students[j];
      var tempoClass = objHighScoringStudent[studentInfoInspector.class]

      // console.log(studentInfoInspector.score);
      // console.log(tempoClass.score);

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
