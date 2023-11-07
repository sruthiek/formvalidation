function formvalidate() {
    var formvalue = document.getElementById('jsform');
    var user = formvalue.elements['username'].value;
    var email = formvalue.elements['emailid'].value;
    var password = formvalue.elements['pswd1'].value;
    var confirmpass = formvalue.elements['pswd2'].value;
    var phnum = formvalue.elements['phone'].value;

  

    // validate username
    if (user === null || user === '') {
        alert("username cant't be empty!!");
    }
    // validate email
    else if (email === null || email === '') {
        alert("email cant't be empty!!");
    }
    else if (password.length < 6) {
        alert('password must be atleast 5 letter')
    }
    else if (password != confirmpass) {
        alert('incorrect password')
    }
    else if (phnum.length < 10 || phnum === null || phnum === '') {
        alert('ph num must be 10 digits')
    }

}