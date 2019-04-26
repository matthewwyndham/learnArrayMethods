// Polyfill for flat (for running this in Node or in VSCode 'Code Runner')
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
// end of Polyfill

// object number one
const carBefore = [
    { key: "year",  value: "2016"     },
    { key: "make",  value: "Porsche"  },
    { key: "model", value: "911 R"    },
    { key: "color", value: "white"    },
    { key: "msrp",  value: "$184,900" }
];

// object number two
const personBefore = [
    { key: "name", value: "jared"   },
    { key: "age",  value: "old"     },
    { key: "food", value: "bacon"   },
    { key: "food", value: "pizza"   },
    { key: "food", value: "cubby's" },
    { key: "food", value: "wings"   },
    { key: "food", value: "shakes"  }
];

// I thought the expected output was a map, but it's not
function convert2map (inputArray) {
    let m = new Map();
    for (let e of inputArray) {
        m.set(e.key, e.value);
    }
    return m;
}

// the output format is an object.
function convert2object (inputArray) {
    let ob = new Object();
    for (let e of inputArray) {
        if (typeof ob[e.key] !== 'undefined') {
            ob[e.key] = (Array(ob[e.key])).flat().concat(Array(e.value));  
        }
        else {
            ob[e.key] = e.value;
        }
    }
    return ob;
}


// car shape to new shape without price
var carAfter = convert2object(carBefore);
delete carAfter.msrp;
console.log(carAfter);

// person shape to new shape with an added property
var personAfter = convert2object(personBefore);
personAfter["kids"] = "gazillions";
console.log(personAfter);
