function SubmitButton(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
        // to clear the  values
    document.getElementById('name').innerHTML="";
    document.getElementById('email').innerHTML="";
    document.getElementById('password').innerHTML="";

    let isValid=true;
    if (name ==""){
        document.getElementById(nameError.innerHTML="name field is required!!");
        isValid=false;
    }
    if(email ==""){
        document.getElementById(emailError.innerHTML="Email is required!!");
         isValid=false;
    }
    if(password ==""){
        document.getElementById(passwordError.innerHTML="Passwpord is required!!");
        isValid=false;
    }

}