var mainDiv = document.getElementById("main");

//create contentDiv
var contentDiv = document.createElement("div");

var contentDivAttrId = document.createAttribute('id');

contentDivAttrId.value = "content";

contentDiv.setAttributeNode(contentDivAttrId);

mainDiv.appendChild(contentDiv);

//create contentPostDiv
var contentPostDiv = document.createElement("div");

var contentPostDivAttrClass = document.createAttribute('class', "content-post");

contentDiv.appendChild(contentPostDiv);

//create h1
var h1 = document.createElement('h1');

var h1Text = document.createTextNode("Judul Post");

h1.appendChild(h1Text);

contentPostDiv.appendChild(h1)

//create span
var span = document.createElement("span");

var spanText = document.createTextNode("Published on 13 May 2016");

span.appendChild(spanText);

contentPostDiv.appendChild(span);

//create p
var p = document.createElement("p");

var pText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");

p.appendChild(pText);

contentPostDiv.appendChild(p);