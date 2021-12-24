// var angka = parseInt(prompt("masukkan angka :"));

// switch (angka) {
//   case 1:
//     alert("Anda memasukkan angka 1");
//     break;

//   case 2:
//     alert("Anda memasukkan angka 3");
//     break;

//   case 3:
//     alert("Anda memasukkan angka 3");
//     break;

//   default:
//     alert("angka yang anda masukkan salah");
//     break;
// }

var item = prompt("masukkan nama makanan / minuman \n (cth : nasi, daging, susu, softdrink, hamburger)");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT");
    break;

  case "softdrink":
  case "hamburger":
    alert("makanan / minuman TIDAK SEHAT");
    break;

  default:
    alert("data yang anda masukkan salah");
    break;
}
