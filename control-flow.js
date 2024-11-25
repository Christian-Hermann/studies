/** CONTROL FLOW
 * Control flow is the order in which the computer executes statements in a script.
 * Code is run in order from the first line in the file to the last line, Unless the computer
 * runs across the (extremely frequent) structures that change the control flow, such
 * as conditionals and loops. 
 * 
 * Control flow means that when you read a script, you must not only read from start to finish
 * but also look at program structure and how it affects order of execution. 
 */

// If //
// An 'If' statment is used to execute a block of code only if a specified condition is true. Below is the basic syntax.
if (condition) {
    // code to be executed if the condition is true
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




// Switch // 