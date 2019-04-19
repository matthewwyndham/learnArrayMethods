// learn shift from mdn 
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function.
*
* Given an array, shift will remove the first element of the array, return it, and reduce the length of the array.
*/

/* 2. Does it edit the current array?
*
* Destructive
*/

/* 3. What does it return?
*
* The first element of the array (or undefined on an empty array)
*/

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it.
*
* something you can do with .shift() that you can't do with .forEach() is add stuff to your array while you are looping through it.
*/

/* 5. Build your real world example. */

var sodas = ["konnichiwa", "world", "I am number 3"]

var copyOfSodas = sodas
while((i = copyOfSodas.shift()) !== undefined) {
    console.log(`value: ${i}`)
    if (i.length > 1) {copyOfSodas.push(i.slice(0, (i.length - 1)))}
}

// this is basically the forEach loop.
// update: after reading the .forEach() description on MDN it actually uses an iterator. If you add values at the end of the list in forEach they won't be visited. That means the end was already determined at the start of the function when the iterator start and end conditions were added. Also, deleting an item in the array will offset.