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

export function gridChecker() {
  /*
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  */

  let array = [
    [],
    [],
    []
  ];
  return array;


};
