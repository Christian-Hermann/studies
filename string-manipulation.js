/** STRING MANIPULATION
 *  String manipulation in Javascript refers to the process of modifying, transforming,
 * or interacting with strings of text using built-in methods and operations. Since strings
 * fundamentals in programming, Javascipt provides a wide array of built-in methods to handle
 * common string operations, such as searching, replacing, splitting, concatenating, or
 * extracting substrings.
 */

// String manipulation with operators //
// String manipulation with operators refers to the use of operators to modify, combine,
// or exctract information from strings.

// String concatenation
// The + operator is used to join two or more strings together, while += is a shorthand
// for appending strings.

let greeting = "Hello, ";
let name = "Alice";
let message = greeting + name;  // "Hello, Alice"

let greeting = "Hello, ";
let name = "Alice";
let message = greeting + name;  // "Hello, Alice"

// String Comparison
// Javascript uses comparison operators to check if two strings are equal or not. You can 
// use == (loose equality) or === (strict equality) to compare strings.

let str1 = "apple";
let str2 = "apple";
console.log(str1 == str2);  // true

let str1 = "apple";
let str2 = "apple";
let str3 = new String("apple");  // Creates a String object, not a primitive string
console.log(str1 === str2);  // true
console.log(str1 === str3);  // false

let str1 = "apple";
let str2 = "orange";
console.log(str1 != str2);  // true
console.log(str1 !== str2); // true
