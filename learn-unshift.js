// learn unshift from mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"This is like the index 0 version of pop, instead of adding to the end of your array, it adds to the beginning."
"The key to understanding this one is that it creates an array and then appends the new array to the front of your old array. So if you pass in 'myArray.unshift(3, 2, 1)' and myArray = [4, 5, 6, 7] you'll get [3, 2, 1] put together with [4, 5, 6, 7] = [3, 2, 1, 4, 5, 6, 7]."

/* 2. Does it edit the current array? */
"Destructive"

/* 3. What does it return? */
"It returns the length of the array"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"If you have two arrays that you want to destructively move things between quickly, you could use a combination of pop and unshift."

/* 5. Build your real world example. */
var array1 = [1, 2, 3, 4, 5, 6]
var array2 = [12, 13, 14, 15, 16, 17, 18]

console.log(`1: ${array1}\n2: ${array2}`)

array2.unshift(array1.pop()) // 6 -> array2
array2.unshift(array1.pop()) // 5 -> array2
array2.unshift(array1.pop()) // 4 -> array2

console.log(`1: ${array1}\n2: ${array2}`)