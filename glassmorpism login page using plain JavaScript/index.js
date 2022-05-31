document.body.style.backgroundColor = "#000";
let div = document.getElementById("main");
div.style.position = "absolute";
div.style.top = "0";
div.style.bottom = "0";
div.style.fontWeight = "bold";
div.style.left = "0";
div.style.right = "0";
div.style.width = "300px";
div.style.margin = "auto";
div.style.height = "300px";
div.style.paddingTop = "20px";
div.style.paddingBottom = "50px";
div.style.textAlign = "center";
div.style.background = "rgba( 255, 255, 255, 0.28)";
div.style.color = "#1c8ea4";
 div.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
 div.style.backdropFilter = "blur(4px)";
 div.style.webkitBackdropFilter = "blur(4px)";
 div.style.borderRadius = "10px";
 div.style.border = "1px solid rgba( 255, 255, 255, 0.18 )";
 div.firstElementChild.style.color = "#1c8ea4";
div.lastElementChild.style.backgroundColor = "#015967";
div.lastElementChild.style.color = "#fff";
div.lastElementChild.style.padding = "6px";
div.lastElementChild.style.marginTop = "20px";
div.lastElementChild.style.borderRadius = "10px";
div.lastElementChild.style.border = "2px solid green";
div.lastElementChild.style.width = "150px";
var pElement = document.getElementById("myP");
pElement.style.marginTop = "50px";
pElement.style.marginBottom = "50px";

// get input value
function getValues() {
  var firstName = document.getElementsByName("firstName")[0].value;
  var lastName = document.getElementsByName("lastName")[0].value;
  var fullName = "Your full name is " + firstName + " " + lastName;

  if(confirm("Do you want to continue?")) {
    alert(fullName);
  }
  else{
    alert("You pressed cancel");
  }
}
