/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  var arrOfObjStudentReport = [];

  var classCodeContainer = "";
  for (var i = 0; i < grades1.length; i++) {
    var classCodeInspector = grades1[i].classCode;
    // console.log(classCodeInspector);
    if (classCodeContainer.indexOf(classCodeInspector) === -1) {
      arrOfObjStudentReport.push({
        classCode: grades1[i].classCode,
        passed: [],
        failed: []
      });
      classCodeContainer += classCodeInspector
    }
    // console.log(arrOfObjStudentReport);

  }
  for (var j = 0; j < grades1.length; j++) {
    var scoreInspector = grades1[j].score;
    var studentClassCode = grades1[j].classCode;
    var studentName = grades1[j].name;
    var arrOfObjStudentReportIndex = 0;

    for (var k = 0; k < arrOfObjStudentReport.length; k++) {
      var arrOfObjStudentReportIndexInspector = arrOfObjStudentReport[k].classCode;
      if (arrOfObjStudentReportIndexInspector === studentClassCode) {
        arrOfObjStudentReportIndex = k;
      }
    }


    console.log(scoreInspector, studentClassCode, studentName, arrOfObjStudentReportIndex);
    if (scoreInspector >= 70) {
      arrOfObjStudentReport[arrOfObjStudentReportIndex]["passed"].push(studentName)
    } else {
      arrOfObjStudentReport[arrOfObjStudentReportIndex]["failed"].push(studentName)
    }
  }

  console.log(arrOfObjStudentReport);
}

var grades1 = [{
    name: 'John',
    score: 80,
    classCode: 'A'
  },
  {
    name: 'Mike',
    score: 60,
    classCode: 'B'
  },
  {
    name: 'Budi',
    score: 70,
    classCode: 'C'
  },
  {
    name: 'Siti',
    score: 50,
    classCode: 'A'
  },
  {
    name: 'Aaron',
    score: 10,
    classCode: 'A'
  },
  {
    name: 'Arthur',
    score: 10,
    classCode: 'C'
  },
  {
    name: 'Osass',
    score: 10,
    classCode: 'B'
  },
  {
    name: 'Yolo',
    score: 90,
    classCode: 'C'
  },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/


// 2nd SOlUTION

/*

function getReport(studentGrades) {
  var arrOfObjStudentReport = [];

  var classCodeContainer = "";
  for (var i = 0; i < grades1.length; i++) {
    var classCodeInspector = grades1[i].classCode;
    // console.log(classCodeInspector);
    console.log(classCodeContainer.indexOf(classCodeInspector));
    if (classCodeContainer.indexOf(classCodeInspector) === -1) {
      console.log("MASUK!");
      var tempoClass = {
        classCode: grades1[i].classCode,
        passed: [],
        failed: []
      };
      classCodeContainer += classCodeInspector;

      for (var j = 0; j < grades1.length; j++) {
        var scoreInspector = grades1[j].score;
        var studentClassCode = grades1[j].classCode;
        var studentName = grades1[j].name;

        if (studentClassCode === classCodeInspector) {
          // console.log(scoreInspector, studentClassCode, studentName, arrOfObjStudentReportIndex);
          if (scoreInspector >= 70) {
            tempoClass["passed"].push(studentName)
          } else {
            tempoClass["failed"].push(studentName)
          }
        }
      }
      console.log(tempoClass);
      console.log(classCodeContainer);
      arrOfObjStudentReport.push(tempoClass)
      console.log("---<>---");
    }
    // console.log(arrOfObjStudentReport);
  }
  console.log("<<<>>>");
  return (arrOfObjStudentReport);
}

var grades1 = [{
    name: 'John',
    score: 80,
    classCode: 'A'
  },
  {
    name: 'Mike',
    score: 60,
    classCode: 'B'
  },
  {
    name: 'Budi',
    score: 70,
    classCode: 'B'
  },
  {
    name: 'Siti',
    score: 50,
    classCode: 'A'
  },
  {
    name: 'Aaron',
    score: 10,
    classCode: 'A'
  },
  {
    name: 'Arthur',
    score: 10,
    classCode: 'B'
  },
  {
    name: 'Osass',
    score: 10,
    classCode: 'B'
  },
  {
    name: 'Yolo',
    score: 90,
    classCode: 'B'
  },
];

console.log(getReport(grades1));
*/