import { globalAgent } from "http";
import {Animal} from "./animal"

describe('Animal', () => {
    let dog = new Animal();
    let cat = new Animal(10,10);
    let horse = new Animal;
  
    test("when dog plays, its hunger increase ", () => {
        dog.play();
        expect(dog.getHunger()).toEqual(51);
    });
  
    test("when horse eat, its hunger decrease ", () => { 
        horse.eat();
        expect(horse.getHunger()).toEqual(49);
    });
  
    test("cat's hunger is 10", () => { 
        expect(cat.getHunger()).toEqual(10);
    });
  })