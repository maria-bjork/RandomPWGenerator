const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"];

  const lowerCaseCharacters =[
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"];

  const numberCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"];

  const symbolCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let generateButton = document.getElementById("generate-btn")
let passwordLength = document.getElementById("password-length")
let lowerCase = document.getElementById("lower-case")
let upperCase = document.getElementById("upper-case")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

generateButton.addEventListener("click", generatePassword)

function generatePassword(){
  let characterPool =[]
  if(lowerCase.checked){
    characterPool = characterPool.concat(lowerCaseCharacters)
  }
  if(upperCase.checked){
    characterPool = characterPool.concat(upperCaseCharacters)
  }
  if(numbers.checked){
    characterPool = characterPool.concat(numberCharacters)
  }
  if(symbols.checked){
    characterPool = characterPool.concat(symbolCharacters)
  }
  if(characterPool.length == 0){
    passwordOneEl.textContent = "Please check at least one character type"
    passwordTwoEl.textContent = "Please check at least one character type"
    return
  }
  let firstPassword = ""
  let secondPassword = ""
  for(let i = 0; i < passwordLength.value ; i++){
    firstPassword += characterPool[generateRandomNr(characterPool)]
    secondPassword += characterPool[generateRandomNr(characterPool)]
  }

  passwordOneEl.textContent = firstPassword
  passwordTwoEl.textContent = secondPassword
}
 
function generateRandomNr(arr){
  return Math.floor( Math.random() * arr.length)
}

passwordOneEl.addEventListener("click", function(){
  copyToClipboart(passwordOneEl.textContent);
})
passwordTwoEl.addEventListener("click", function(){
  copyToClipboart(passwordTwoEl.textContent);
})

function copyToClipboart(text){
  if(!text){
    return
  }
  navigator.clipboard.writeText(text)
}