// Competencies: Mathematical Operation and Conditionals
/*
===============
Restaurant Visitation
===============
Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money. Ia masuk ke sebuah restaurant untuk makan, namun restaurant memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
Step 2. Jika age dari si pengunjung dibawah 55 tahun, maka ia dapat memesan steak. Jika pengunjung memiliki usia 55 tahun ke atas ia boleh memesan steak dan mendapatkan diskon sebesar 30%
Step 3. Steak memiliki harga 300000

Jika money / uang yang pengunjung miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang". Jika uang cukup, tampilkan "Anda bisa pesan steak. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga steak dan diskon jika ada.

Ketentuan
=========
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok, namun dilarang mengganti nama variable.
*/

// SKELETON CODE (Code Sample)

// silakan berikan nilai bebas




// Buat code disini

var steakCost = 300000;
var change = null;
var name = "n"; // silakan berikan nilai bebas
var age = 60; // silakan berikan nilai bebas
var money = 300000;

  if (name === "") {
    console.log("Anda tidak boleh masuk!");
  } else if (name && age && money) {
    if (age > 55) {
      steakCost = steakCost * 0.7;
    }
    if (money >= steakCost) {
      change = money - steakCost;
      console.log("Anda bisa pesan steak. Sisa uang anda: " + change);
    } else if (money < steakCost) {
      console.log("Uang tidak cukup. Anda harus pulang");
    }
  }
  //  else if (name) {
  //   if (age > 55) {
  //
  // }
  // if () {
  //
  //   return
  // } else if (){
  //   return "Uang tidak cukup. Anda harus pulang";
  // }
