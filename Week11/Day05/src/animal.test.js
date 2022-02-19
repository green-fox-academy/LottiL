import { globalAgent } from "http";
import {Animal} from "./animal"

describe('Animal', () => {  
    test("when an animal plays, its hunger increase by one", () => {
        let dog = new Animal();
        dog.play();
        expect(dog.getHunger()).toEqual(51);
    });
  
    test("when an animal eat, its hunger decrease by one", () => { 
        let horse = new Animal;
        horse.eat();
        expect(horse.getHunger()).toEqual(49);
    });
  
    test("gethunger returns the correct value", () => { 
        let cat = new Animal(10,10);
        expect(cat.getHunger()).toEqual(10);
    });
  })