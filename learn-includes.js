// learn includes from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"This is a search function. If the 'value' parameter exists then it returns true. There is also an optional 'fromIndex' that tells the function where to start searching. You can declare it from the end of the array by using '-3' etc."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"true or false, depending on if the search term exists in the array."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"this is an easy way to search for something specific in an array. This does not support regular expression, so it's for simple things, but it does handle variables nicely."

/* 5. Build your real world example. */
var searchArray = [99, 98, 96, 95, 94, 93, 92, 91, 90, 89];
console.log('93: ' + searchArray.includes(93));
console.log('97: ' + searchArray.includes(97));

var lemon = 96;
console.log('lemon: ' + searchArray.includes(lemon));
