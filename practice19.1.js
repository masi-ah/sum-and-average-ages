const people = {
  ali: 23,
  jay: 31,
  reza: 32
}
const peopleAges = Object.values(people);
let sumOfPeopleAges = 0
peopleAges.forEach((personAge)=>{
  sumOfPeopleAges = sumOfPeopleAges + personAge
})
const averagePeopleAges = sumOfPeopleAges / peopleAges.length
console.log(averagePeopleAges)


const humanAges = Object.values(people);
const sumOfHumanAgesAverage = humanAges.reduce((sum, age) => sum + age, 0) / humanAges.length;
console.log(sumOfHumanAgesAverage)