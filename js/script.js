const navbarNav = document.querySelector(".navbar-nav");
// nambahin event onclick munculin dan ilangin hamburger menu di tablet display
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger-menu");
// fungsi ngehide sidebar pas klik random kecuali hamburger menu dan sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // untuk ilangin aksi default = pas klik icon search bakal dibawa ke page paling atas
  e.preventDefault();
};

const searchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

const cartButton = document.querySelector("#shopping-cart");
document.addEventListener("click", function (e) {
  if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

const itemDetailModal = document.querySelector("#item-detail-modal");
// harus loop semuin item a dan pakai queryselectorAll, soalnya item yg sama dan > 1
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
