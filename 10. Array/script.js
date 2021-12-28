//  Manipulasi Array

// // 1. Menambah isis Array
// var arr = ["Putra", 1, true];
// // atau
// var array = [];
// array[0] = "Putra Perdana";
// array[1] = "Nita";
// array[2] = "Hiya";

// console.log(array);

// 2. Menghapus Array
// var arr = ["Putra PErdana", "Nita", "Hiya"];
// arr[1] = undefined;
// console.log(arr);

// 3, Menampilkan isi Array
// var arr = ["Putra Perdana", "Nita", "Hiya", "Umma", "Aba"];
// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// Method pada Array
// 1. Join
// var arr = ["Putra Perdana", "Nita", "Hiya", "Umma", "Aba"];
// console.log(arr.join(", "));

// 2. Push dan Pop
// arr.push("Dodi", "Eko", "Dian");
// pop menghapus elemen terakhir array
// arr.pop();
// console.log(arr.join(", "));

// 3. Unshif dan Shift (untuk elemen pertama pada array)
// arr.unshift("Ramadhan");
// // arr.shift();
// console.log(arr.join(", "));

// 4. Splice (IndexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2...)
// arr.splice(2, 0, "Andini");
// console.log(arr.join(", "));

// 5. Splice (indexAwal - indexAkhir)
// var arr = ["Putra Perdana", "Nita", "Hiya", "Umma", "Aba"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(", "));

// 6. Foreach
// var angka = [1, 3, 2, 0, 7, 8, 5, 4, 6, 9];
// angka.forEach(function (e) {
//   console.log(e);
// });

// 7. Map
// var angka = [1, 3, 2, 0, 7, 8, 5, 4, 6, 9];
// var angka2 = angka.for(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. Sort
// var angka = [1, 3, 2, 0, 7, 8, 5, 4, 6, 9, 14, 12, 11, 10];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. Filter (mengmbalikan banyak nilai) & Find (menemukan 1 nilai pertama)
var angka = [1, 3, 2, 0, 7, 8, 5, 4, 6, 9, 14, 12, 11, 10];
var angka2 = angka.filter(function (e) {
  return e < 5;
});
var angka2 = angka.find(function (e) {
  return e < 5;
});

console.log(angka2.join(" - "));
