window.addEventListener("scroll", () => {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 100) {
		navbar.classList.add("fixed-top");
	} else {
		navbar.classList.remove("fixed-top");
	}
});
const menu = document.getElementById("menu");
const classmenu = document.getElementsByClassName("menu");

menu.addEventListener("click", () => {
	Array.from(classmenu).forEach((element) => {
		if (element.classList.contains("d-none")) {
			element.classList.remove("d-none");
		} else {
			element.classList.add("d-none");
		}
	});
});
