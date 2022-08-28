// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var userInput = window.prompt("How many characters do you want in your password? Please choose between 8 and 128"); //this will enter a string, we need to convert it to a num
  var passwordLength = parseInt(userInput) //passing userInput through parseInt and assigning the newly converted num to passwordLength

  if (isNaN(passwordLength)) {
    window.alert (`That's not a number!`); //error msg for if a user inputs a non-convertible string
    return
  } else if (passwordLength < 8 || passwordLength > 128) { //error msg for if the num entered by the user falls outside of the requested parameters
    window.alert (`Please choose a number from 8-128`);
    return
  }

//confirmation windows for forced choice inclusion/exclusion of the remaining pw criteria
  var lowerForcedChoice = window.confirm("Do you want your password to contain lowercase letters?");
  var upperForcedChoice = window.confirm("Do you want your password to contain uppercase letters?");
  var numForcedChoice = window.confirm("Do you want your password to contain numbers?");
  var symbolForcedChoice = window.confirm("Do you want your password to contain special characters?");

  if (!lowerForcedChoice && !upperForcedChoice && !numForcedChoice && !symbolForcedChoice){
    window.alert('You need to confirm the addition of at least one variable type, ya dingus!');
    return
  }

}
// if numForcedChoice === true {

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
