// 1st Task
var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

array.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");

array.splice(4, 2, "Pria", "SMA Internasional Metro");

// console.log(array);

// 2nd Task

var tanggalLahir = array[3];
var splitTanggalLahir = tanggalLahir.split("/");
var bulan = splitTanggalLahir[1]; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulanConverted = null;

// Switch Logic
switch (bulan) {
  case "01":
  	bulanConverted = "Januari";
 		break;
  case "02":
    bulanConverted = "Februari";
    break;
  case "03":
    bulanConverted = "Maret";
   	break;
  case "04":
    bulanConverted = "April";
    break;
  case "05":
    bulanConverted = "Mei";
   	break;
  case "06":
    bulanConverted = "Juni";
    break;
  case "07":
    bulanConverted = "Juli";
    break;
  case "08":
    bulanConverted = "Agustus";
    break;
  case "09":
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

// console.log(bulanConverted);

// 3rd Task

var intTanggalLahir = Number(splitTanggalLahir);

// splitTanggalLahir.sort(function(value1, value2) { return value1 < value2 });
// console.log(splitTanggalLahir);
