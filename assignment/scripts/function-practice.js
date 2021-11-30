console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log('Hello name test:', helloName('Nick'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('Add numbers test: ', addNumbers(5, 8));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Multiply three test:', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
console.log('getLast test:', getLast([1, 2, 3]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
console.log('find test - return true', find(2, [5, 3, 8, 2]));
console.log('find test - return false', find(2, [5, 3, 8, 8]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.match(letter);
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  return array.reduce((prev, current) => prev + current);
}
console.log('sumAll test - should be 6', sumAll([1, 2, 3]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray(array) {
  return array.filter(element => element > 0);
}
console.log('positiveArray test - should be [2, 4, 6]', positiveArray([-1, 2, 4, -5, 6, 0]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  const arr = s.split(' ');
  let short = arr[0].length;
  arr.forEach((element) => {
    short = element.length < short ? element.length : short;
  });
  return short;
}