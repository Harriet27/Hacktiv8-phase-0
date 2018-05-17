function graduates(students) {
  var objPassingStudent = {};

  var scannedClassName = "";

  for (var i = 0; i < students.length; i++) {
    var classNameInspector = students[i].class[0];
    var tempoClassName = students[i].class;
    // console.log(classNameInspector);
    if (scannedClassName.indexOf(classNameInspector) === -1) {
      scannedClassName += classNameInspector[0];
      objPassingStudent[tempoClassName] = [];
    }
  }

  // console.log(scannedClassName);
  // console.log(objPassingStudent);

  for (var j = 0; j < students.length; j++) {
    var studentInfoInspector = students[j];
    var tempoClass = studentInfoInspector.class;
    var objTempoStudentInfo = {
      name: '',
      score: 0
    }

    // console.log(studentInfoInspector.class);
    // console.log(studentInfoInspector.score);

    if (studentInfoInspector.score > 75) {
      objTempoStudentInfo.name += studentInfoInspector.name;
      objTempoStudentInfo.score += studentInfoInspector.score;
      objPassingStudent[tempoClass].push(objTempoStudentInfo);
      // console.log(objTempoStudentInfo);
      // console.log(tempoClass);
    }
  }
  // objPassingStudent.foxes.push("test")
  return (objPassingStudent);
}

console.log(graduates([{
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
