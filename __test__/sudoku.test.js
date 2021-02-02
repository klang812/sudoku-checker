import { sudoku, gridChecker } from "../src/sudoku.js";


describe("sudoku", () => {
  
  test("Should return the array given", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(true);
  });

  test("Should return the array given containing all numbers from 1 to 9.", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 9, 7, 8])).toEqual(true);
  });

  test("Should test given array contains no repeats", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 9, 8, 8])).toEqual(false);
  });

});

describe("gridChecker", ()=> {
  test("should return 3 arrays within 1 arrays", () => {
    expect(gridChecker(
      [3, 5, 7], 
      [2, 4, 6], 
      [1, 8, 9])).toEqual([
        [3, 5, 7], 
        [2, 4, 6], 
        [1, 8, 9]
      ]);
  });
  
});