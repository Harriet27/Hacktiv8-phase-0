function balikString(string) {
  var s = "";
  for (var i = string.length - 1; i >= 0; i--) {
    s += string[i]
  }
  return s;
}

console.log(balikString("Hello World!"));
