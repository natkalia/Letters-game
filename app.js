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
  const regexIfNoNumber = /[0-9]/g;
  let valResult;
  userWord.match(regexIfNoNumber) != null ? valResult = false : valResult = true;
  return valResult;
}

function checkFirstLetter(userWord) {
  let thisChar = userWord.charAt(0);
  let previousWord = arrThisGame[arrThisGame.length-1]; 
  let previousChar = previousWord.charAt(previousWord.length-1);
  let valResult; 
  thisChar = thisChar.toUpperCase();
  previousChar = previousChar.toUpperCase();
  thisChar === previousChar ? valResult = true : valResult = false;
  return valResult; 
}

function checkIfExist(userWord) {
  let valResult;
  userWord = userWord.toLowerCase();
  myArray.includes(userWord) ? valResult = true : valResult = false;
  return valResult; 
}

function checkIfRepeat(userWord) {
  let result = arrThisGame.includes(userWord);
  let valResult;
  result ? valResult = false : valResult = true;
  return valResult;
}

function groupValidation(userWord) {
  let valResult1 = checkIfNoNumbers(userWord);
  let valResult2 = checkFirstLetter(userWord);
  let valResult3 = checkIfExist(userWord);
  let valResult4 = checkIfRepeat(userWord);
  let finalValResult;
  if (valResult1 && valResult2 && valResult3 && valResult4) {
    finalValResult = true;
  } else {
    finalValResult = false;
  }
  return finalValResult;
}

function updateArray(userWord) {
  arrThisGame.push(userWord);
  used.innerHTML = arrThisGame;
}

btn.addEventListener("click", function playGame() {
  let newWord = userInput.value;
  newWord = changeToUpperChars(newWord);
  let finalValResult = groupValidation(newWord);
  if (finalValResult === true) {
    alert("Runda zaliczona! Gramy dalej!");
    updateArray(newWord); 
    userInput.value="";
  } else {
    alert("Runda niezaliczona! Spróbuj jeszcze raz!");
    userInput.value="";
    return;
  }
});