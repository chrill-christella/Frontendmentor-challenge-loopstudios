const navSlide = () => {
  const burger = document.querySelector(".hidden");
  const nav = document.querySelector(".main-nav-list");
  hidden = addEventListener("click", () => {
    nav.classList.toggle(".main-nav-list");
  });
};
navSlide();
