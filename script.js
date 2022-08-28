// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var userInput = window.prompt("How many characters do you want in your password? Please choose between 8 and 128"); //this will enter a string, we need to convert it to a num
  var passwordLength = parseInt(userInput) //passing userInput through parseInt and assigning the newly converted num to passwordLength

  if (isNaN(passwordLength)) {
    window.alert (`That's not a number!`);
    return
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert (`Please choose a number from 8-128`)
    return
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
