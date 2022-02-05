import { anagram } from "./anagram";

test("abc is the anagram of cba", () => { 
    expect(anagram("abc","cba")).toBeTruthy();
});

test("aac is not the anagram of cba", () => { 
    expect(anagram("aac","cba")).toBeFalsy();
});