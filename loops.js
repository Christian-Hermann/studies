/** LOOPS:
 * Loops are structures that you allow you to repeatedly execute a block of code as
 * as long as the specified condition is true. They provide the flexibility to iterate 
 * over data structures and execute actions multiple times with minimal code. 
 * 
 * Common Use Cases for Loops:
 * Iterating over arrays
 * Repetitive calculations
 * Searching 
 * Generating Sequences
 */

// For Loop //
// A for loop is the most common and is used when you know in advance how many times 
// you want to execute a statement or block of statements.
for (initialization; condition; increment/decrement) {
    // Code to execute
  }

// Example // 
for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
  }

// For...in loop //
// The For...in loop is used to iterate over the keys (properties) of an object or the 
// indices of an array.
for (let key in object) {
    // Code to execute
  }

// Example //
// Object representing a car
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
  };
  
  // Using for...in loop to iterate over the keys (properties) of the car object
  for (let key in car) {
    // Printing the key and its corresponding value using console.log
    console.log(key + ": " + car[key]);
  }

// While loop //
// A while loop is used to repeatedly execute a block of code as long as a specified
// condition is true. The loop will check to see if the condition is true on 
// each iteration and stop when the condtion becomes false. 
while (condition) {
    // Code to execute repeatedly as long as the condition is true
  }

// Example //
let i = 1;  // Initialize the loop counter

while (i <= 5) {  // The condition to check (i must be <= 5)
  console.log(i);  // Print the current value of i
  i++;  // Increment i by 1 after each iteration
}


// Looping forwards over an array //
function loopForward(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  
  // Example //
  const myArray = [1, 2, 3, 4, 5];
  loopForward(myArray);  // Output: 1, 2, 3, 4, 5


  // Looping backwards over an array // 
function loopBackward(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  
  // Example //
  const myArray = [1, 2, 3, 4, 5];
  loopBackward(myArray);  // Output: 5, 4, 3, 2, 1
  

// Looping over an object //
const person = {
    name: "Alice",
    age: 25,
    city: "Paris"
  };
  
  // Looping using for...in //
  for (let key in person) {
    if (person.hasOwnProperty(key)) {  // Ensure it's the object's own property
      console.log(key + ": " + person[key]);
    }
  }
  
  // Looping using Object.keys() //
  Object.keys(person).forEach(function(key) {
    console.log(key + ": " + person[key]);
  });
  
  // 3. Looping using Object.values() //
  Object.values(person).forEach(function(value) {
    console.log(value);
  });
  
  // Looping using Object.entries() with forEach //
  Object.entries(person).forEach(function(entry) {
    const key = entry[0];
    const value = entry[1];
    console.log(key + ": " + value);
  });
  
  // Looping using for...of with Object.entries() //
  for (const entry of Object.entries(person)) {
    const key = entry[0];
    const value = entry[1];
    console.log(key + ": " + value);
  }