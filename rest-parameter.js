/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */
// execute in terminal
// node rest-parameter.js


// Regular function call 
const sumAll = (a,b,c) => a+b+c;

let sum1 = sumAll(1,2,3);
console.log(sum1);

// Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log(sum2);
// Function using ...rest

const sumAll2 = (a,b,c,...rest) => {
    let sum = a+b+c;
    for(i of rest){
        sum+= i;
    }
    return sum;
};

let sum3 = sumAll2(1,2,3,4,5,6);
console.log(sum3);


/**
 * challenge
 */
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr,...letters) => [...arr,...letters].sort().reverse();
let reverseSort = updateSortReverse(moreMixedLetters,'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);