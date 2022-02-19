import { countLetters } from "./countLetters";

test("countLetters returns with valid letter-number pairs", () => { 
    expect(countLetters("abcabaA")).toEqual({
        "A": 1,
        "a": 3,
        "b": 2,
        "c": 1
        });
});