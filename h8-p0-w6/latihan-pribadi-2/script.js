var divEldestParentElement = document.getElementById('eldest-parent');

var divEldestParentContent = divEldestParentElement.innerHTML;

// console.log(divEldestParentContent);

var divEldestParentChild = divEldestParentElement.children;

divEldestParentChild[0].innerHTML = "Diakses Melalui Eldest Parent";

var divAChildElement = document.getElementById("a-child");

var divAChildElementPrevSibling = divAChildElement.previousElementSibling;

divAChildElementPrevSibling.innerHTML = "Diakses Melalui a Child";

var divAChildElementNextSibling = divAChildElement.nextElementSibling;

divAChildElementNextSibling.innerHTML = "Diakses Melalui a Child";

var chainingSelector = divAChildElement.parentNode.parentNode.nextElementSibling;

chainingSelector.innerHTML = "Diakses Melalui a Child"