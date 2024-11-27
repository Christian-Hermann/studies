/** FUNCTIONS:
 * A function is a block of reusable code that is designed to perform a certain task. Functions
 * allow you to group code together and execute it whenever needed. You can define a function once 
 * and call it mulitple times throughout a program.
 */


// Two phases to using a function //

// Function Declaration //
// A statment in programming that defines the name, parameters, and return type of a function.

function functionName(parameters) {
  // function body: the code that will run when the function is called
}
// Example //
function greet(name) {
    console.log("Hello, " + name + "!");
  }

// Function Execution //
// Is the process of running a block of code defined as a a function, where the code within
// the function is activated and performs it's intended operation. 

functionName(arguments);
// Example //
greet("Alice");  // Output: "Hello, Alice!"


// what is the difference a function's and arguments PASSED to a function //

// Parameters //
// Variable that are listed in the function definition. They act as placeholders for the values 
// that will be passed into the function when it is called. 

// Arguments // 
// The values that are passed into the function when it is called. They are assigned to the 
// parameters in the function definition.

// Function Declaration with Parameters
function greet(name, age) {
    console.log("Hello, " + name + "! You are " + age + " years old.");
  }
  
  // Calling the Function with Arguments
  greet("Alice", 30);  // Arguments: "Alice" and 30
  greet("Bob", 25);    // Arguments: "Bob" and 25
  

// Syntax for a named function //
function functionName(parameters) {
    // function body: code that will execute when the function is called
  }

// How do we assign a function to a variable // 
// We create a function expresssion, where the function is defined and immediatley 
// assinged to a variable.
const variableName = function(parameters) {
    // function body: code to be executed when called
  };

// Example //
  const greet = function(name) {
    console.log("Hello, " + name + "!");
  };


// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
  
// Inputs (Parameters) //
// Parameters are placeholders in the function definition that allow you to pass
// values into the function.

// Outputs (Return Values) // 
// The output is what a function returns after performing an operation.

// // Function that takes two numbers as input and returns their sum
function add(a, b) {
return a + b;  // Output: the sum of 'a' and 'b'
  }
  
// Specifying Inputs (arguments) and Output (return value)
 let result = add(5, 3);  // Inputs: 5 and 3, Output: 8
  
  console.log(result);  // Output: 8

  
// Scope: Functions can see and modify variables in parent or global scopes. The inverse 
// is NOT true. Variables from a function cannot be accessed by code outside that function.

// Scope determines the accessibility (visibility) of variables.
// Global Scope // Function Scope // Block Scope // 

// Global Scope //
// Variables declared outside of any function or block. They are accesible throughout the 
// entire code (both inside and outside of functions).
let globalVar = "I am a global variable";  // Global scope

function greet() {
  console.log(globalVar);  // Accessing global variable inside the function
}

greet();  // Output: "I am a global variable"
console.log(globalVar);  // Output: "I am a global variable"

// Function Scope //
// Variables declared inside a function are local to that function and are in the function
// scope. These variables can only be accessed within the function they are declared. 
// They are not visible outside f the function.
function greet() {
    let localVar = "I am a local variable";  // Function scope
    console.log(localVar);  // Accessible inside the function
  }
  
  greet();  // Output: "I am a local variable"
  console.log(localVar);  // Error: localVar is not defined

// Block Scope //

// Closures // 
