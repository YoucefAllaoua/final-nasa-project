let arrow = document.querySelector(".profile .icon");
let options = document.querySelector(".options");
let isClicked = false;
arrow.onclick = () => {
    if(!isClicked) {
        arrow.style = "transform: rotate(180deg);";
        options.style = "display: block;";
        isClicked = true;
    } else {
        arrow.style = "";
        options.style = "";
        isClicked=false;
    }
    
}