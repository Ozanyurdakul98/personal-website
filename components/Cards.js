// MY FUNCTIONS

function addHTMLcontent(cardNumber, classCheck, position, addedHTML, cardDesign) {
	if (cardNumber.classList.contains(classCheck)) {
		cardNumber.classList.toggle(cardDesign);
		if (cardNumber.classList.contains(cardDesign)) {
			cardNumber.insertAdjacentHTML(position, addedHTML);
		}
	} else {
		console.log('No Button Class for this one!');
	}
}
function cardToggleContent(
	cardNumber,
	oldContent,
	newContent,
	classCheck,
	position,
	addedHTML,
	cardDesign
) {
	cardNumber.addEventListener('click', () => {
		handleclick(cardNumber, oldContent, newContent, classCheck, position, addedHTML, cardDesign);
	});
}

function handleclick(
	cardNumber,
	oldContent,
	newContent,
	classCheck,
	position,
	addedHTML,
	cardDesign
) {
	console.log('startedMain');
	cardNumber.classList.toggle('card-s__card-c--click');
	if (cardNumber.textContent === oldContent) {
		cardNumber.textContent = newContent;
		cardNumber.classList.remove('card-s__card-c--' + classCheck + '--hover');
	} else {
		cardNumber.textContent = oldContent;
		cardNumber.classList.add('card-s__card-c--' + classCheck + '--hover');
	}
	addHTMLcontent(cardNumber, oldContent, newContent, classCheck, position, addedHTML, cardDesign);
}

//Card 1
const card1 = document.querySelector('[data-js="card1"]');
const card1OldContent = 'Reasons to be a Web Developer';
const card1NewContent = '';
const classCheck1 = 'card1';
const position1 = 'beforeend';
const addedHTML1 =
	"<ul><li>Beeing IT positive, feels good</li><li>Very fun experiences with cool Projects</li><li>Self Expression</li><li>Liking what'll come in the future</li></ul>";
const cardDesign1 = 'cardButton1';

card1.textContent = card1OldContent;

cardToggleContent(
	card1,
	card1OldContent,
	card1NewContent,
	classCheck1,
	position1,
	addedHTML1,
	cardDesign1
);

//Card 2
const card2 = document.querySelector('[data-js="card2"]');
const card2OldContent = 'Programming Skills';
const card2NewContent =
	'CSS3, HTML5, Vanilla JavaScript, Next.js, Node.js, Express.js, APIs, React.js, MongoDB, VS Code, GitHub, Git, WordPress, Twilio ';
const classCheck2 = 'card2';
// const position2 = "beforeend"

card2.textContent = card2OldContent;
cardToggleContent(card2, card2OldContent, card2NewContent, classCheck2);

//Card 3
const card3OldContent = 'Programming Experience';
const card3NewContent = '';
const card3 = document.querySelector('[data-js="card3"]');
const classCheck3 = 'card3';
const position3 = 'beforeend';
const addedHTML3 =
	"<ul><li>Webpages</li><li>That's-My-Quiz WebApp</li><li>Twilio Pranking WebApp's</li><li>WordPress</li></ul> <a href='#projectSection'>Go to Project's</a>";
const cardDesign3 = 'cardButton3';

card3.textContent = card3OldContent;
cardToggleContent(
	card3,
	card3OldContent,
	card3NewContent,
	classCheck3,
	position3,
	addedHTML3,
	cardDesign3
);

//Card 4
const card4 = document.querySelector('[data-js="card4"]');
const card4OldContent = "I'd appreciate to hear from you";
const card4NewContent = '';
const classCheck4 = 'card4';
const position4 = 'beforeend';
const addedHTML4 =
	'<ul><li>"You can work from anywhere"</li><li>"You won\'t have to get Coffee addicted"</li><li>"We communicate openly"';
const cardDesign4 = 'cardButton4';
card4.textContent = card4OldContent;
cardToggleContent(
	card4,
	card4OldContent,
	card4NewContent,
	classCheck4,
	position4,
	addedHTML4,
	cardDesign4
);

//Card 5
const card5 = document.querySelector('[data-js="card5"]');
const card5OldContent = 'Personal Skills';
const card5NewContent = '';
const classCheck5 = 'card5';
const position5 = 'beforeend';
const addedHTML5 =
	"<ul><li>Open Communication</li><li>Focus & Concentration</li><li>Fast learning</li>I really like programming<li>Getting Task's done in Time</li>";
const cardDesign5 = 'cardButton5';

card5.textContent = card5OldContent;
cardToggleContent(
	card5,
	card5OldContent,
	card5NewContent,
	classCheck5,
	position5,
	addedHTML5,
	cardDesign5
);

//Card 6
const card6 = document.querySelector('[data-js="card6"]');
const card6OldContent = "Thing's I'd like to see";
const card6NewContent = '';
const classCheck6 = 'card6';
const position6 = 'beforeend';
const addedHTML6 =
	"<ul><li>Apple Smart Glasses</li><li>Upcoming Humanoid Robot's</li><li>Upcoming Human Drone Transportation</li><li>Drone to Home Delivery</li><li>Underground Cities</li><li>Autonomous Camper's/Motorhome's</li>";
const cardDesign6 = 'cardButton6';

card6.textContent = card6OldContent;
cardToggleContent(
	card6,
	card6OldContent,
	card6NewContent,
	classCheck6,
	position6,
	addedHTML6,
	cardDesign6
);

//Card 7
const card7 = document.querySelector('[data-js="card7"]');
const card7OldContent = 'Capstone Project';
const card7NewContent = 'Has to be filled. (add ButtonLink)';
const classCheck7 = 'card7';
const test = document.querySelector('[data-js="card-s"]');
card7.textContent = card7OldContent;
cardToggleContent(card7, card7OldContent, card7NewContent, classCheck7);
