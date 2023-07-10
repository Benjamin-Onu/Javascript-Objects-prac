/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let arrCount = {};
 
  //Helper function
  function updateCount(obj, name1){
    let currentCount = obj[name1];
    currentCount += 1;
    return currentCount;
  }
  array.forEach(function(obj){
    let objKeys = Object.keys(arrCount);
    //Check if the incoming name already exists in the new object
    if(!objKeys.includes(obj)){
      //Create a new key in the new object and assigns the score as it's starting value.
      arrCount[obj] = 1;
    }else{
      arrCount[obj] = updateCount(arrCount, obj);
    }
  })
   

  return arrCount;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
