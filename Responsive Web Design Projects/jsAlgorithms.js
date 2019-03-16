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
			oppNum -= count;
			arr[count] = arr[oppNum];
			arr[oppNum] = num;
			count++;
		}  	
	});
	return arr;
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);