function clearErrors() {
    error = document.getElementsByClassName("formerror");
    for (items of error) {
      items.innerHTML = "";
    }
  }
  function seterror(id, error) {
    // set error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
  }
  
  function validateForm() {
    let returnVal = true;
    clearErrors();
  
    // performs validations and if validation fails, set the value of returnVal to false
    let name = document.forms["myForm"]["fname"].value;
    if (name.length < 4) {
      seterror("name", "*Length of name is too short");
      returnVal = false;
    }
    if (name.length == 0) {
      seterror("name", "*Length of name cannot be empty");
      
    }
    if (!isNaN(name)) {
      seterror("name", "*Please Enter Only Characters");
      returnVal = false;
    }
  
    let email = document.forms["myForm"]["femail"].value;
    if (email.length > 25) {
      seterror("email", "*Length of email is too long");
      returnVal = false;
    }
    if (email.length == 0) {
      seterror("email", "*Length of email cannot be empty");
    }
  
    let password = document.forms["myForm"]["fpass"].value;
    if (password.length < 6) {
      seterror(
        "pass",
        "*Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
      );
      returnVal = false;
    }
  
    let cpassword = document.forms["myForm"]["fcpass"].value;
    if (cpassword != password) {
      seterror("cpass", "*Password and Confirm Password should match!");
      returnVal = false;
    }
  
    return returnVal;
  }