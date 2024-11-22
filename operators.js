/** OPERATORS: 
 * In javascript operators are used to assign values, compare values, perform arithmetic 
 * operations and more. Below is a list of different types of operators.
 */


// Assignment Operators //
= += -= *= /= %=
// An assignment operator is used t assigna value to a variable. It allows you to store values in 
// variables, and can be used in combination with other operators to modify the value of a variable 
// in a more consise way.

let x = 10;  // Assigns 10 to variable x


// Arithmetic Operators //
+ - * / % ++= -- **
// Arithmetic operators are used to perform mathematical operations on numeric values or variables.
// These opertors allow you to carry out basic calculations such as addition, subtraction, mulitpilication,
// division, and more.

let a = 4;
let b = 2;
let sum = a + b;  // sum becomes 6

let a = 4;
let b = 2;
let difference = a - b;  // difference becomes 2

let a = 4;
let b = 2;
let product = a * b;  // product becomes 8


// Comparison Operators //
== === != !== < <= > >=
// Comparison operators are used to compare to values or expressions. These operators return a boolean
// value: either true or false, depending on whether the comparison is valid. 

5 == 5;    // true (both are numbers and equal)
'5' == 5;  // true (string '5' is converted to number 5)

5 === 5;    // true (same value and type)
'5' === 5;  // false (different types: string vs number)

5 != 6;     // true (values are not equal)
'5' != 5;   // false (both are equal after type coercion)


// Logical Operators //
&& || !
// logical operators are used to combine or invert boolean (true/false) values and expressions.
// these operators help to create more complex conditions in control flow statments.

let a = true;
let b = false;

console.log(a && b);  // false, because b is false
console.log(a || b);  // true, because a is true
console.log(!a);      // false, because a is true and it is inverted
console.log(!(a && b));  // true, because a && b is false, and the NOT inverts it


// Unary Operators //
+ - ++ -- ! typeof void
// Unary operators are operators that operate on a single operand, meaning they take
// only one value or variable. these operators perform various operations like incrementing,
// negating, or converting a value.

let a = '10';
console.log(+a);  // 10 (converts string '10' to number)

let x = 5;
console.log(-x);  // -5 (negates the number)

let x = 5;
console.log(++x);  // 6 (prefix: increments first, then returns value)

let a = 10;
console.log(--a);  // 9 (prefix: decrements first, then returns value)

let a = true;
console.log(!a);  // false (inverts true)


// Ternary Operator //
condition ? value_if_true : value_if_false;
// A ternary operator is shorthand for an if-else statement that evaluates a condition and
// returns one of two values based on whether the condition is true or false. It is called ternary 
// because it involves three operands: a condition, a result for true, and a result for false.

let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);  // Output: "You are an adult."



