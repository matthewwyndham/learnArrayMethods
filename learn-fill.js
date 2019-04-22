// learn fill from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

// node import
const { PerformanceObserver, performance } = require('perf_hooks');

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"fill() takes a value to fill the array with, and a start and end position. These positions can be negative and it will count from the end of the array instead of the beginning. This cannot exceed the original length of the array."

/* 2. Does it edit the current array? */
"destructive (mutable)"

/* 3. What does it return? */
"returns the filled array, which is also the original array"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"I couldn't find a useful application of this function except for when you specifically want to fill an array with a specific number. Even then, being able to specify a start and end position seems unnecessary, but it is a good self-describing function. The only benefit is that it's faster than creating a new array."

// see https://stackoverflow.com/a/23326623

"after testing though, it appears the fill function actually takes much longer."

/* 5. Build your real world example. */
var fillarray = [1, 2, 3, 4, 5];
var looparray = [1, 2, 3, 4, 5];
var anewarray = [1, 2, 3, 4, 5];
var newfarray = [1, 2, 3, 4, 5];
var t0, t1, t2, t3, t4, t5, t6;

console.log(fillarray);

t0 = performance.now(); // timer

// fill
// clear the array (supposedly fast)
fillarray.fill(0); 

t1 = performance.now();

// for-loop
// a regular for loop to clear the array
for (let i = 0; i < looparray.length; ++i) { 
    looparray[i] = 0;
}

t2 = performance.now();

// constructor & push loop
// create a new array and then push a certain number of zeros on there
let anewarrayLength = anewarray.length;
anewarray = Array();
for(let i = 0; i < anewarrayLength; ++i) {
    anewarray.push(0)
}

t3 = performance.now();

// constructor & fill
// constructor with length of original array, then fill with 0
newfarray = Array(newfarray.length).fill(0);

t4 = performance.now();

console.log(`(in milliseconds)
${fillarray} : ${(t1 - t0).toFixed(5)} : fill
${looparray} : ${(t2 - t1).toFixed(5)} : for-loop
${anewarray} : ${(t3 - t2).toFixed(5)} : constructor & push loop
${newfarray} : ${(t4 - t3).toFixed(5)} : constructor & fill`);