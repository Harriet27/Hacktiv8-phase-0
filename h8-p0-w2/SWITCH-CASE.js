
// Initialize variables
var tanggal = "1"; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = "13"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = "1978"; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanConverted = null;

// Switch Logic
switch (bulan) {
  case "1":
  	bulanConverted = "Januari";
 		break;
  case "2":
    bulanConverted = "Februari";
    break;
  case "3":
    bulanConverted = "Maret";
   	break;
  case "4":
    bulanConverted = "April";
    break;
  case "5":
    bulanConverted = "Mei";
   	break;
  case "6":
    bulanConverted = "Juni";
    break;
  case "7":
    bulanConverted = "Juli";
    break;
  case "8":
    bulanConverted = "Agustus";
    break;
  case "9":
    bulanConverted = "September";
    break;
  case "10":
    bulanConverted = "Oktober";
    break;
  case "11":
    bulanConverted = "November";
    break;
  case "12":
    bulanConverted = "Desember";
    break;
}

if (bulanConverted) {
console.log(tanggal + " " + bulanConverted + " " + tahun);
} else {console.log("Invalid!")};
