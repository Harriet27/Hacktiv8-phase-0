var angka = 8;
var prime;

for (var i = 2; i < angka; i++) {
  var divider = i;
  var inspector = angka % divider;
  console.log(divider);
  console.log(inspector);
  if (inspector === 0) {
    prime = false;
  } else {
    prime = true;
  }
  console.log(prime);
}
