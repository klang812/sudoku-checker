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
  // .join()
  let gridArr = [row1, row2, row3];
  
  // .concat()
  let r1 = gridArr[0];
  let r2 = gridArr[1];
  let r3 = gridArr[2];
  let flatGrid = r1.concat(r2).concat(r3);
  // let flatGrid = row1.concat(row2).concat(row3);
  

  if(r1.length === 3 && 
    r2.length === 3 && 
    r3.length === 3) {
    return sudoku(flatGrid); // True or False 
  } else {
    return false;
  }
};

// function add(num1, num2){
//   return num1 + num2;
// }
// add(5, 6)
