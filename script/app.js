// updating date at footer for copyrights
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textCont;
linkent = currentYear;

//mobile menu
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
	header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (linkEl) {
	linkEl.addEventListener("click", function (e) {
		e.preventDefault();
		const href = linkEl.getAttribute("href");
		console.log(href);
		//Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			//scrool to othe links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({behaviour: "smooth"})
		}
		//close mobile menu 
		if(linkEl.classList.contains('main-nav-link'))
		header.classList.toggle("nav-open")

	});
});



function checkFlexGap() {
	let flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	const isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);
}

checkFlexGap();
