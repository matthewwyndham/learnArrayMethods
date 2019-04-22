// learn foreach from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"you pass in a function and this method executes the function on each array element in ascending order. The range of execution is determined at the start, so you can't append stuff and have it keep running on that stuff."

/* 2. Does it edit the current array? */
"the forEach function itself does nothing, but the callback function you define can modify the current array."

/* 3. What does it return? */
"Return value is 'undefined'"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"you can run functions on each member of the array without changing the array."

/* 5. Build your real world example. */
var a1 = [0, 1, 2, 3, 4, 5];

a1.forEach(e => console.log(e**e));

console.log(a1);

