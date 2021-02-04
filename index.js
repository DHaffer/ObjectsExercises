let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};

const crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear]
// After you have created the other object literals, add the astronautID property to each one.

superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
dog.astronautID = 4;
waterBear.astronautID = 5;

superChimpOne.move = function move(){
 let steps = Math.round(Math.random()*10);
 return steps;
}
salamander.move = function move(){
 let steps = Math.round(Math.random()*10);
 return steps;
}
superChimpTwo.move = function move(){
 let steps = Math.round(Math.random()*10);
 return steps;
}
dog.move = function move(){
 let steps = Math.round(Math.random()*10);
 return steps;
}
waterBear.move = function move(){
 let steps = Math.round(Math.random()*10);
 return steps;
}
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

const crewReports = function (animal){
return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

// Start an animal race!

const fitnessTest = function (arr) {
let turnsArray = [];
 for (let i = 0; i < arr.length; i++) {
  let steps = 0;
  let turns = 0;
   while(steps < 20) {
     steps += arr[i].move();
     turns++;
 }
 turnsArray.push(turns);
}
return turnsArray
}

const results = fitnessTest(crew);

const report = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i].name} took ${arr2[i]} turns to take 20 steps`)
  }
}

report(crew, results);