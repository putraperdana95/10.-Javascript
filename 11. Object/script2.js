// konsep this
// console.log(this);

// membuat object
// cara 1 -> function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();

// cara 2 -> object literal
// var obj = {};
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();

// cara 3 -> constructor
function Halo() {
  console.log(this);
  console.log("halo");
}

new Halo();
