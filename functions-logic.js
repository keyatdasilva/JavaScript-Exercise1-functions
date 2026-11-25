// TODO: Create a function called 'multiply' that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.

const a = 5
const b = 6
const c = 7

function multiply(a,b,c){
  if (a === b){
    return "Please enter a new value"
  } else if (b === c){
    return "Please enter a new value"
  } else if (a === c){
    return "Please enter a new value"
  } else {
    return a * b * c
  }
}
const results = multiply(a,b,c)
console.log("Answer is " + results);


// TODO: Create a function expression called 'convertToSeconds' that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
const convertToSeconds = function (minutes){
    return minutes * 60
}
const result = convertToSeconds(2)
console.log(result);


// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius (temperature){
    return (temperature - 32) / (1.8)
}
const celcius = fahrenheitToCelsius (95);
console.log("Temperature in Celcius " + celcius);


// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(text) {
  return text.split("").reverse().join("");
}

const reversed = reverseString("hello");
console.log(reversed);


// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels('Javascript') //output =3 ***Do not use a console.log() inside of the function***
function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";
  const lowerText = text.toLowerCase();

  for (let i = 0; i < lowerText.length; i++) {
    if (vowels.includes(lowerText[i])) {
      count = count + 1;
    }
  }

  return count;
}

const vowelCount = countVowels("Javascript");
console.log(vowelCount);


// TODO: Create a "isPrime" function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const test1 = isPrime(7);
const test2 = isPrime(10);
const test3 = isPrime(13);
const test4 = isPrime(1);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
 