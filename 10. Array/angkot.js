var penumpang = ["Putra", undefined, "nita", "hiya"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika Angkot Kosong
  if (penumpang.length == 0) {
    // Tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahan
        console.log(namaPenumpang + " Sudah ada didalam angkot");
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " Tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
};
