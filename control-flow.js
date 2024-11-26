/** CONTROL FLOW:
 * Control flow is the order in which the computer executes statements in a script.
 * Code is run in order from the first line in the file to the last line, Unless the computer
 * runs across the (extremely frequent) structures that change the control flow, such
 * as conditionals and loops. 
 * Control flow means that when you read a script, you must not only read from start to finish
 * but also look at program structure and how it affects order of execution. 
 */

// If //
// An 'If' statement is used to execute a block of code only if a specified condition is true. Below is the basic syntax.
if (condition) {
    // code to be executed if the condition is true
  } 

// Example:
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
}
 

// Else-if //
// An 'Else-if' statement is a control structure that allows you to execute different blocks of code based on a 
// condition being either true or false. 
if (condition) {
    // code block executed if the condition is true
  } else {
    // code block executed if the condition is false
  }

// Example:

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


// Else //
// An 'Else' statement is used in conjuction with an 'if' statment to specify a block of
// code that should be executed when the condition in the 'if' statement evaluates to false. 
if (condition) {
    // code to execute if condition is true
  } else {
    // code to execute if condition is false
  }

// Example: 

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// Switch // 
// A switch statement is a control flow statement that allows you to evaluate an expression and 
// execute different code blocks based on the value of an expression. But it's typically used when 
// you have mulitple possible conditons based on the same variable or expression. 
// It is more efficent and easier to read than using multiple if-else statements, especially when
// you have several possible values to check for a single variable.
switch (expression) {
    case value1:
      // Code to execute if expression === value1
      break;
    case value2:
      // Code to execute if expression === value2
      break;
    // ... more cases
    default:
      // Code to execute if no case matches
   } 

// Example;

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}