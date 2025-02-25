
  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

let nums = [0,1,2,3,4];

let sum = nums.reduce((acc, curr) => acc+curr); //excute 4 times, default value is the first elment in array

console.log(sum);


let sum2 = nums.reduce((acc, curr) => acc+curr, 0); //second parameter is the initial value so iterates 5 times 

console.log(sum2);



const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  const totalYrsExperience = teamMembers.reduce((acc, curr) => acc+curr.yrsExperience ,0); // must use the initial value because the first elment in array is an object
  console.log(totalYrsExperience);
  // Grouping by a property, and totaling it too
  const experienceByprofession = teamMembers.reduce((acc,curr)=>{
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    }else{
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});
  console.log(experienceByprofession);



  /**challenge */

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
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, curr) => {
        if(!acc.max || (curr.results.english && acc.max < curr.results.english)){
            let {english} = curr.results;
            let {name} = curr;
            acc={
                name: name,
                max: english
            };
        }
    return acc;
} ,{});
console.log(biggest);
