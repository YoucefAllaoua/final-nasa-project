// lands section

let lands_container = document.querySelector("section.market");
let map = document.querySelector(".map-section .map img");
let sold_lands = document.querySelectorAll(".market .lands .land");
console.log(sold_lands);
map.addEventListener("click", function () {
	window.scrollBy(0, 950);
	sold_lands.forEach((ele) => {
		ele.classList.add(ele.getAttribute("data"));
		let notice = ele.querySelector(".state");
		notice.classList.add("shown");
		if (ele.getAttribute("data") === "notavailab") {
			ele.style.opacity = "0.6";
		}
	});
});
