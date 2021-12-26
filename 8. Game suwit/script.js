// meanngkap pilihan player
var p = prompt("silahkan pilih : gajah, semut, orang");

// menangkap pilihan komputer
var com = Math.random();

// generate bilangan random
if (com < 0.34) {
  com = "gajah";
} else if (com >= 0.34 && com <= 0.67) {
  com = "orang";
} else {
  com = "semut";
}
// menentukan rules
var hasil = "";
if (p == com) {
  hasil = "SERI";
} else if (p == "gajah") {
  //   if (com == "orang") {
  //     hasil = "MENANG";
  //   } else {
  //     hasil = "KALAH";
  //   }
  hasil = com == "orang" ? "MENANG" : "KALAH";
} else if (p == "orang") {
  hasil = com == "semut" ? "MENANG" : "KALAH";
} else if (p == "semut") {
  hasil = com == "gajah" ? "MENANG" : "KALAH";
} else {
  hasil = "memasukkan pilihan yang salah";
}
// tampilkan hasilnya
alert("Kamu memilih : " + p + "\nkomputer memilih : " + com + "\nMaka hasilnya adalah kamu " + hasil);
