function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  // init variables
  var parentArrayLength = arrPenumpang.length;
  var arrPassengerReport = [];

  // logic to detect contains of arrPenumpang
  if (parentArrayLength === 0) {
    return "[]";
  } else {

    // loop to access passenger info from arrPenumpang
    for (var i = 0; i < parentArrayLength; i++) {

      // init obj variable to contain passenger info
      var objTemporaryPassengerReport = {
        penumpang: "",
        naikDari: "",
        tujuan: "",
        bayar: 1
      };

      // assign respective passenger info into properties of obj
      objTemporaryPassengerReport.penumpang += arrPenumpang[i][0];
      objTemporaryPassengerReport.naikDari += arrPenumpang[i][1];
      objTemporaryPassengerReport.tujuan += arrPenumpang[i][2];

      // init var to find numberOfRoutesTravelled
      var positionNaikDari = 0;
      var positionTujuan = 0;

      // loop to obtain position of depart route and arrival route
      for (var j = 0; j < rute.length; j++) {
        var inspector = rute[j];
        // console.log(inspector);
        if (inspector === objTemporaryPassengerReport.naikDari) {
          positionNaikDari += j;
        } else if (inspector === objTemporaryPassengerReport.tujuan) {
          positionTujuan += j;
        }
      }

      // console.log(positionNaikDari);
      // console.log(positionTujuan);

      // var to contain numberOfRoutesTravelled
      var numberOfRoutesTravelled = positionTujuan - positionNaikDari;
      // console.log(numberOfRoutesTravelled);

      // push payment to object
      objTemporaryPassengerReport.bayar *= numberOfRoutesTravelled * 2000;
      // console.log(objTemporaryPassengerReport);

      // push object arrPassengerReport
      arrPassengerReport.push(objTemporaryPassengerReport)
      // console.log(objTemporaryPassengerReport);

    }

  }
  return arrPassengerReport;
}
//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
