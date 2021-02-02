import { TestScheduler } from "jest";
import sudoku from "../src/sudoku.js";

describe("sudoku", () => {
  
  test("should return the array given", () => {
    expect(sudoku([1,2,3,4,5,6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test("should return the array given containing all numbers from 1 to 9.", () => {
    expect(sudoku([1,2,3,4,5,6,7,8,9])).toEqual([1,2,3,4,5,6,7,9]);
  });

});