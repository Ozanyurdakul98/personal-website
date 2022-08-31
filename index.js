const card = document.querySelector('[data-js="card1"]');
console.log(card);
card.addEventListener("click", () => {
  card.classList.toggle("card-s__card-c--click");
  console.log("klick");
});
