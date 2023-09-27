import './style.css'

let generateRandomNumber = () => {
  let number= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
  let indexNumb = Math.floor(Math.random() * number.length);

  return number[indexNumb]
}

let generateRandomSuit = () => {
  let heart = `<i class="fa-solid fa-heart" style="color: #fd4508;"></i>`;
  let spades = `<i class="fa-solid fa-spa" style="color: #050505;"></i>`;
  let diamond = `<i class="fa-solid fa-gem" style="color: #e93001;"></i>`;
  let clubs =  `&clubs;`;
  let suit = [heart, spades, diamond, clubs]

  let indexSuit = Math.floor(Math.random() * suit.length);

  return suit[indexSuit]

}
window.onload = () => {
  const suit = document.querySelectorAll('.suit');
  const number = document.querySelector('.number');

  const randomSuit = generateRandomSuit();
  
  suit.forEach((suitElement) => {
    suitElement.innerHTML = randomSuit;
  });
  number.innerHTML = generateRandomNumber();
}


document.querySelector('#app').innerHTML = `
  <div class= "card">

  <div class="top-suit suit"></div>

  <div class="number"></div>

  <div class="bottom-suit suit"></div>

  </div>
`


