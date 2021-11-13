
// declaring variables for getting input from Form IDs
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialElement = document.getElementById('includeSpecial')
const form = document.getElementById('passwordGenForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// declares variables as arrays using ASCII Character Codes. Selects the ASCII character codes from their code numbers.
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// This concatenates new arrays to select the different ASCII character code ranges of the special characters 
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)

// Adds event listener to the Generate Password Button. On submit it will call the generatePassword function variables. .Checked just tells us if it is True or False that the checkbox has been selected. 
form.addEventListener('submit', e => {
  // prevent default stops the button press from refreshing the page
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecial = includeSpecialElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial)
  passwordDisplay.innerText = password
})

// This takes the ASCII character codes and passes the data to the password field.
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial) {
  // sets charCodes and appends the additional arrays by concatenating the Uppercase, Symbol and Numbers. 
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSpecial) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  // stores password characters in empty array.
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    // gets random value from the entire charCodes array
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  // turns array into empty string
  return passwordCharacters.join('')
}

// generates array from the low number to the high number of the ASCII character codes.
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// function to sync the character amount event argument and gets value then sets the character amount and range to a value. 
function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}