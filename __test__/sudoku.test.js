import sudoku from "../src/sudoku.js";

describe("sudoku", () => {
  
  test("should return the array given", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(true);
  });

  test("should return the array given containing all numbers from 1 to 9.", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 9, 7, 8])).toEqual(true);
  });

  test("Should test given array contains no repeats", () => {
    expect(sudoku([1, 2, 3, 4, 5, 6, 9, 8, 8])).toEqual(true);
  });

});