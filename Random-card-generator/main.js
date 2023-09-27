import "./style.css";

let generateRandomNumber = () => {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumb = Math.floor(Math.random() * number.length);

  return number[indexNumb];
};

let generateRandomSuit = () => {
  let heart = `<i class="fa-solid fa-heart" style="color: #fd4508;"></i>`;
  let spades = `&spades;`;
  let diamond = `<i class="fa-solid fa-gem" style="color: #e93001;"></i>`;
  let clubs = `&clubs;`;
  let suit = [heart, spades, diamond, clubs];

  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit];
};
const generateButton = document.getElementById("generateButton");
const suit = document.querySelectorAll(".suit");
const number = document.querySelector(".number");

const generateNewCard = () => {
  const randomSuit = generateRandomSuit();
  suit.forEach((suitElement) => {
    suitElement.innerHTML = randomSuit;
  });
  number.innerHTML = generateRandomNumber();
};


generateNewCard();
setInterval(generateNewCard, 10000);

generateButton.addEventListener("click", generateNewCard);
