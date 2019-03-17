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