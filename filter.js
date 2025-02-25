  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const oldEnough = people.filter(p => p.age >= 21);
  console.log(oldEnough);

  let [paul] = people.filter( p => p.name === "Paul");
  console.log(paul);
  
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  const candidates = students.filter( student => {
    let strongExperience = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongExperience.length > 0;
  });
  console.log(candidates);


  const hasFiveYearsExperience = skill => skill.yrsExperience >= 5;
  const experiencedStudent = student => student.skills.filter(hasFiveYearsExperience).length > 0;
  const candidates2 = students.filter(experiencedStudent).map(student => student.name);
  console.log(candidates2);

