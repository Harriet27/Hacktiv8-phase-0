/*
=== DILARANG MENGGUNAKAN : ===
1. Built in function apapun
2. OOP

=== Wajib Menggunakan : ===
1. FOR atau
2. While
Selain dari ini, tidak boleh!

=== NOTE: ===
Sebelum menuliskan sintax, silahkan tuliskan Algoritma dan Pseudocode
terlebih dahulu. Jika tidak menuliskan keduanya, dianggap tidak
mengerjakan sendiri!

Expected output silahkan dilihat dibawah!
*/
function lombaKsm(siswa) {
  var objStudentsSummary = {
    ipa: {
      nama: [],
      totalSiswa: 0,
      totalMedali: {
        emas: 0,
        perak: 0,
        perunggu: 0
      }
    },
    ips: {
      nama: [],
      totalSiswa: 0,
      totalMedali: {
        emas: 0,
        perak: 0,
        perunggu: 0
      }
    }
  }

  console.log(objStudentsSummary);

  for (var i = 0; i < siswa.length; i++) {
    var objTempoStudent = {
      nama: "",
      Juara: 0,
      Lomba: ""
    }

    var streamName = siswa[i][0];
    var studentName = siswa[i][1];
    var medalsAmount = siswa[i][2];
    var subject = siswa[i][3];
    var medalType = siswa[i][4];

    console.log(
      streamName,
      studentName,
      medalsAmount,
      subject,
      medalType,
    );

    objTempoStudent.nama = studentName;
    objTempoStudent.Juara = medalsAmount;
    objTempoStudent.Lomba = subject;

    // if (streamName === "ipa") {
    objStudentsSummary[streamName].nama.push(objTempoStudent);
    // } else if (streamName === "ips") {
    //   objStudentsSummary.ips.nama.push(objTempoStudent);
    // }

    objStudentsSummary[streamName].totalMedali[medalType]++;
    //   if (medalType === "emas") {
    //     objStudentsSummary.ipa.totalMedali[medalType]++;
    //   } else if (medalType === "perak") {
    //
    //   }
  }

  // console.log(objStudentsSummary);

  objStudentsSummary.ipa.totalSiswa = objStudentsSummary.ipa.nama.length;
  objStudentsSummary.ips.totalSiswa = objStudentsSummary.ips.nama.length;

  console.log(objStudentsSummary);

}
console.log(lombaKsm([
  ['ipa', 'ari supriatna', 1, 'matematika', 'emas'],
  ['ips', 'sergei', 1, 'ekonomi', 'emas'],
  ['ipa', 'steve jobs', 2, 'kimia', 'perak'],
  ['ipa', 'albert einstein', 1, 'fisika', 'emas'],
  ['ips', 'dragunov', 2, 'geografi', 'perak'],
  ['ips', 'alex', 3, 'sosiologi', 'perunggu'],
  ['ipa', 'mark', 3, 'biologi', 'perunggu']
]))
/*
=== expected output ===
{ ipa:
   { nama:
      [
        'ari supriatna': 'Juara: 1, Lomba: matematika',
        'steve jobs': 'Juara: 2, Lomba: kimia',
        'albert einstein': 'Juara: 1, Lomba: fisika',
        'mark': 'Juara: 3, Lomba: biologi'
      ],
    'total siswa': 4,
    'total medali': ['emas': 2, 'perak': 1, 'perunggu': 1]
    },
  ips:
   { nama:
      [
        sergei: 'Juara: 1, Lomba: ekonomi',
        dragunov: 'Juara: 2, Lomba: geografi',
        alex: 'Juara: 3, Lomba: sosiologi'
      ],
    'total siswa': 3,
    'total medali': ['emas': 1, 'perak': 1, 'perunggu': 1]
    }
}
*/