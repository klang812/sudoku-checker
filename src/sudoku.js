export function sudoku(row) {
  let sortedRow = row.sort();
  if(sortedRow.length !== 9) {
    return false;
  }
  for(let i = 0; i <= 8; i++) {
        if(sortedRow[i] !== (i + 1)) {
            return false;
        }
    }
  return true;
}

export function gridChecker(row1, row2, row3) {
  let gridArr = [row1, row2, row3];
  
  // Length = 9  ---> Check for Length total 9
  // [1, 2] [3, 5, 6, 7] [8, 9] ---> Check each row is 3.
  
  let r1 = gridArr[0]; // console.log(row1)
  let r2 = gridArr[1];
  let r3 = gridArr[2];

  if(r1.length === 3 && 
    r2.length === 3 && 
    r3.length === 3) {
    return true;
  } else {
    return false;
  }
};

// function add(num1, num2){
//   return num1 + num2;
// }
// add(5, 6)
