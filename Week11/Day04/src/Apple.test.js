import {Apple} from './Apple'

test("getApple return apple", () => {
  let myApple = new Apple();
    expect(myApple.getApple()).toEqual("apple");
  });
