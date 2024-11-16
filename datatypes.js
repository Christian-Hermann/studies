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

/** Infinity && -Infinity
 * 
 * 
 */

/** Difference between primitive/simple && complex data types
 * 
 * 
 */

/** Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
 *  What does this mean, and how are they different?
 * 
 * 
 * 
 */