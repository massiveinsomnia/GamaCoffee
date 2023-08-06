const navbarNav = document.querySelector(".navbar-nav");
// nambahin event onclick munculin dan ilangin hamburger menu di tablet display
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// fungsi ngehide sidebar pas klik random kecuali hamburger menu dan sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
