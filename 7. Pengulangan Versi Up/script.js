var s = "";
// for (var i = 0; i < 7; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);
for (var i = 7; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
