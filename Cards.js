//Card 1
const card1 = document.querySelector('[data-js="card1"]');
const card1OldContent = "Reasons to be a Web Developer";
const card1NewContent =
  "Why i want to be a Web Developer is a question, that i can answer you at everytime in any moment! I'm IT positive, I can feel it in my blood now since I started this Bootcamp at Neuefische. In the years before Neuefische I had many contacts to the world of Informatics, but never considered it as my next step in life. I wasn't ready, till now!";

card1.textContent = card1OldContent;

function cardToggleContent(
  cardNumber,
  oldContent,
  newContent,
  classCheck,
  position,
  buttonLink
) {
  cardNumber.addEventListener("click", () => {
    cardNumber.classList.toggle("card-s__card-c--click");
    if (cardNumber.textContent === oldContent) {
      cardNumber.textContent = newContent;
    } else {
      cardNumber.textContent = oldContent;
    }
    if (cardNumber.classList.contains(classCheck)) {
      cardNumber.classList.toggle("cardButton");
      if (cardNumber.classList.contains("cardButton")) {
        cardNumber.insertAdjacentHTML(position, buttonLink);
      }
    } else {
      console.log("No Button Class for this one!");
    }
  });
}
cardToggleContent(card1, card1OldContent, card1NewContent);

//Card 2
const card2OldContent = "Programming Skills";
const card2NewContent =
  "Shell Scripting, CSS3, HTML5, Vanilla JavaScript, Next.js, Node.js, React, MongoDB, VS Code, GitHub, Git, WordPress, Twilio ";
const card2 = document.querySelector('[data-js="card2"]');

card2.textContent = card2OldContent;
cardToggleContent(card2, card2OldContent, card2NewContent);

//Card 3
const card3OldContent = "Programming Experience";
const card3NewContent =
  "That's My Quiz WebApp, Twilio Pranking WebApp's, WordPress";
const card3 = document.querySelector('[data-js="card3"]');
const classCheck = "card3";
const position = "beforeend";
const buttonLink = '<a href="#">Go to Project\'s</a>';

card3.textContent = card3OldContent;
cardToggleContent(
  card3,
  card3OldContent,
  card3NewContent,
  classCheck,
  position,
  buttonLink
);

//Card 4
const card4OldContent = "I'd appreciate to hear from you";
const card4NewContent =
  '"You can work from anywhere", "You won\'t have to get Coffee addicted", "We communicate openly"';
const card4 = document.querySelector('[data-js="card4"]');

card4.textContent = card4OldContent;
cardToggleContent(card4, card4OldContent, card4NewContent);

//Card 5
const card5OldContent = "Personal Skills";
const card5NewContent =
  "Concentration, Open communication, Fast learning, I really like programming, Getting things done in Time & under Pressure";
const card5 = document.querySelector('[data-js="card5"]');

card5.textContent = card5OldContent;
cardToggleContent(card5, card5OldContent, card5NewContent);

//Card 6
const card6OldContent = "Thing's I'd like to see";
const card6NewContent =
  "Upcoming Humanoid Robot's, Upcoming Human Drone Transportation, Drone to Home Delivery, Underground Cities, Autonomous Camper's/Motorhome's, Apple Smart Glasses";
const card6 = document.querySelector('[data-js="card6"]');

card6.textContent = card6OldContent;
cardToggleContent(card6, card6OldContent, card6NewContent);

//Card 7
const card7OldContent = "Capstone Project";
const card7NewContent = "Has to be filled. (add ButtonLink)";
const card7 = document.querySelector('[data-js="card7"]');

card7.textContent = card7OldContent;
cardToggleContent(card7, card7OldContent, card7NewContent);
