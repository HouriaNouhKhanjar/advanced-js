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



let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let sumMarks = 0;
    let countMarks = 0;
    for( stu of arr) {
        if(stu.results[subject]){
              sumMarks += stu.results[subject];
              countMarks ++;
        }
    }
        return sumMarks/countMarks;
};

let averageMarks = averagePoints(students, "maths");
console.log(averageMarks);
