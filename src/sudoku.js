export default function sudoku(row) {
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