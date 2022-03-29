// Assignment code here

//WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria THEN I select which criteria to include in the password
function passwordCriteria() {
  if (confirm('Do you want your password to include special characters?')) {
    criteria = "special";
  } else {
    criteria = "not special";
  }
  return(criteria);
};

function passwordLength() {
  var length = prompt("Please enter a number. How many characters should the password be (from 8-128)?");
  return(length);
}

//WHEN prompted for the length of the passwordTHEN I choose a length of at least 8 characters and no more than 128 characters
function lengthValidation(){
  length = passwordLength();
  var valid = Number.isInteger(parseInt(length));

  if (valid === true && 8 <= parseInt(length)  <= 128) {
    var finalLength = parseInt(length);
  }else{
    alert("Please enter a valid selection");
    lengthValidation();
  }

  return(finalLength);
}
//WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
//WHEN the password is generated THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var criteria = passwordCriteria();
  var length = lengthValidation();
  var password = generatePassword(qualifications);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
