alert("Selamat Datang di ITHUB");

// Fitur Scroll Top
const batas = 5;
const scrollButton = document.querySelector("#scroll");
const scrollContainer = function () {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", function () {
  if (scrollContainer().scrollTop > batas) {
    scrollButton.classList.add("scroll");
  } else {
    scrollButton.classList.remove("scroll");
  }
});

//Fitur Menu Mobile
const mobilemenu = document.querySelector(".menumobile input");

mobilemenu.addEventListener("click", function (event) {
  document.querySelector("nav ul").classList.toggle("menumuncul");
});
