// learn push from MDN 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Questions to understand:
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
*/ 
"Adds one (or more) elements to the end of an array. myArray.push(element1, element2, ..., elementN)"

myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray)

myArray.push(6, 7, 8)
console.log(myArray)

/* 2. Does it edit the current array? */
"Destructive"

/* 3. What does it return? */
"returns the length of the new array"

console.log(myArray.push(9, 10, 11))

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"if I only want specific values from a database I can have a callback function that collects those values into one array without worrying about position. Instead of iterating I can just keep pushing forever."

/* 5. Build your real world example. */
var database = [["john", 11, "hello friends"], // ["Name", "Age", "Catchphrase"]
                ["kerry", 12, "I love books"],
                ["lemon", 2, "make lemonade"],
                ["doug", 12, "I have a dog"]]

var ages = []
database.forEach(e => ages.push(e[1]))
console.log(ages)