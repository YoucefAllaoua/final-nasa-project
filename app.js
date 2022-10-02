// the range value
let rangValueContainer = document.querySelector(".rangevalue");
let sun = document.querySelector(".sun");

let rangeElement = document.querySelector(".range");

rangeElement.addEventListener("input", function () {
    rangValueContainer.classList.remove("right");
	rangValueContainer.innerHTML = `${+this.value} `;
	sun.style.marginRight = `${+this.value}px`;
	if (+rangValueContainer.innerHTML < 230 && +rangValueContainer.innerHTML > 220) {
		rangValueContainer.classList.add("right");
	}
});
