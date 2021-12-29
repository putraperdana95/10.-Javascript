// membuat object
// var mhs = {
//   nama: "Putra Perdana",
//   Umur: 27,
//   ips: [3.0, 2.9, 2.8, 3.5, 3.8, 3.7],
//   alamat: {
//     jalan: "Jl. Raja Haji",
//     rtrw: "RT 01, RW, 05",
//     kecamatan: "Moro",
//     kabupaten: "Karimun",
//   },
// };

// Object Literal
var mhs1 = {
  nama: "Putra Perdana",
  nim: 20120140027,
  email: "putra.perdana7@gmail.com",
  jurusan: "Teknik Informatika",
};

var mhs2 = {
  nama: "Rio Pratama",
  nim: 20120140017,
  email: "rio7@gmail.com",
  jurusan: "Teknik Informatika",
};

// Funtion Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Nita Putri Ana", 20120140028, "nitaputri.ana@gmail.com", "Teknik Sipil");

var mhs4 = buatObjectMahasiswa("Hiya", 20120140038, "hiya@gmail.com", "Teknik Mesin");

// Constructor <- Bakalan Digunakan kedepannya
function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa("Jack", 20120140123, "jack@gmail.com", "Teknik Perminyakan");
