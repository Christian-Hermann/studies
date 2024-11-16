/** VARIABLES: 
 * Variables are containers for stroing data. Variables allow you to label and store
 * data values which can then be used or changed as needed during the execution of your code. 
 * Variables are named identifiers that can pint to values of a particular type like number, 
 * string, boolean, array, object or another data type.
 */
 

// Declaration && Assignment //
   
// 1. Declaration: Introducing a variable into the program by specifying its name. variables can be declared
// using three main keywords: var, let, and const.
   var age; // declare the variable 'age' without an initial value
// 2. Assingnment: This happens after the declaration and refers to the assigning of a value to a variable.
   var age = 41 // assign the value 41 to age
 
// var, let, const // 
 
// var: Traditional variable declaration. Not block scoped. Has function and global scope.
   var
// let: Block scoped variable declaration. Only accesible in the block where it is defined. 
   let
// const: Like let, also block scoped. Only accesible in block where it was defined.
   const 

// Hoisting
  
// Hoisting is a Javascript mechanism where variables and function declarations are moved or "hoisted"
// to the top of their containing scope during the compilation phase, before the code is executed.
// However, only the declrations are hoisted, not the initializations (assignments).
  
// 1. Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// 2. Variables declared with let and const are not hoisted

// Hoisting in var
console.log(a); // undefined (not a ReferenceError)
var a = 10;
console.log(a); // 10

// Hoisting with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// Hoisting with const
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 10;
console.log(c); // 10

