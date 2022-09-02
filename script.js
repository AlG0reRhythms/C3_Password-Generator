// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
    max = min
    min = 0
}
  var rando = Math.random()
  return Math.floor(min + (1-rando)+rando*max);
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword() {
  
  var userInput = window.prompt("How many characters do you want in your password? Please choose between 8 and 128"); //this will enter a string, we need to convert it to a num
  var passwordLength = parseInt(userInput) //passing userInput through parseInt and assigning the newly converted num to passwordLength

  if (isNaN(passwordLength)) {
    window.alert (`That's not a number!`); //error msg for if a user inputs a non-convertible string
    return
  } else if (passwordLength < 8 || passwordLength > 128) { //error msg for if the num entered by the user falls outside of the requested parameters
    window.alert (`Please choose a number from 8-128`)
    return
  }

//confirmation windows for forced choice inclusion/exclusion of the remaining pw criteria
  var lowerForcedChoice = window.confirm("Do you want your password to contain lowercase letters?");
  var upperForcedChoice = window.confirm("Do you want your password to contain uppercase letters?");
  var numForcedChoice = window.confirm("Do you want your password to contain numbers?");
  var symbolForcedChoice = window.confirm("Do you want your password to contain special characters?");

  var lowerAlphaList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperAlphaList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "#", "$", "%", "&", "'", "(", "*", "+",",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

  //now we can create an amalgamated array of all the different declared arrays. This will allow us to randomly pull a character from a ranmdom array x amount of times, where x = desired charcter length



  var userSelectedCriteria = []


  // //for loop to iterate .toUpper over lowerAlphaList array
  for (var i = 0; i < lowerAlphaList.length; i++) {
    upperAlphaList[i] = lowerAlphaList[i].toUpperCase()
  }

  console.log(lowerAlphaList);
  console.log(upperAlphaList);
  
  //now that the amalgamated array has been declared, we need to find a way to log them in 
  
  if (lowerForcedChoice === true) {
    userSelectedCriteria.push(lowerAlphaList);
  }
  
  if (upperForcedChoice === true) {
    userSelectedCriteria.push(upperAlphaList)
  } 

  if (numForcedChoice === true) {
    userSelectedCriteria.push(numList)
  }

  if (symbolForcedChoice === true) {
    userSelectedCriteria.push(symbolList)
  }

  if (!lowerForcedChoice && !upperForcedChoice && !numForcedChoice && !symbolForcedChoice){
    window.alert('You need to confirm the addition of at least one variable type, ya dingus!');
    return
  }

  // declaration and for loop for generation of password
  var randomizedPassword = []

    for (var i = 0; i < passwordLength - 1; i++) {
      var randomList = getRandomItem(userSelectedCriteria)
      var randomListItem = getRandomItem(randomList)
      randomizedPassword += randomListItem
  }

  console.log(passwordLength)
  console.log(randomizedPassword)
  return randomizedPassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
