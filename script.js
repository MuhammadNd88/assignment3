if (Modernizr.geolocation) {
  var pageBody = document.getElementsByTagName("div")[0];
  var newImg = document.createElement("img");
  newImg.src = "http://placekitten.com/g/200/300";
  newImg.style.border = "1px solid black";
  pageBody.appendChild(newImg);
} else {
  var pageBody = document.getElementsByTagName("div")[0];
  var newImg = document.createElement("img");
  newImg.src = "http://www.placepuppy.net/400/250";
  newImg.style.border = "1px solid black";
  pageBody.appendChild(newImg);
}
var updatingHeader = document.getElementById("as4");
updatingHeader.style.marginLeft = "20px";
updatingHeader.style.color = "orange";
updatingHeader.style.fontFamily = "Arial, Helvetica, sans-serif";

var colorLink = document.getElementById('link');
colorLink.style.color = "yellow";
