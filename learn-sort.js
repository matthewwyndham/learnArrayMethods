// learn sort from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/* Have an example both with and without a function */

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"this function takes an array and sorts it (using a compare function you can provide, otherwise lexicographical). It will access the array multiple times (I think it uses a mergesort usually)"
"The compare function: given A and B, if compare(A, B) returns:"
"less than 0, A comes before B"
"0, A and B are unchanged"
"greater than 0, B comes before A"

/* 2. Does it edit the current array? */
"destructive"

/* 3. What does it return? */
"the sorted array"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"sorting is pretty standard, lots of applications and lots of things to consider. If input comes in as a random order, I can sort the data so that it's faster to access with a binary search or something like that."

/* 5. Build your real world example. */
var userInput = [1];
userInput.push(2);
userInput.push(99);
userInput.push(45);
userInput.push(23);
userInput.push(12);
userInput.push(76);
userInput.push(1000);
userInput.push(0);
userInput.push(235);

console.log(userInput);

userInput.sort((a, b) => a - b); // here is the sort

console.log(userInput);

userInput.sort(); // lexicographical sort

console.log(userInput);
