let arrThisGame = ["AntylopA"];

let userInput = document.querySelector(".user-input");
let btn = document.querySelector(".button");
let used = document.querySelector(".used-words");

function changeToUpperChars(userWord) {
  userWord = userWord.toLowerCase().split("");
  userWord[0] = userWord[0].toUpperCase();
  userWord[userWord.length-1] = userWord[userWord.length-1].toUpperCase();
  userWord = userWord.join("");
  return userWord;
}

function checkIfNoNumbers(userWord) {
  const regexIfNumber = /[0-9]/g;
  let resultIfNoNumbers = userWord.match(regexIfNumber);
  resultIfNoNumbers != null ? console.log("Błąd, podane słowo zawiera cyfrę/y!") : console.log("OK, słowo nie zawiera cyfr.");
}

function checkIfRepeat(userWord) {
  let result = arrThisGame.includes(userWord);
  result ? console.log("Błąd, to słowo już raz padło w tej grze!") : console.log("OK, słowo w tej grze jeszcze nie padło.");
}

function checkFirstLetter(userWord) {
  let thisChar = userWord.charAt(0);
  let previousWord = arrThisGame[arrThisGame.length-1]; 
  let previousChar = previousWord.charAt(previousWord.length-1);
  thisChar = thisChar.toUpperCase();
  previousChar = previousChar.toUpperCase();
  thisChar === previousChar ? console.log("OK, słowo zaczyna się na prawidłową literę.") : console.log("Błąd, słowo zaczyna się na nieprawidłową literę!");
}

function checkIfExist(userWord) {
  userWord = userWord.toLowerCase();
  myArray.includes(userWord) ? console.log("OK, podane słowo znajduje się w słowniku gry.") : console.log("Błąd, podanego słowa nie ma w słowniku gry.");
}

function groupValidation(userWord) {
  checkIfNoNumbers(userWord);
  checkIfRepeat(userWord);
  checkFirstLetter(userWord);
  checkIfExist(userWord);
}

function updateArray(userWord) {
  arrThisGame.push(userWord);
  used.innerHTML = arrThisGame;
}

btn.addEventListener("click", function playGame() {
  let newWord = userInput.value;
  newWord = changeToUpperChars(newWord);
  groupValidation(newWord);
  updateArray(newWord);
});