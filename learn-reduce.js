// reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
// Have an example both with and without a starting accumulator value

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"This function is very similar to map, but instead of keeping track of each value it just keeps track of one value that it keeps available to each iteration of the function. .reduce() takes a callback() function that takes (accumulator, currentValue, currentIndex, and initialValue) the last two of which are optional. It then expects a new accumulator value from your callback function each time."

/* 2. Does it edit the current array? */
"non-destructive (unless your callback function gets crazy)"

/* 3. What does it return? */
"the accumulated value from each iteration"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */


/* 5. Build your real world example. */
