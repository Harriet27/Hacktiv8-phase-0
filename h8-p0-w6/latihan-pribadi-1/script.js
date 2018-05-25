var h1Element = document.getElementById('fill-me');

var h1ElementContent = h1Element.innerHTML;

// console.log("lama -> " + h1ElementContent);

h1Element.innerHTML = 'HALO!';

var newh1ElementContent = h1Element.innerHTML;

// console.log("baru -> " + newh1ElementContent);

var changeAllOfMeElement = document.getElementsByClassName("change-all-of-me")

// console.log(changeAllOfMeElement.length);

for (var i = 0; i < changeAllOfMeElement.length; i++) {
  var currentChangeAllOfMe = changeAllOfMeElement[i];
  currentChangeAllOfMe.innerHTML = "HALO JUGA!"
}

var h2Element = document.getElementsByTagName("h2");

h2Element[0].innerHTML = "Apa Kabar!"