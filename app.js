const arrThisGame = ["AntylopA"];

const userInput = document.querySelector(".user-input");
const btn = document.querySelector(".button");
const used = document.querySelector(".used-words");

function changeToUpperChars(userWord) {
  return userWord
    .toLowerCase()
    .split("")
    .map((letter, index) =>
      index === 0 || index === userWord.length - 1 ? letter.toUpperCase() : letter
    )
    .join("");
}

function checkIfNoNumbers(userWord) {
  return userWord.match(/[0-9]/g) === null;
}

function checkFirstLetter(userWord) {
  const thisChar = userWord[0];
  const previousChar = [...arrThisGame]
    .pop()
    .split("")
    .pop();

  return thisChar.toUpperCase() === previousChar.toUpperCase();
}

function checkIfExist(userWord) {
  return myArray.includes(userWord.toLowerCase());
}

function checkIfRepeat(userWord) {
  return !arrThisGame.includes(userWord);
}

function groupValidation(userWord) {
  return (
    checkIfNoNumbers(userWord) &&
    checkFirstLetter(userWord) &&
    checkIfExist(userWord) &&
    checkIfRepeat(userWord)
  );
}

function updateArray(userWord) {
  arrThisGame.push(userWord);
  used.innerHTML = arrThisGame;
}

const playGame = () => {
  const newWord = changeToUpperChars(userInput.value);

  let message = "";
  if (groupValidation(newWord)) {
    message = "Runda zaliczona! Gramy dalej!";
    updateArray(newWord);
  } else {
    message = "Runda niezaliczona! Spróbuj jeszcze raz!";
  }

  alert(message);
  userInput.value = "";
};

btn.addEventListener("click", playGame);
