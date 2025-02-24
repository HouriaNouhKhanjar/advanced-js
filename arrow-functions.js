/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    return a+b;
}

let sum = addTwoNumbers(4,5);
console.log(sum);
// execute in terminal
// node arrow-functions.js

// Arrow Function With Parameters
const addTwoNumbers1 = (a,b) => {
    return a+b;
}

let sum1 = addTwoNumbers1(4,5);
console.log(sum1);

// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a,b) => (a+b);
const addTwoNumbers2 = (a,b) => a+b;

let sum2 = addTwoNumbers2(4,5);
console.log(sum2);

// Implicit Returns
const writeMessage = message => console.log(message);

writeMessage("Hey There!!!");

const sayHi = () => console.log("Hiiii");
sayHi();

// Returning Multiple Lines
const multipleLine = () => (
    `<p>
    Hello
    </p>`
);

console.log(multipleLine());