function clearErrors() {
    errors = document.getElementsByClassName('errorform');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('errorform')[0].innerHTML = error;

}

function Noalph(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}
function formvalidation() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['Form']["name"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['Form']['femail'].value;
    if (email.length > 35) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['Form']["phone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }else if((phone=="1234567890") ||( phone=="0987654321")){
        seterror("phone", "*Invalid Phone number");
        returnval = false;
    }

    var password = document.forms['Form']["password"].value;
    if ((password == "password") || (password == name)) {
        seterror('pass', "Password should not be password or name");
        returnval = false;
    }
    else if (password.length < 8) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['Form']["cpassword"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}
