import { calculateColumnAverage } from "../../Day04/calculateColumnAverage";

test("calculateColumnAverage() with positive integer matrix returns the correct number array", () => {
    expect(calculateColumnAverage([
        [3, 4, 5, 6],
        [1, 2, 3, 2],
        [2, 3, 1, 4]])).toEqual([2, 3, 3, 4]);
});

test("calculateColumnAverage() with positive integer and zero matrix returns the correct number array", () => {
    expect(calculateColumnAverage([
        [0, 4, 5, 6],
        [1, 2, 3, 0]])).toEqual([0.5, 3, 4, 3]);
});

test("calculateColumnAverage() with negative integer matrix returns the correct number array", () => {
    expect(calculateColumnAverage([
        [-1, -4, -5, -6],
        [-1, -2, -3, -1]])).toEqual([-1, -3, -4, -3.5]);
});

test("calculateColumnAverage() with empty array returns empty array", () => {
    expect(calculateColumnAverage(
        [[]])).toEqual([]);
});