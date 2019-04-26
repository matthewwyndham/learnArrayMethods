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

// same as convert2object, but functional. Uses "reduce".
function fconvert2object (inputArray) {
  return inputArray.reduce((ob, e) => {
    if (typeof ob[e.key] !== 'undefined') { // something is already there! (an array or a value)
      if (!Array.isArray(ob[e.key])) ob[e.key] = Array(ob[e.key]); // make it an array once
      ob[e.key] = ob[e.key].concat(e.value); // just keep adding values
    }
    else { // nothing is in that spot yet
      ob[e.key] = e.value;
    }
    return ob; // pass the results on
  }, new Object());
}

// car shape to new shape without price
var carAfter = fconvert2object(carBefore);
delete carAfter.msrp;
console.log(carAfter);

// person shape to new shape with an added property
var personAfter = fconvert2object(personBefore);
personAfter["kids"] = "gazillions";
console.log(personAfter);
