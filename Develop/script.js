var length = 0;
var special = ["+","-","!",".","@", "$", '&', "*"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
mainArray = [];

//WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria THEN I select which criteria to include in the password
function passwordCriteria() {
  var specialChar = confirm('Do you want your password to include special characters?');
  if (specialChar === true) {
    mainArray.push(special);
    console.log(mainArray);
  }
  // return(special);
}

function passwordLength() {
  var length = prompt("Please enter a number. How many characters should the password be (from 8-128)?");
  return(length);
}

//WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
function lengthValidation(){
  length = passwordLength();
  var valid = Number.isInteger(parseInt(length));

  if (valid === true && 8 <= parseInt(length) <= 128) {
    var finalLength = parseInt(length);
  }else{
    alert("Please enter a valid selection");
    lengthValidation();
  }

  return(finalLength);
}

//WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric
function upperPref() {
  var upperChars = confirm("Do you want to include uppercase chars?");
  if(upperChars===true){
    mainArray.push(uppercase);
    console.log(mainArray);
  };
  return(upperChars);
}
function lowerPref(){
  var lowerChars = confirm("Do you want to include lowercase chars?");
  if(lowerChars===true){
    mainArray.push(lowercase);
    console.log(mainArray);
  };
  return (lowerChars);
};

function numericVals(){
  var numberChars = confirm("Do you want to include numbers?");
  if(numberChars===true){
    mainArray.push(numbers);
    console.log(mainArray);
  };
  return(numbers);
}

//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
function generatePassword() {
  var pw = '';
  //loop through for length of password and add character pulled randomly from a random array to pw
   for( i = 0; i<length; i++){
    var numOfArrays = mainArray.length;
    var pickNumber = Math.floor(Math.random() * (numOfArrays-1));
    var arrayForChar = mainArray[pickNumber];
    console.log(arrayForChar);

    var charArrayLength = arrayForChar.length;
    var charIndex = Math.floor(Math.random() * (charArrayLength-1));
    var charFromArray = arrayForChar[charIndex];
    console.log(charFromArray);

    pw = pw + charFromArray;
   }
   return(pw);
}

//WHEN the password is generated THEN the password is either displayed in an alert or written to the page
function displayPass(generatedPass){
  var passDisplayField = document.getElementById("#password");
  passDisplayField.textContent(generatedPass);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  mainArray = [];
  passwordCriteria();
  upperPref();
  lowerPref();
  numericVals();
  length = lengthValidation();
  var password = generatePassword();
  // displayPass(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
