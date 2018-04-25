// Initialize variables
var nama = "";
var peran = "";

// Logic for nama
if (nama === "") {
  console.log("Nama harus diisi!");
}

// Logic for peran
if (peran && nama) {
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  if (peran === "Ksatria") {
  console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
  } else if (peran === "Tabib") {
 console.log("Halo Tabib " + nama + ", kamu akan membawa betadine ke mana2!");
  } else if (peran === "Penyihir") {
 console.log("Halo Penyihir " + nama + ", kamu akan bisa menyantet orang lain!");
  }
} else if (peran === "" && nama) {
  console.log("Halo " + nama + ", pilih peranmu untuk memulai game!");
}
