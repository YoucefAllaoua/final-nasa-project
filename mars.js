let rangValueContainer1 = document.querySelector(".rangevalue1");
let sun = document.querySelector(".sun");

let rangeElement1 = document.querySelector(".range1");

rangeElement1.addEventListener("input", function () {
    rangValueContainer1.classList.remove("correct");
	rangValueContainer1.innerHTML = `${+this.value} `;
	sun.style.marginRight = `${+this.value}px`;
	if (+rangValueContainer1.innerHTML < 230 && +rangValueContainer1.innerHTML > 220) {
		rangValueContainer1.classList.add("correct");
	}
});

let rangValueContainer2 = document.querySelector(".rangevalue2");
let moon = document.querySelector(".moon");

let rangeElement2 = document.querySelector(".range2");

rangeElement2.addEventListener("input", function () {
    rangValueContainer2.classList.remove("correct");
	rangValueContainer2.innerHTML = `${+this.value} `;
	moon.style.marginRight = `${+this.value/20}px`;
	if (+rangValueContainer2.innerHTML < 9600 && +rangValueContainer2.innerHTML > 9400) {
		rangValueContainer2.classList.add("correct");
	}
});