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
testMethods(10);
testMethods(100);
testMethods(1000);
testMethods(10000);
testMethods(100000);

function testMethods(numberOfItems) {
    var t0, t1, t2, t3, t4, t5, t6, t7; // timers

    var fillarray = Array(numberOfItems).fill(1);
    var looparray = Array(numberOfItems).fill(1);
    var anewarray = Array(numberOfItems).fill(1);
    var newfarray = Array(numberOfItems).fill(1);
    var mapparray = Array(numberOfItems).fill(1);
    var shpuarray = Array(numberOfItems).fill(1);
    var pousarray = Array(numberOfItems).fill(1);

    console.log(`array of length ${numberOfItems} (in milliseconds)`);

    t0 = performance.now();

    // fill
    fillarray.fill(0); 

    t1 = performance.now();

    // for-loop
    for (let i = 0; i < looparray.length; ++i) { 
        looparray[i] = 0;
    }

    t2 = performance.now();

    // constructor & push loop
    let anewarrayLength = anewarray.length;
    anewarray = Array();
    for(let i = 0; i < anewarrayLength; ++i) {
        anewarray.push(0);
    }

    t3 = performance.now();

    // constructor & fill
    newfarray = Array(newfarray.length).fill(0);

    t4 = performance.now();

    // map
    mapparray = mapparray.map(x => 0)

    t5 = performance.now();

    // shift and push
    let shpuarrayLength = shpuarray.length;
    for(let i = 0; i < shpuarrayLength; ++i) {
        shpuarray.shift();
        shpuarray.push(0);
    }

    t6 = performance.now();

    // pop and unshift
    let pousarrayLength = pousarray.length;
    for(let i = 0; i < pousarrayLength; ++i) {
        pousarray.pop();
        pousarray.unshift(0);
    }

    t7 = performance.now();

    console.log(`>>>
    ${(t1 - t0).toFixed(5)} : fill
    ${(t2 - t1).toFixed(5)} : for-loop
    ${(t3 - t2).toFixed(5)} : constructor & push loop
    ${(t4 - t3).toFixed(5)} : constructor & fill
    ${(t5 - t4).toFixed(5)} : map
    ${(t6 - t5).toFixed(5)} : shift and push
    ${(t7 - t6).toFixed(5)} : pop and unshift
    `);
}
