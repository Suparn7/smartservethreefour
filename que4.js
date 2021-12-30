

function validate(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    
    if(validateEmail(username) == null){
        alert("InValid Email");
    }else if(validatePassword(password) == false){
        alert("Password should not have any special character other than @ and must contain an uppercase letter and a number");
    }else{
        alert("Login Success")
        window.location.href = "dashboard.html"
    }

}

const validateEmail = (username) => {
    return String(username)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


function validatePassword(p) {
    
    var errors = []
  
    if (p.search(/[a-z]/) < 0) {
      errors.push("Your password must contain at least one lowercase letter.")
    }
    if (p.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one uppercase letter.")
    }
    if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.")
    }
    if(p.search(/[\@]/) < 0) {
      errors.push("Your password must contain at least one special character.")
    }
      
    if (errors.length > 0) {
      //document.getElementById("errors").innerHTML = errors.join("<br>")
      return false;
    }
    return true;
  }

  function resetPass(){
    window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRFKnVwsClGjfXXxnZcnQMFbpXVQMpLxtmFCFscLHQPwvMmvGJwMJgpqrPZDsfjFhMSGd"
  }

