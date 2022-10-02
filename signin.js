function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    return (false);
}
function required(inputtx) {
    if (inputtx.value.length == 0) {
        return false;
    }
    return true;
}

let myInputs = document.querySelectorAll("input");
let validMail = false;
let email = myInputs[0];
email.addEventListener("input",(e) => {
    let emailText = e.target.value;
    validMail = ValidateEmail(emailText);
});

let allNotEmpty = false;
let emptyArr = [false, false];
for (let i = 0; i < 2; i++) {
    let input = myInputs[i];
    input.oninput = (e) => {
        emptyArr[i]=required(input);
        if(emptyArr[0] && emptyArr[1]) {
            allNotEmpty=true;
        } else {
            allNotEmpty=false;
        }
    }
}
let registerButton = document.querySelector(".login-btn");
registerButton.onclick = (e) => {
    e.preventDefault();
    if(validMail && allNotEmpty) {
        
    }
}