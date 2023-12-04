function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function mynewFunction() {
    var x = document.getElementById("confirm-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }