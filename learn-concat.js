// learn concat from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

/* Understand object references and how they work with concat*/

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, 
      make sure to explain all of the parameters for that function. */
"call on one array and pass in another."
"The array that you pass in will be added to the end of the array."

/* 2. Does it edit the current array? */
"Non-destructive"

/* 3. What does it return? */
"Returns a new array that is the combination of both original arrays."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example 
      and explain it. */
"Let's say you have to wrap your important code in some buffer code. An easy way to do this"
"is to have a list of garbage data that you can wrap your important data in. Just use .concat" 
"to put the junk string on the front and back!"

/* 5. Build your real world example. */
var sensitiveCode = ['a', 'b', 'c', 'd', 'e', 'f'];

function addBuffer(list) {
    var bufferCode = ['1', '2', '3', '4', '5', '6'];
    return bufferCode.concat(list).concat(bufferCode);
}

console.log(addBuffer(sensitiveCode));