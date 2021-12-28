// var tanya = true;
// while (tanya) {
//   function jumlahVolumDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
//   }

//   function tambah(a, b) {
//     return a + b;
//   }

//   var a = parseInt(prompt("Masukkan nilai pertama :"));
//   var b = parseInt(prompt("Masukkan nilai kedua :"));
//   var hasil = tambah(a, b);

//   alert(hasil);
//   tanya = confirm("ingin memasukkan angka lagi?");
// }

// alert("terimaksih sudah bermain.");

// psudo argument
// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }
// var coba = tambah(2, 4, 6);
// console.log(coba);

// Refactoring
function jumlahVolumDuaKubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolumDuaKubus(10, 9));
