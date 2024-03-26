const navButton = document.querySelector(".nav-click");
const navBar = document.querySelector("nav");

navButton.addEventListener("click", (e) => {
  if (navBar.classList.contains("open-nav-bar")) {
    e.target.classList.remove("open-nav-button");
    navBar.classList.remove("open-nav-bar");
  } else {
    e.target.classList.add("open-nav-button");
    navBar.classList.add("open-nav-bar");
  }
});

navButton.addEventListener("click", (e) => {
  navBar.classList.toggle("open-nav-bar");
});
