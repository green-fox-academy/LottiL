import { sum } from "./sum";

describe('Sum', () => {
  let mySum = new sum();

  test("sum of 1 ,2, and 3 is equal to 6", () => { 
      expect(mySum.sum([1,2,3])).toEqual(6);
  });

  test("sum of 1 is equal to 1", () => { 
    expect(mySum.sum([1])).toEqual(1);
  });

  test("sum of an empty array return zero", () => { 
    expect(mySum.sum([])).toEqual(0);
  });
})