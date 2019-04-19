// learn pop from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"removes the last element of the array"

/* 2. Does it edit the current array? */
"destructive"

/* 3. What does it return? */
"returns the last element of the array (undefined if empty)"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"if you get user input from the command line and then split on spaces you'll still have a newline character at the end. You can remove it with pop"

/* 5. Build your real world example. */
var userInput = "I love to have lemons \n"
console.log(userInput)

var splitOnSpace = userInput.split(" ")
console.log(splitOnSpace)

var splitInput = splitOnSpace.pop()
console.log(splitOnSpace)
console.log(splitInput)