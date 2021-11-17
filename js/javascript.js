window.addEventListener("scroll", function () {
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 30);
});

function toggleMenu() {
	let menuToggle = document.querySelector(".toggle");
	let menu = document.querySelector(".menu");
	menu.classList.toggle("active");
	menuToggle.classList.toggle("active");
}

// Scroll Reveral
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: "2000",
	delay: "400",
	// reset: true;
});

sr.reveal(".span", { delay: 500, duration: 1500, origin: "left" });
sr.reveal(".textBx h2", { delay: 500, duration: 1000, origin: "left" });
sr.reveal(".textBx h3", { delay: 500, duration: 2000, origin: "left" });
sr.reveal(" .btn", { delay: 500, duration: 2500, origin: "left" });

sr.reveal(".contentBox", { delay: 500, origin: "left" });
sr.reveal(".contactInfo h3, .text", { delay: 200, origin: "left" });
// sr.reveal(".textBx", { delay: 100, duration: 500 });
// sr.reveal(".toggle, .toggle.active", { interval: 300, delay: 200, origin: "right" });
sr.reveal(".w50", { interval: 300, delay: 200, origin: "right" });
sr.reveal(".heading", { delay: 50, duration: 1000 });
sr.reveal(".servicesBox, .projectBox", { interval: 200 });
sr.reveal(".icon", { interval: 200, delay: 200, origin: "left" });
sr.reveal(".icon-social", { interval: 250, delay: 400, origin: "bottom", duration: 3000 });
sr.reveal(".formMessage", { interval: 200 });
// sr.reveal(".sticky.logo", { interval: 200 });
/* sr.reveal(".menu li a", { interval: 300, delay: 200, origin: "right" });
sr.reveal(".toggle.sticky ul li a", { interval: 300, delay: 200, origin: "right" }); */
