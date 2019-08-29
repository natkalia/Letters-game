const arrThisGame = ["AntylopA"];

const userInput = document.querySelector(".user-input");
const btn = document.querySelector(".button");
const used = document.querySelector(".used-words");

const changeToUpperChars = (userWord) => {
  return userWord
    .toLowerCase()
    .split("")
    .map((letter, index) =>
      index === 0 || index === userWord.length - 1 ? letter.toUpperCase() : letter
    )
    .join("");
}

const checkIfNoNumbers = (userWord) => {
  return userWord.match(/[0-9]/g) === null;
}

const checkFirstLetter = (userWord) => {
  const thisChar = userWord[0];
  const previousChar = [...arrThisGame]
    .pop()
    .split("")
    .pop();

  return thisChar.toUpperCase() === previousChar.toUpperCase();
}

const checkIfExist = (userWord) => {
  return myArray.includes(userWord.toLowerCase());
}

const checkIfRepeat = (userWord) => {
  return !arrThisGame.includes(userWord);
}

const groupValidation = (userWord) => {
  return (
    checkIfNoNumbers(userWord) &&
    checkFirstLetter(userWord) &&
    checkIfExist(userWord) &&
    checkIfRepeat(userWord)
  );
}

const updateArray = (userWord) => {
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
