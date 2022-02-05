import { countLetters } from "./countLetters";

test("test with input 'abcabaA'", () => { 
    expect(countLetters("abcabaA")).toEqual({
        "A": 1,
        "a": 3,
        "b": 2,
        "c": 1
        });
});