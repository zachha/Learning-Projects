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
