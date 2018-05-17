function graduates(students) {

  // init var
  var objPassingStudent = {}; // obj to contain students with passing grades
  var scannedClassName = ""; // var to contain first letter of class name

  // loop to access class names of students
  for (var i = 0; i < students.length; i++) {

    // init var
    var classNameInspector = students[i].class[0]; // var to contain first letter of student's class name
    var tempoClassName = students[i].class;     // var to contain class name of students
    // console.log(classNameInspector);

    /* logic to detect if class name is already included in objHighScoringStudent,
    comparison using classNameInspector compared with scannedClassName
    */
    if (scannedClassName.indexOf(classNameInspector) === -1) {
      scannedClassName += classNameInspector[0]; // if new class name is detected, first letter is added to scannedClassName
      objPassingStudent[tempoClassName] = []; // create new property at objPassingStudent named after class name
    }
  }

  // console.log(scannedClassName);
  // console.log(objPassingStudent);

  // loop to access student information from students array
  for (var j = 0; j < students.length; j++) {

    var studentInfoInspector = students[j]; // var to contain student info base from index of students array
    var tempoClass = studentInfoInspector.class; // var to contain name of studennts class
    var objTempoStudentInfo = {
      name: '',
      score: 0
    } // obj to contain name and score property of students

    // console.log(studentInfoInspector.class);
    // console.log(studentInfoInspector.score);

    // logic to detect if students score is above 75 or not
    if (studentInfoInspector.score > 75) {
      objTempoStudentInfo.name += studentInfoInspector.name; // assigning objTempoStudentInfo name property
      objTempoStudentInfo.score += studentInfoInspector.score; // assigning objTempoStudentInfo score property
      objPassingStudent[tempoClass].push(objTempoStudentInfo); // push objTempoStudentInfo to objPassingStudent property named after studnet's class
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
