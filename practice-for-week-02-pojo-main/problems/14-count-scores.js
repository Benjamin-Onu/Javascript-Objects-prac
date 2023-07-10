/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  // Your code here
  let names = {};
 
  //Helper function
  function updateScore(obj, name1, score1){
    let sum = obj[name1];
    sum += score1;
    return sum;
  }

  people.forEach(function(obj){
    let { name , score } = obj;
    let nameList = Object.keys(names);
    //Check if the incoming name already exists in the new object
    if(!nameList.includes(name)){
      //Create a new key in the new object and assigns the score as it's starting value.
      names[name] = score;
    }else{
      names[name] = updateScore(names, name, score);
    }
  })
  //The main function will have the for loop
  /*for(let indx = 0; indx < people.length; indx++){
    let obj = people[indx];
    //Destructure the object 
    let { name , score } = obj;
    let nameList = Object.keys(names);
    //Check if the incoming name already exists in the new object
    if(!nameList.includes(name)){
      //Create a new key in the new object and assigns the score as it's starting value.
      names[name] = score;
    }else{
      names[name] = updateScore(names, name, score);
    }
  }*/

  return names;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
