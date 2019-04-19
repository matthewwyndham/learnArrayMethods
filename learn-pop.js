// learn pop from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// 1. removes the last element of the array
// 2. destructive
// 3. returns the last element of the array (undefined if empty)
// 4. if you get user input from the command line and then split on spaces you'll still have a newline character at the end. You can remove it with pop
// 5.
var userInput = "I love to have lemons \n"
console.log(userInput)

var splitOnSpace = userInput.split(" ")
console.log(splitOnSpace)

var splitInput = splitOnSpace.pop()
console.log(splitOnSpace)
console.log(splitInput)