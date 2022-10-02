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
let email = myInputs[1];
email.addEventListener("input", (e) => {
    let emailText = e.target.value;
    validMail = ValidateEmail(emailText);
});
let allNotEmpty = false;
let emptyArr = [false, false, false];
for (let i = 0; i < 3; i++) {
    let input = myInputs[i];
    input.oninput = (e) => {
        emptyArr[i] = required(input);
        if (emptyArr[0] && emptyArr[1] && emptyArr[2]) {
            allNotEmpty = true;
        } else {
            allNotEmpty = false;
        }
    }
}

let continueButton = document.querySelector(".continue-btn");
let registerButton = document.querySelector(".register-btn");
let icons = document.querySelector(".fb-google");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let select = document.querySelector("select");
let tab1 = document.querySelector(".tab-1");
let tab2 = document.querySelector(".tab-2");
continueButton.onclick = (e) => {
    e.preventDefault();
    if (allNotEmpty && validMail) {
        for (let i = 0; i < 3; i++) {
            myInputs[i].style = "display: none;";
            continueButton.style = "display: none;";
            registerButton.style = "display: block; margin: 50px 0;";
            select.style = "display: block; margin: 50px 0;";
            icons.style = "display: none;";
            p.style = "display: none;";
            h3.style = "display: none;";
            tab1.style = "background-color: #D9D9D9;";
            tab2.style = "background-color: #D83620;";
        }
    }
}
select.onchange = () => {
    let selectedOption = select.options.selectedIndex;
    console.log(selectedOption);
    let friendId = document.querySelector(".friend-id");
    if (selectedOption == 3) {
        friendId.style = "display: block;";
    } else {
        friendId.style = "";
    }
}
