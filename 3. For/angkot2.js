var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 3;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beoperasi dengan baik.");
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
}
