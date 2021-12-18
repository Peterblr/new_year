const cards = document.querySelectorAll(".slide");

cards.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
});

function clearActiveClasses() {
  cards.forEach((slide) => {
    slide.classList.remove("active");
  });
}
