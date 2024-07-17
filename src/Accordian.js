const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
  const answer = accordian.querySelector(".answer");
  accordian.addEventListener("click", () => {
    answer.classList.toggle(".active");
  });
});

export default accordians;
