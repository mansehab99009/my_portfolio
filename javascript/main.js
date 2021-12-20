let toggle = document.getElementById("toggle");
let nav = document.getElementById("nav");
let landing = document.getElementById("landing");

toggle.onclick = function () {
  nav.classList.add("open");
};

landing.onclick = function () {
  nav.classList.remove("open");
};
