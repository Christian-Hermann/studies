// DATATYPES *************

/** Number
 * A number is a primitive data type used to represent numerical values. 
 */
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

/** Sting
 * A sting is zero or more characters written insdie quotes.
 */
let text = "John Doe";

/** Boolean
 * A Boolean represents one of two values: true or false.
 */
let isTrue = true;
let isFalse = false;

/** Array
 * An array is a special variable that can hold more than one value.
 */
const cars = ["Saab", "Volvo", "BMW"];

/** Object
 * An object literal is a list of property names:values inside curly braces {}.
 */
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/** Function
 * A function is a block of code designed to perform a particular task. A funciton
 * is executed when "something" invokes it (calls it).
 */
function myFunction(1, 2) {
    return 1 * 2;
}

/** Undefined
 * An undefined property indicates that a variable has not been assigned a value, 
 * or not declared at all.
 */
let x;
if (x === undefined) {
  text = "x is undefined";
} else {
  text = "x is defined";
}

/** Null
 * A value that represents the intentional absence of an object value 
 */
let myVariable = null;
console.log(myVariable); // Output: null

/** NaN
 * Stands for "Not a Number". It is a special numeric value that represents
 * an undefined or unrepresentable value.
 */
let result = 0 / 0;  // Dividing zero by zero
console.log(result);  // NaN

/** Infinity 
 * Represents an infinitley large number.
 */
let result = 1 / 0;  // Dividing by zero
console.log(result);  // Infinity

/** -Infinty
 * Represents an infinitley small (or negative) number.
 */
let result = -1 / 0;  // Dividing a negative number by zero
console.log(result);  // -Infinity


/** Difference between primitive/simple && complex data types
 * Primitive/Simple data types is the official term used to refer to the 6 fundemental
 * types in JavaScript (String, Number, BigInt, Boolean, Undefined, Null). While Complex 
 * data types allow the creation of more complex structures like collections of data. 
 * They store refrences to values, rather than the actual value itself. Examples include 
 * objects, arrays, and functions.
 */

/** Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
 *  What does this mean, and how are they different?
 *
 * 
 */

// Primitive Example
let num1 = 10;
let num2 = num1;  // num2 is a copy of num1
num2 = 20;        // Changing num2 does not affect num1
console.log(num1); // 10
console.log(num2); // 20

// Complex Example
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;  // obj2 is a reference to obj1
obj2.age = 30;     // Changing obj2 also changes obj1
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// Primitive: num2 is a copy of num1, so modifying num2 doesn't change num1.
// Complex: obj2 is a reference to obj1, so modifying obj2 also modifies obj1