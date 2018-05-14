// var testObj = {
//   name: "yusuf",
//   address: "PB 7 no.14"
// }
//
// testObj.hobby = ["Gaming", "sleeping", "eating"];
//
// console.log(testObj);
//
// var tester = "hobby";
//
// console.log(testObj[tester][1]);

var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);
// expected output: "123"
