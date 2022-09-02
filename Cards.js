//Card 1
const card1 = document.querySelector('[data-js="card1"]');
const card1OldContent = "The reasons for me to be a Web Developer";
const card1NewContent =
  "Why i want to be a Web Developer is a question, that i can answer you at everytime in any moment! I'm IT positive, I can feel it in my blood now since I started this Bootcamp at Neuefische. In the years before Neuefische I had many contacts to the world of Informatics, but never considered it as my next step in life. I wasn't ready, till now!";

card1.textContent = card1OldContent;

function cardToggleContent(cardNumber, oldContent, newContent) {
  cardNumber.addEventListener("click", () => {
    cardNumber.classList.toggle("card-s__card-c--click");
    if (cardNumber.textContent === oldContent) {
      cardNumber.textContent = newContent;
    } else {
      cardNumber.textContent = oldContent;
    }
  });
}
cardToggleContent(card1, card1OldContent, card1NewContent);

//Card 2
const card2OldContent = "The reasons for me to be a Web Developer";
const card2NewContent =
  "Why i want to be a Web Developer is a question, that i can answer you at everytime in any moment! I'm IT positive, I can feel it in my blood now since I started this Bootcamp at Neuefische. In the years before Neuefische I had many contacts to the world of Informatics, but never considered it as my next step in life. I wasn't ready, till now!";
const card2 = document.querySelector('[data-js="card2"]');

card2.textContent = card2OldContent;
cardToggleContent(card2, card2OldContent, card2NewContent);

//Card 3
const card3OldContent = "The reasons for me to be a Web Developer";
const card3NewContent =
  "Why i want to be a Web Developer is a question, that i can answer you at everytime in any moment! I'm IT positive, I can feel it in my blood now since I started this Bootcamp at Neuefische. In the years before Neuefische I had many contacts to the world of Informatics, but never considered it as my next step in life. I wasn't ready, till now!";
const card3 = document.querySelector('[data-js="card3"]');

card3.textContent = card3OldContent;
cardToggleContent(card3, card3OldContent, card3NewContent);
