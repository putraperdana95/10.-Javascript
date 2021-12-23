// var nama = prompt("Masukkan nama:");
// alert(nama);

// var tes = confirm("yakin ingin melanjutkan ke halaman in?");
// if (tes === true) {
//   alert("user menekan tombol yakin");
// } else {
//   alert("user tidak bekerja sama");
// }

alert("Selamat datang..");
var lagi = true;

while (lagi === true) {
  var nama = prompt("masukkan nama");
  alert("halo " + nama);

  lagi = confirm("ingin coba lagi?");
}
alert("Terima Kasih Dong");
