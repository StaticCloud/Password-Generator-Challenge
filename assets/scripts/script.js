// set flags for what characters to include in the password
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;

// list of all specific characters
var lowercase_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// not sure if this works correctly, I'll find out once I start experimenting with appending things to a password
var uppercase_chars = lowercase_chars.map(char => char.toUpperCase());
var numeric_chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special_chars = ['!','\'', '"', '#', '$', '@', '!', '?', '&', '*', '(', ')', ',', '.', '/', '[', ']', '{', '}', '`', '~', '|'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.toString();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// primary function that generates password
var generatePassword = function() {
  // get the length of the password
  var length = getLength();
  var password = "";

  // log it for debugging reasons
  console.log(length);

  getCharacters();

  return password;
}

// prompts the user for the length of the password and returns the value
var getLength = function() {

  // perform while() loop until the input is valid
  while (true) {

    // prompt the user for the length
    var length = window.prompt("How long would you like your password to be? (pick a value between 8 and 128: ");

    // parseInt will return NaN if the user entered something other than a number
    length = parseInt(length);
    
    // if the input is a number, check if it's a value between 8 and 128
    if (length != NaN){
      if (length >= 8 && length <= 128) {

        // return the length if it fits our criteria
        return length;
      }
    }

    window.alert("Invalid input. Please try again.")
  }
}

// prompts the user for what characters to include in their password
var getCharacters = function() {
  while(true) {

    // ask the user to enter what they want in their password
    var input = window.prompt("Does your password require lowercase, uppercase, numeric, and/or special characters? \n\nEnter 1 for Lowercase\nEnter 2 for Uppercase\nEnter 3 for Numeric\nEnter 4 for special\nEnter 5 to quit");

    // set the flags according to what the user asked for
    switch(input) {
      case "1":
        lowercase = true;
        break;
      case "2":
        uppercase = true;
        break;
      case "3":
        numeric = true;
        break;
      case "4":
        special = true;
        break;
      case "5":
        return;
      default:
        window.alert("Please enter one of the five options.");
    }
  }
}
