// chessboard with variable size complete
function chessBoard(len, wid) {
  	// declare variables for starting row and odd/even rows
	let rowStart = " #";
	let rowOdd = "\n# ";
  	let rowEven = "\n #";
  	let boardString = "";
  
  	// loop through the defined width to build the columns out
 	for (let i = 0; i < (wid - 1); i++) {
    	rowStart += " #";
      	rowOdd += "# ";
        rowEven += " #";
        //console.log(rowStart);
    }
  
  	// loop through the defined length to build the rows out
  	for (let j = 0; j < len; j++) {
    	if (!j) {
          boardString = rowStart;
        } else if (!(j % 2)) {
          boardString += rowEven;
        } else {
          boardString += rowOdd;
        }
  	}
  console.log(boardString);
}

// reverses an array using a new empty array 
function reverseArray(arr) {
	let newArr = [];
	arr.forEach(elem => {
		newArr.unshift(elem);
	});
	return newArr;
}

// reverses an array without the help of a new array
function reverseArrayInPlace(arr) {
	let oppNum = arr.length - 1;
	let count = 0;
	arr.forEach( num => {
		if ( count < Math.floor(arr.length / 2)) {
			let oppNum = arr.length - 1;
			oppNum -= count;
			arr[count] = arr[oppNum];
			arr[oppNum] = num;
			count++;
		}  	
	});
	return arr;
}

// turns an array into a list data structure
function arrayToList (arr) {
	let list = null;
  	for (let i = arr.length -1; i >= 0; i--) {
    	list = { value: arr[i], rest: list };
    }
  	return list;
}

// turns a list into an array
function listToArray (list) {
	let listArr = [];
  	listArr.push(list.value);
  	let tempList = list.rest;
  	while (tempList) {
    	listArr.push(tempList.value);
      	tempList = tempList.rest;
    }
  	return listArr;
}

// helper function that creates new list and adds an element to the front of the input list
function prepend (value, list) {
	return { value, rest: list};
}

// returns the value from the list using the specified index
function nth (list, index) {
	if (!list) return undefined;
  	else if (index === 0) return list.value;
  	else return nth(list, index-1);
}

// compares two values or objects and checks for deep equality
function deepEqual (valOne, valTwo) {
	if ((valOne !== null) && (valTwo !== null) && (typeof valOne && typeof valTwo === "object")) {
    	
      	// take the keys for both objects and store them in seperate arrays
      	let objArrOne = Object.keys(valOne);
      	let objArrTwo = Object.keys(valTwo);
      	
      	let keyCounter = 0;
      	// loop through the arrays and compare the keys to see if they are the same
      	for (let i=0; i < objArrOne.length; i++) {
          // if they are the same, deepEqual will be run recursively to compare the values of each key
        	if (objArrOne[i] === objArrTwo[i]) {
            	keyCounter++;
            }
				}
				// if the arrays are equal, recursively check each value in the objects for equality
      	if (keyCounter === objArrOne.length) {
          	let objEqual = true;
          	let isDeepEqual = true;
        	while (objEqual) {
              	for (let j=0; j < objArrOne.length; j++) {
                	if (!deepEqual(valOne[objArrOne[j]], valTwo[objArrTwo[j]])) {
                    	objEqual = false;
                      	isDeepEqual = false;
                    }
                }
              	objEqual = false;
            }
          	if (isDeepEqual) return true;
          	else return false;
        } else return false;
    } else {
			// check if two non-object values are equal
    	return (valOne === valTwo);
    }
}

// short function to 'flatten' arrays into one
let randArr = [[1, 2, 3], [4, 5], [6]];
let redArr = arrays.reduce( (acc, cur) => acc.concat(cur) );

// higher-order loop function 
function loop (val, test, update, body) {
  for (val; test(val); val = update(val)) {
    body(val);
  }	
}

loop(3, n => n > 0, n => n - 1, console.log);

// tests every element in an array and returns true if all pass
function every(array, test) {
  let allTrue = true;
  array.forEach( elem => {
  	if (!test(elem)) return allTrue = false;
  });
  return allTrue;
}

// uses the some array method to test every array element
function everySome(array, test) {
	if (array.some( elem => !test(elem) )) return false;
  	else return true;
}

// loops through array of scripts to pinpoint language based on char unicodes
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// function that lets you count array properties by specified function
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// uses the previous script functions to find the dominant text direction based on text input in different langauges
function dominantDirection(text) {
  let scripts = countBy(text, char => {
  let script = characterScript(char.codePointAt(0));
  return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  
  if (scripts.length > 1) {
  	let domDir = scripts.reduce((prev, curr) => {
    	return prev.count < curr.count ? curr.name : prev.name;
    });
    return domDir;
  } else return scripts[0].name;
}