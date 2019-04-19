// learn slice from mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"Returns a *shallow* copy of a part of the array from begin (0) to end (5) i.e. array.slice(0, 5) not including the end."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"this will return a copy of the array, just the values you specify."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"This is a super useful function, and it's much more functional than .pop() or .push(). Functional programming eschews changing-state and mutable data."
"I've already used this function in other learning exercises too"
"Slice works on strings as well as any other kind of array. You can search through a string until you find a delimiter and then slice there. Like if you are designing a language and want to have a comment character."

/* 5. Build your real world example. */

var myString = "let this->children = 99 # this is a comment after my code"
var noComments = ""

