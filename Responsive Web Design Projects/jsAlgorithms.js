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

function reverseArray(arr) {
	let newArr = [];
	arr.forEach(elem => {
		newArr.unshift(elem);
	});
	return newArr;
}

function reverseArrayInPlace(arr) {
	for (let i=0; i < arr.length; (i === 0) ? (i + 2) : (i + 1)) {
		arr.unshift(arr[i]);
		 arr.pop();
	}
	return arr;
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);