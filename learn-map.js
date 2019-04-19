// map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"this function is similar to forEach, but the idea is that you really want a new array created after the function is run. It's hard to keep the results of forEach, but it's easy to keep the results of map. Parameters require a callback function that accepts the current value (and optional index, the full array) and a 'this'"

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"a new array based on the input array and your callback function run on each array value."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"if my data is split (in a nice way) between three different arrays (perhaps in an SQL table or something), I can use a map that snatches the index and grab information from other arrays."

/* 5. Build your real world example. */
var dogs = ["doberman", "dachshund", "french bulldog", "dalmation"]
var dispositions = ["friendly", "angry", "happy", "protective"]
var age = [5, 6, 2, 12]

var fullDogs = dogs.map((e, i) => [e, dispositions[i], age[i]])
console.log(fullDogs)


// bonus
// I tried to do this with forEach and it was a struggle
// var myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray.map(e => e+1)) // it's just that simple to add 1 to each value with map