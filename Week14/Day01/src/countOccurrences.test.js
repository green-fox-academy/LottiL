import {countOccurrences} from "../../Day03/countOccurrences";

test("countOccurrences() with strings and positive integers returns the correct object", () => {
    expect(countOccurrences(["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"],[2, 5, 6])).toEqual({
        "f": 3,
        "z": 1,
       "p": 3
     });
  });

  test("countOccurrences() with empty arrays returns the empty object", () => {
    expect(countOccurrences([],[])).toEqual({
     });
  });