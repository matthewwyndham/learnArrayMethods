// some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"Some is similar to Every, except Some only tests for at least one element that passes the function."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"true/false"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"I did a similar situation to my Every example, but showcasing a little of the difference between the two. It's interesting that the empty array returns false in this case."

/* 5. Build your real world example. */
var entries1 = ["alphabet", "anthem", "elephant", "banana", "cream cheese", "headbands"];
var entries2 = ["lemons", "anthem", "elephnt", "bnn", "crem cheese", "hedbands"];
var entries3 = [];
var entries4 = [4];

function containsA (value) {
    for(let i = 0; i < value.length; ++i) {
        if (value[i] === "a") {return true;}
    }

    return false;
}

console.log(entries1.some(containsA));
console.log(entries2.some(containsA)); // one entry makes this return false
console.log(entries3.some(containsA)); // empty array is false in this case
console.log(entries4.some(containsA)); // wrong type still returns false