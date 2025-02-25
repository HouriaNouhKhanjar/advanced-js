  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3];

let results = [];

for (num of nums){
  results.push(num*2);
}

console.log(results);


// Using map()

const multi = (num) => num*2;

//callback
let results2 = nums.map(multi);

console.log(results2);

// Simplified w/ map()

let results3 = nums.map(num => num*2);
console.log(results3);


// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

let results4 = students.map(student => [student.id,student.name]);
let results5 = students.map(student => { return { 
  id:student.id,
  name:student.name
}});
let results6 = students.map(student => {
  return {
    ...student,
    age: 20
  }
});

console.log(results4);

console.log(results5);

console.log(results6);


/**
 * challenge
 */

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
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

let [john, ...rest] = students.map( student => [student.name, student.results]);


console.log(john);
console.log(rest);


