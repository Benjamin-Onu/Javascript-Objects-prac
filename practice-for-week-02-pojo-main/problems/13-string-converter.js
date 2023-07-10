/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here
  let arrCount = {};
  //Helper function
  function updateCount(obj, name1){
    let currentCount = obj[name1];
    currentCount += 1;
    return currentCount;
  }
  let array = string.split('');
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
module.exports = stringConverter;