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

  return gridArr;
};

// function add(num1, num2){
//   return num1 + num2;
// }
// add(5, 6)
