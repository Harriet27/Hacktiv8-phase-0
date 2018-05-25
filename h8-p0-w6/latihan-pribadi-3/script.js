//set a variable to refer to a specific ID
var submit = document.getElementById("submit");
// var usernameContent = usernameElement.innerHTML;
//initiate this function when the user clicks the ID
submit.onclick = function() {
  var usernameElement = document.getElementsByName("username")[0].value;
  var passwordElement = document.getElementsByName("psw")[0].value;
  var passwordConfirmElement = document.getElementsByName("psw-repeat")[0].value;
  var emailElement = document.getElementsByName("email")[0].value;
  var emailConfirmElement = document.getElementsByName("email-repeat")[0].value;

  if (usernameElement === "" || passwordElement === "" || passwordConfirmElement === "" ||
    emailElement === "" || emailConfirmElement === "") {
    alert("Please Fill All Required Fields");
    return false
  } else if (passwordElement !== passwordConfirmElement) {
    alert("Please Re-type your Password")
    return false
  } else if (emailElement !== emailConfirmElement) {
    alert("Please Re-type your Email");
    return false
  } else {
    alert("THANK YOU")
    return true;
  }
};