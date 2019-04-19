// learn every from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"test every element in the array if it passes the callback function test."
/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"true/false"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */


/* 5. Build your real world example. */
var entries1 = ["alphabet", "anthem", "elephant", "banana", "cream cheese", "headbands"];
var entries2 = ["lemons", "anthem", "elephant", "banana", "cream cheese", "headbands"];
var entries3 = []
var entries4 = [4]

function containsA (value) {
    for(let i = 0; i < value.length; ++i) {
        if (value[i] === "a") {return true;}
    }

    return false;
}

console.log(entries1.every(containsA));
console.log(entries2.every(containsA)); // one entry makes this return false
console.log(entries3.every(containsA)); // empty array is true
console.log(entries4.every(containsA)); // wrong type still returns false