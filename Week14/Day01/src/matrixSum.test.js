import { calculateSumOfMatrix } from "./matrixSum";

test("calculateSumOfMatrix() with positive integer matrix returns the correct number array", () => {
  expect(calculateSumOfMatrix([
    [3, 4, 5, 6],
    [1, 2, 3, 2]])).toEqual([18, 8]);
});

test("calculateSumOfMatrix() with positive integer and zero matrix returns the correct number array", () => {
  expect(calculateSumOfMatrix([
    [0, 4, 5, 6],
    [1, 2, 3, 0]])).toEqual([15, 6]);
});

test("calculateSumOfMatrix() with negative integer matrix returns the correct number array", () => {
  expect(calculateSumOfMatrix([
    [-1, -4, -5, -6],
    [-1, -2, -3, -1]])).toEqual([-16, -7]);
});

test("calculateSumOfMatrix() with empty array returns zero", () => {
  expect(calculateSumOfMatrix(
    [[]])).toEqual([0]);
});