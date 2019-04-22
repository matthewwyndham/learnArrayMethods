// learn array flat() from mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// polyfill
if (!Array.prototype.flat) {
    Array.prototype.flat = function() {
      var depth = arguments[0];
      depth = depth === undefined ? 1 : Math.floor(depth);
      if (depth < 1) return Array.prototype.slice.call(this);
      return (function flat(arr, depth) {
        var len = arr.length >>> 0;
        var flattened = [];
        var i = 0;
        while (i < len) {
          if (i in arr) {
            var el = arr[i];
            if (Array.isArray(el) && depth > 0)
              flattened = flattened.concat(flat(el, depth - 1));
            else flattened.push(el);
          }
          i++;
        }
        return flattened;
      })(this, depth);
    };
  }

/* Questions to understand: */
/* 1. What does it do? make sure to explain all the parameters. If it has a function as a parameter, make sure to explain all of the parameters for that function. */
"flat() takes a multi-dimensional array and concatenates all sublists in place up to the depth (which can be passed in as a parameter, or is just 1)."

/* 2. Does it edit the current array? */
"non-destructive"

/* 3. What does it return? */
"the new flattened array is returned"

/* 4. How can I use this? Come up (not one off the internet) with a small real world example and explain it. */
"storing data in nested arrays is convenient to keep things logically connected, if you want to access every value to do work on the set as a whole (perhaps check how many times a keyword appears), it's convenient to use flat() and then a simple loop, rather than having use nested loops. Especially if the data is not consistent. (although why the data would be inconsistent I don't know)"

/* 5. Build your real world example. */
var terry = ["terry", "blond", ["cats", "dogs", "eggs"], "blue", "5'11", "200", "35"];
var john = ["john", "brown", "6'", "brown", "150", ["games", "water", "weightlifting"], "25"];
var matt = ["matt", "curly", "blue", "6'", "175", "25", ["candy", "caffeine", "cats"]];
var henry = ["henry", "20", "straight", "4'11", ["toblerone", "cats", "dolphins"], "brown"];

var team1 = ["team 1", terry, john];
var team2 = [ matt, "team 2", henry];

var setOfTeams = ["all the teams", team1, team2];

console.log("full")
console.log(setOfTeams);
console.log("\nflat 1:")
console.log(setOfTeams.flat(1));
console.log("\nflat 2:")
console.log(setOfTeams.flat(2));
console.log("\nflat 3:")
console.log(setOfTeams.flat(3));

// checking every value
var flatlist = setOfTeams.flat(4);

var numberOfCats = 0;

for (let e of flatlist) {
    if (e === "cats") {
        numberOfCats += 1;
    }
}

console.log("\n" + numberOfCats + " people like cats");

var twentyfiveyearolds = 0;

for (let e of flatlist) {
    if (e === "25") {
        twentyfiveyearolds += 1;
    }
}

console.log("\n" + twentyfiveyearolds + " people are 25 years old");
