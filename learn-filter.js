// learn filter from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"This one has lots of optional parameters, but the required one is a callback function. It will pass the element to that function, and it also passes the index of the current element and the whole array if necessary. It also has a value to use as 'this' when the callback function activates."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"the return is an array that contains every value from the original array that passes the callback function. Empty if no elements pass."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"continuing the ideas from every and some, filter is more interesting. Only the elements that return true from the callback function are returned, so we can use this to pull the info that we want out of an array. Because we have control over the callback function, we can get as detailed as we want. Words of certain length, containing certain characters, excluding certain characters"

/* 5. Build your real world example. */
var entries1 = ["alphabet", "anthem", "elephant", "banana", "cream cheese", "headbands"];
var entries2 = ["lemons", "anthem", "elephnt", "banana", "cream cheese", "hedbands"];
var entries3 = []
var entries4 = [4]
var bwords = ["baba", "bbbb", "bcbc", "bddd", "buiter"]
var aWords = []


function containsA (value) {
    for(let i = 0; i < value.length; ++i) {
        if (value[i] === "a") {return true;}
    }

    return false;
}

aWords = entries2.filter(containsA)
console.log(aWords)

aWords = aWords.concat(entries3.filter(containsA))
console.log(aWords)

aWords = aWords.concat(entries4.filter(containsA))
console.log(aWords)

aWords = aWords.concat(bwords.filter(containsA))
console.log(aWords)