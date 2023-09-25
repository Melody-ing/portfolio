// **************//
// ** menu **//
// **************//
const menu = document.querySelector(".menu-btn");
const close = document.querySelector(".close-btn");
const header = document.querySelector(".header");
menu.addEventListener("click", function () {
  header.classList.add("open");
});

close.addEventListener("click", function () {
  header.classList.remove("open");
});

// **************//
// ** footer **//
// **************//
let footer = document.querySelector("footer");
let year = new Date().getFullYear();
footer.innerHTML = `Copyright © ${year} All rights reserved.`;
