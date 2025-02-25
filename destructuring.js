/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */
// execute in terminal
// node destructuring.js


// Destructuring arrays
let arr = [1,2,3];

let [first,second,third] = arr;

console.log(first,second,third);

// Destructuring objects
let ages = {
    ali: 30,
    ahmad: 21,
    salam: 20
};

let {ali,ahmad,salam} = ages;
console.log(ali,ahmad,salam);
// Destructuring subsets
let languages = ["english","german","spanish","arabic","france"];
let [firstLang, secondLang] = languages;
console.log(firstLang,secondLang);

let[,,thirdLang,fourthLang] = languages;
console.log(thirdLang, fourthLang);


let languages2 = {
    hassan: "english",
    sara: "spanish",
    ahmad: "arabic",
    lila: "france"
};

let {hassan, lila} = languages2;
console.log(hassan,lila);

// Using rest parameter syntax

let[lang1, lang2, ...rest] = languages;
console.log(lang1, lang2, rest);


let languages3 = {
    hassan2: "english",
    sara2: "spanish",
    ahmad2: "arabic",
    lila2: "france"
};

let {hassan2, sara2, ...restLang} = languages3;
console.log(hassan2, sara2, restLang);



/**
 * challenge
 */

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr,student) => {
    let i = 0;
    for(let stu of arr){
        if(stu.name === student){
            break;
        }else{
            i++;
        }
    }
    return arr[i].subjects;
}

let [first, second, ...rest] = makeList(students, "John");
console.log(first, second, rest);