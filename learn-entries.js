// learn entries from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
".entries() takes no parameters, but returns an iterator that will .next() through the array. This will also return the value along with the position in the array. This is for quickly making an iterator out of an array."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"an iterator version of the array. Calling .next() on the iterator consumes it and you have to use .entries() again."

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"This could be used as a search through an array if you want to avoid a loop. Instead it uses recursion. (Although why you would want to avoid a loop I don't know, this is a little contrived.)"

/* 5. Build your real world example. */

// knuth shuffle, credit to https://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
// end of knuth shuffle

var searchables = [13, 7, 16, 15, 5, 12, 9, 6, 2, 18, 17, 11, 14, 8, 10, 4, 0, 3, 20, 1, 19];

searchables = shuffle(searchables);

var aIterator = searchables.entries();
let searchTerm = Math.floor(Math.random()*21);

console.log(`Looking for ${searchTerm} in ${searchables}`);

function recursiveIteratorSearch(i, s) {
    let current = i.next().value;
    // console.log(current);

    if (current === 'undefined') {
        return "doesn't exist";
    }
    else if (current[1] === s) {
        return `found it at index ${current[0]}`;
    }
    else {
        return recursiveIteratorSearch(i, s);
    }
}

console.log(recursiveIteratorSearch(aIterator, searchTerm));

/////////////////////////////////////////////
/////////////////////////////////////////////
// aside
var comments = 
"After looking into this function I dove into iterators a little bit and created this codepen:";
// https://codepen.io/wyndhammer/pen/yrxQbp
"This is a trivial challenge in html and javascript, but generator functions that work in any situation are quite fascinating. A JavaScript Iterator is similar to a generator function."