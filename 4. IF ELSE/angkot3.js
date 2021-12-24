var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
