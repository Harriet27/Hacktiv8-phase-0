
function dataHandling(input) {
  var s = "";
  /* init var to contain string
  excluded from for loop to avoid reset of value
  scope global
  */

  for (var i = 0; i <= array.length - 1; i++) {
    var iD =  "Nomor ID: " + array[i][0];

    var nama = "Nama Lengkap: " + array[i][1];

    var tempatTanggalLahir = "TTL: " + array[i][2] + " " + array[i][3];

    var hobi = "Hobi: " + array[i][4];

    s += iD + "\n" + nama + "\n" + tempatTanggalLahir + "\n" + hobi + "\n\n";

    /* i <= array.length - 1 to sync with actual array position which starts from 0
    */

  }

  return s;

}

var array = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]

  console.log(dataHandling(array));
